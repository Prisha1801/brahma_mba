import React from "react";
import HeroSection from "../common/components/HeroSection";
import { upcomingEventHero } from "../common/data/heroData";
import { Facebook, Twitter, Linkedin, Pin } from "lucide-react";

const events = [
    {
        id: 1,
        title: "Management Fest",
        subtitle: "Mr. Vijay Khairnar",
        image:
            "https://bvim.brahmavalley.edu.in/uploads/upcoming/1752054349_03e56c0225b9d594f15b.jpg",
    },
    {
        id: 2,
        title: "Ms. Jane Doe",
        subtitle: "Industrial Visits",
        image:
            "https://bvim.brahmavalley.edu.in/uploads/upcoming/1752054471_24a8696c8877ac70fbcf.jpg",
    },
    {
        id: 3,
        title: "Mr. John Smith",
        subtitle: "Management Week",
        image:
            "https://bvim.brahmavalley.edu.in/uploads/upcoming/1752054498_bd2eecd3fcc879e895c6.jpg",
    },
    {
        id: 4,
        title: "Ms. Sarah Lee",
        subtitle: "National Seminars",
        image:
            "https://bvim.brahmavalley.edu.in/uploads/upcoming/1752054528_ee9192952bbeff5d7ce0.jpg",
    },
];

const UpcomingEvents = () => {
    return (
        <>
            <HeroSection {...upcomingEventHero} />

            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Academic Year Events 2025-26
                        </h2>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                        {events.map((event) => (
                            <div
                                key={event.id}
                                className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition duration-300"
                            >
                                {/* Image */}
                                <div className="flex justify-center -mt-14 mb-6">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md"
                                    />
                                </div>

                                {/* Title */}
                                <h4 className="text-lg font-semibold text-gray-900">
                                    {event.title}
                                </h4>

                                {/* Subtitle */}
                                <p className="text-gray-500 mt-1 text-sm">
                                    {event.subtitle}
                                </p>

                                {/* Social Icons */}
                                <div className="flex justify-center gap-4 mt-5 text-gray-400">
                                    <a href="#" className="hover:text-blue-600 transition">
                                        <Facebook size={18} />
                                    </a>
                                    <a href="#" className="hover:text-blue-400 transition">
                                        <Twitter size={18} />
                                    </a>
                                    <a href="#" className="hover:text-blue-700 transition">
                                        <Linkedin size={18} />
                                    </a>
                                    <a href="#" className="hover:text-red-500 transition">
                                        <Pin size={18} />
                                    </a>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    );
};

export default UpcomingEvents;
