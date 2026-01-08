"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageViewerProps {
    isOpen: boolean;
    onClose: () => void;
    images: string[]; // Can be a single image (array of length 1) or gallery
}

export default function ImageViewer({ isOpen, onClose, images }: ImageViewerProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
                    onClick={onClose}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 md:top-8 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
                    >
                        <X size={24} />
                    </button>

                    {/* Navigation Buttons (Only if multiple images) */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={handlePrev}
                                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
                            >
                                <ChevronLeft size={32} />
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
                            >
                                <ChevronRight size={32} />
                            </button>
                        </>
                    )}

                    {/* Image */}
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="relative w-full h-full max-w-5xl max-h-[85vh] flex items-center justify-center pointer-events-none"
                    >
                        <div className="relative w-full h-full pointer-events-auto">
                            {/* Ensure images array has content */}
                            {images[currentIndex] && (
                                <Image
                                    src={images[currentIndex]}
                                    alt={`Project Image ${currentIndex + 1}`}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            )}

                        </div>
                    </motion.div>

                    {/* Counter */}
                    {images.length > 1 && (
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium bg-black/50 px-4 py-2 rounded-full">
                            {currentIndex + 1} / {images.length}
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
