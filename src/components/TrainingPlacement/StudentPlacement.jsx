import React from "react";
import HeroSection from "../common/components/HeroSection";
import { studentPlacementHero } from "../common/data/heroData";
import logo1 from '../../assets/place-part/bajaj.png';
import logo2 from '../../assets/place-part/byjus.png';
import logo3 from '../../assets/place-part/icici.png';
import logo4 from '../../assets/place-part/jaro.png';
import logo5 from '../../assets/place-part/kotak.png';
import logo6 from '../../assets/place-part/reliance.png';
import logo7 from '../../assets/place-part/tcs.png';
import logo8 from '../../assets/place-part/yes-bank.png';
import logo9 from '../../assets/place-part/larsen.png';
import logo10 from '../../assets/place-part/hdfc.png';
import logo11 from '../../assets/place-part/tcs-bps.png';

const placements = [
    {
        name: "ICICI Bank",
        image: logo3,
    },
    {
        name: "HDFC Bank",
        image: logo10,
    },
    {
        name: "Kotak Mahindra",
        image: logo5,
    },
    {
        name: "Yes Bank",
        image: logo8,
    },
    {
        name: "TCS (BPS)",
        image: logo11,
    },
    {
        name: "BAJAJ FINANCE",
        image: logo1,
    },
    {
        name: "BYJUS",
        image: logo2,
    },
    {
        name: "JARO EDU",
        image: logo4,
    },
    {
        name: "L&T",
        image: logo9,
    },
    {
        name: "RELIANCE RETAIL",
        image: logo6,
    },
    {
        name: "TCS",
        image: logo7,
    },
];

const StudentPlacement = () => {
    return (
        <>
            <HeroSection {...studentPlacementHero} />

            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-3xl font-semibold text-center text-[#0b2c4d] mb-12">
                        Our Students Have Been Placed In
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {placements.map((company, index) => (
                            <div key={index} className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition duration-300">

                                <img
                                    src={company.image}
                                    alt={company.name}
                                    className="max-h-24 mx-auto object-contain mb-4"
                                />

                                <h5 className="text-gray-800 font-semibold text-sm">
                                    {company.name}
                                </h5>

                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
};

export default StudentPlacement;
