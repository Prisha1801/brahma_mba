import React from "react";
import HeroSection from "../common/components/HeroSection";
import { studentPlacementHero } from "../common/data/heroData";

const placements = [
    {
        name: "ICICI Bank",
        image:
            "https://bvim.brahmavalley.edu.in/uploads/placement/1752052953_17cc086ef243553f205c.png",
    },
    {
        name: "HDFC Bank",
        image:
            "https://bvim.brahmavalley.edu.in/uploads/placement/1752053024_c26e2f3946a17311a498.png",
    },
    {
        name: "Kotak Mahindra",
        image:
            "https://bvim.brahmavalley.edu.in/uploads/placement/1752053252_5c114bf784e01f6d741a.png",
    },
    {
        name: "Yes Bank",
        image:
            "https://bvim.brahmavalley.edu.in/uploads/placement/1752053349_d2034b2805e98bfac068.png",
    },
    {
        name: "TCS (BPS)",
        image:
            "https://bvim.brahmavalley.edu.in/uploads/placement/1752053360_5c4bdb204086f01574d7.png",
    },
    {
        name: "BAJAJ FINANCE",
        image:
            "https://bvim.brahmavalley.edu.in/uploads/placement/1752303171_cc58b7013a58c98eb59d.png",
    },
    {
        name: "BYJUS",
        image:
            "https://bvim.brahmavalley.edu.in/uploads/placement/1752303210_0439c7f0f9b3a7793d57.png",
    },
    {
        name: "JARO EDU",
        image:
            "https://bvim.brahmavalley.edu.in/uploads/placement/1752303267_3cbc2b6e70fb05db3678.png",
    },
    {
        name: "L&T",
        image:
            "https://bvim.brahmavalley.edu.in/uploads/placement/1752303305_a971852dad4dd0c39fbf.png",
    },
    {
        name: "RELIANCE RETAIL",
        image:
            "https://bvim.brahmavalley.edu.in/uploads/placement/1752303381_bf5f22e02637fcb90c0c.png",
    },
    {
        name: "TCS",
        image:
            "https://bvim.brahmavalley.edu.in/uploads/placement/1752303412_12eee951262285f51093.png",
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
