import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import P1 from "../../assets/home/p1.jpeg";
import P2 from "../../assets/home/p2.jpeg";
import P3 from "../../assets/home/p3.jpg";

const HeroCarousel = () => {
    const slides = [
        { url: P1 },
        { url: P2 },
        { url: P3 },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () =>
        setCurrentIndex((prev) => (prev + 1) % slides.length);

    const prevSlide = () =>
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full overflow-hidden group
                    h-[280px] sm:h-[350px] md:h-[500px] lg:h-[620px]">

            {/* Slides */}
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={slides[currentIndex].url}
                    alt="Hero Slide"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full
                     object-contain md:object-cover"
                />
            </AnimatePresence>

            {/* Optional subtle overlay for better readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            {/* Navigation Buttons (Hidden on Mobile) */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-30
                   w-10 h-10 md:w-12 md:h-12 rounded-full
                   bg-white/10 backdrop-blur-md text-white
                   hover:bg-green-600 transition-all duration-300
                   hidden md:flex items-center justify-center
                   border border-white/20"
            >
                <FaChevronLeft size={18} />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-30
                   w-10 h-10 md:w-12 md:h-12 rounded-full
                   bg-white/10 backdrop-blur-md text-white
                   hover:bg-green-600 transition-all duration-300
                   hidden md:flex items-center justify-center
                   border border-white/20"
            >
                <FaChevronRight size={18} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`transition-all duration-500 rounded-full ${index === currentIndex
                                ? "w-8 md:w-10 h-2 bg-green-600"
                                : "w-2 h-2 bg-white/40 hover:bg-white/60"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;