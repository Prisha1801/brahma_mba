import React, { useState, useEffect } from "react";
import HeroSection from "../common/components/HeroSection";
import { gallaryHero } from "../common/data/heroData";

const images = [
    "https://bvim.brahmavalley.edu.in/uploads/gallery/1771330345_6e5cc5cebcedb8f30e88.jpeg",
    "https://bvim.brahmavalley.edu.in/uploads/gallery/1771330345_0e78a8cdd278be8815b9.jpeg",
    "https://bvim.brahmavalley.edu.in/uploads/gallery/1771330345_751bd45654fb97f1232b.jpeg",
    "https://bvim.brahmavalley.edu.in/uploads/gallery/1771330345_b8b300a02367312c0797.jpeg",
    "https://bvim.brahmavalley.edu.in/uploads/gallery/1771330345_cf5bd92500d86c356549.jpeg",
    "https://bvim.brahmavalley.edu.in/uploads/gallery/1771330345_0a6c7b2e2ab7151ef469.jpeg",
    "https://bvim.brahmavalley.edu.in/uploads/gallery/1771330345_fa423e133a2b66caf33b.jpeg",
    "https://bvim.brahmavalley.edu.in/uploads/gallery/1771330345_20820096c298be230370.jpeg",
    "https://bvim.brahmavalley.edu.in/uploads/gallery/1771330345_059d920c9813014f537e.jpeg",
    "https://bvim.brahmavalley.edu.in/uploads/gallery/1771330345_ee52db96bc43f8d36aa8.jpeg",
    "https://bvim.brahmavalley.edu.in/uploads/gallery/1771330345_161cbad0e25dea50dee8.jpeg",
    "https://bvim.brahmavalley.edu.in/uploads/gallery/1771330345_284661bc352a61ae588d.jpeg",
    "https://bvim.brahmavalley.edu.in/uploads/gallery/1771330330_d4b8912fa6e963894093.jpeg",
    "https://bvim.brahmavalley.edu.in/uploads/gallery/1752305737_ad2464492ea559e13147.jpg",
    "https://bvim.brahmavalley.edu.in/uploads/gallery/1752305720_dc76632904df680eb6d5.jpg",
    "https://bvim.brahmavalley.edu.in/uploads/gallery/1752305699_28b7dee27fec74a96879.jpg",
    "https://bvim.brahmavalley.edu.in/uploads/gallery/1752228168_dbd9a7890b88029b81f4.jpg",
    "https://bvim.brahmavalley.edu.in/uploads/gallery/1752228167_ebd10778cb50a80a1503.jpg",
    "https://bvim.brahmavalley.edu.in/uploads/gallery/1752228063_95451da8eac9645c0463.jpg",
    "https://bvim.brahmavalley.edu.in/uploads/gallery/1752228063_ba7f4404e9f8cdf34ab6.jpg",
    "https://bvim.brahmavalley.edu.in/uploads/gallery/1752228063_d835574796af280d9732.jpg",
    "https://bvim.brahmavalley.edu.in/uploads/gallery/1752228063_8942345753a36e34a9eb.jpg",
    "https://bvim.brahmavalley.edu.in/uploads/gallery/1752228063_47f09b9c85dd2a2049db.jpg",
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
