import React, { useState } from "react";
import HeroSection from "../common/components/HeroSection";
import { eventsHero } from "../common/data/heroData";

const events = [
    {
        title: "Group Photos",
        image:
            "https://bvim.brahmavalley.edu.in/uploads/events/1752227593_69ca783ecd0fe6342434.jpg",
    },
    {
        title: "Freshers Party",
        image:
            "https://bvim.brahmavalley.edu.in/uploads/events/1752227568_e70f0be7540435df552d.jpg",
    },
    {
        title: "Seminars",
        image:
            "https://bvim.brahmavalley.edu.in/uploads/events/1752227537_17eede64ddc5f0386533.jpg",
    },
    {
        title: "Seminars",
        image:
            "https://bvim.brahmavalley.edu.in/uploads/events/1752227429_089e253eed9d2cbb6a7a.jpg",
    },
];

const Events = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <HeroSection {...eventsHero} />

            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-red-600 mb-12">
                        Events
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {events.map((event, index) => (
                            <div key={index} className="text-center">
                                <div
                                    onClick={() => setSelectedImage(event.image)}
                                    className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer"
                                >
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="h-72 w-full object-cover hover:scale-105 transition duration-300"
                                    />
                                </div>

                                <h6 className="mt-4 text-gray-800 font-semibold text-sm">
                                    {event.title}
                                </h6>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-4xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute -top-10 right-0 text-white text-3xl"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✕
                        </button>

                        <img
                            src={selectedImage}
                            alt="Preview"
                            className="w-full max-h-[80vh] object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Events;
