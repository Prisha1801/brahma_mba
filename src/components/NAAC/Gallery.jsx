import React, { useState, useEffect } from "react";
import HeroSection from "../common/components/HeroSection";
import { gallaryHero } from "../common/data/heroData";
// now here we will use images from src/assets/gallery folder
import gallery1 from "../../assets/gallery/g1.jpg";
import gallery2 from "../../assets/gallery/g2.jpg";
import gallery3 from "../../assets/gallery/g3.jpg";
import gallery4 from "../../assets/gallery/g4.jpg";
import gallery5 from "../../assets/gallery/g5.jpeg";
import gallery6 from "../../assets/gallery/g6.jpeg";
import gallery7 from "../../assets/gallery/g7.jpeg";
import gallery8 from "../../assets/gallery/g8.jpg";
import gallery9 from "../../assets/gallery/g9.jpg";
import gallery10 from "../../assets/gallery/g10.jpeg";
import gallery11 from "../../assets/gallery/g11.jpeg";
import gallery12 from "../../assets/gallery/g12.jpeg";
import gallery13 from "../../assets/gallery/g13.jpeg";
import gallery14 from "../../assets/gallery/g14.jpeg";
import gallery15 from "../../assets/gallery/g15.jpeg";
import gallery16 from "../../assets/gallery/g16.jpeg";
import gallery18 from "../../assets/gallery/g18.jpeg";
import gallery19 from "../../assets/gallery/g19.jpg";
import gallery20 from "../../assets/gallery/g20.jpeg";
import gallery21 from "../../assets/gallery/g21.jpg"
import gallery22 from "../../assets/gallery/g22.jpg"
import gallery23 from "../../assets/gallery/g23.jpg"

const images = [
    gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10,
    gallery11, gallery23, gallery12, gallery13, gallery14, gallery15, gallery16, gallery18, gallery19,
    gallery20, gallery21, gallery22,
];

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(null);

    const closeModal = () => setCurrentIndex(null);

    const showPrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const showNext = () => {
        setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    // Keyboard support
    useEffect(() => {
        const handleKey = (e) => {
            if (currentIndex === null) return;
            if (e.key === "Escape") closeModal();
            if (e.key === "ArrowLeft") showPrev();
            if (e.key === "ArrowRight") showNext();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [currentIndex]);

    return (
        <>
            <HeroSection {...gallaryHero} />

            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Masonry Layout */}
                    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className="break-inside-avoid cursor-pointer"
                            >
                                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                                    <img
                                        src={img}
                                        alt={`Gallery ${index + 1}`}
                                        className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            {/* Modal */}
            {currentIndex !== null && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
                    onClick={closeModal}
                >
                    <div
                        className="relative max-w-6xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close */}
                        <button
                            className="absolute -top-12 right-0 text-white text-3xl"
                            onClick={closeModal}
                        >
                            ✕
                        </button>

                        {/* Prev */}
                        <button
                            className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-4xl px-4"
                            onClick={showPrev}
                        >
                            ‹
                        </button>

                        {/* Next */}
                        <button
                            className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-4xl px-4"
                            onClick={showNext}
                        >
                            ›
                        </button>

                        {/* Image */}
                        <img
                            src={images[currentIndex]}
                            alt="Preview"
                            className="w-full max-h-[85vh] object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;
