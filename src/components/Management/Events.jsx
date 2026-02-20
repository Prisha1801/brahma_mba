import React, { useState } from "react";
import HeroSection from "../common/components/HeroSection";
import { eventsHero } from "../common/data/heroData";
import event1 from "../../assets/event/event1.jpg"
import event2 from "../../assets/event/event2.jpg"
import event3 from "../../assets/event/event3.jpg"
import event4 from "../../assets/event/event4.jpg"

const events = [
    {
        title: "Group Photos",
        image:
            event1,
    },
    {
        title: "Freshers Party",
        image:
            event2,
    },
    {
        title: "Seminars",
        image: event3,
    },
    {
        title: "Seminars",
        image: event4,
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
