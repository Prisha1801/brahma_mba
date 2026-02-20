import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import P1 from '../../assets/home/p1.jpeg';
import P2 from '../../assets/home/p2.jpeg';
import P3 from '../../assets/home/p3.jpg';

const HeroCarousel = () => {
    const slides = [
        { url: P1 },
        { url: P2 },
        { url: P3 }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-[400px] md:h-[550px] lg:h-[620px] w-full overflow-hidden group">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                    />
                    {/* Subtle gradient overlay at bottom for visual depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bviom-dark/30 via-transparent to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-bviom-green/80 transition-all duration-300 hidden md:flex items-center justify-center border border-white/20"
            >
                <FaChevronLeft size={18} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-bviom-green/80 transition-all duration-300 hidden md:flex items-center justify-center border border-white/20"
            >
                <FaChevronRight size={18} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`transition-all duration-500 rounded-full ${index === currentIndex
                            ? 'w-10 h-2 bg-bviom-green shadow-glow'
                            : 'w-2 h-2 bg-white/40 hover:bg-white/60'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;
