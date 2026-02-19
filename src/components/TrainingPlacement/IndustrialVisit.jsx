import React from "react";
import HeroSection from "../common/components/HeroSection";
import { industrialVisitHero } from "../common/data/heroData";

const visits = [
    {
        name: "YES BANK",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1755855425_a2253f35333154ebf461.png",
    },
    {
        name: "BAJAJ FINSERV",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1755855398_ab1b5f78a38d55caf7eb.png",
    },
    {
        name: "HDFC BANK",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1755855349_63a299c3e27c1a5abfcd.png",
    },
    {
        name: "TCS",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1755855325_4a129330797cea0e2703.png",
    },
    {
        name: "KOTAK",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1755855184_d8cc670864c6ab9adf79.png",
    },
    {
        name: "PARLE PVT",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1752304052_7b9206ccff1024895e0b.png",
    },
    {
        name: "Mahindra & Mahindra",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1752302808_a7597924c451c8e9e158.jpeg",
    },
    {
        name: "ABB",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1752302291_1715694aa444213f3410.png",
    },
];

const IndustrialVisit = () => {
    return (
        <>
            <HeroSection {...industrialVisitHero} />

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {visits.map((visit, index) => (
                        <div key={index} className="text-center">
                            <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition duration-300">
                                <img
                                    src={visit.image}
                                    alt={visit.name}
                                    className="h-48 w-full object-contain bg-white p-3 rounded-md"
                                />
                            </div>
                            <h6 className="mt-3 text-gray-800 font-semibold text-sm">
                                {visit.name}
                            </h6>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default IndustrialVisit;
