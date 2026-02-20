import React from "react";
import HeroSection from "../common/components/HeroSection";
import { industrialVisitHero } from "../common/data/heroData";
import logo1 from '../../assets/place-part/bajaj.png';
import logo2 from '../../assets/place-part/parle.png';
import logo3 from '../../assets/place-part/hdfc.png';
import logo5 from '../../assets/place-part/kotak.png';
import logo6 from '../../assets/place-part/mahindra.jpeg';
import logo7 from '../../assets/place-part/tcs.png';
import logo8 from '../../assets/place-part/yes-bank.png';
import logo9 from '../../assets/place-part/abb.png';


const visits = [
    {
        name: "YES BANK",
        image: logo8
    },
    {
        name: "BAJAJ FINSERV",
        image: logo1
    },
    {
        name: "HDFC BANK",
        image: logo3
    },
    {
        name: "TCS",
        image: logo7
    },
    {
        name: "KOTAK",
        image: logo5,
    },
    {
        name: "PARLE PVT",
        image: logo2
    },
    {
        name: "Mahindra & Mahindra",
        image: logo6
    },
    {
        name: "ABB",
        image: logo9
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
