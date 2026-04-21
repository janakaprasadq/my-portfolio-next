import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    // Simple query to keep DB alive
    await prisma.profile.findFirst();
    return NextResponse.json({ 
      success: true, 
      message: "Database kept alive",
      timestamp: new Date().toISOString() 
    });
  } catch (error) {
    console.error("Keep-alive error:", error);
    return NextResponse.json({ 
      success: false, 
      message: "Database ping failed" 
    }, { status: 500 });
  }
}
