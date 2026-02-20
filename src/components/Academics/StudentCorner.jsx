import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import HeroSection from "../common/components/HeroSection";
import { studentCornerHero } from "../common/data/heroData";

const committees = [
    {
        title: "SEMINAR COMMITTEE",
        content: (
            <>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Co-ordinator:</strong> Dr. Sheetal Gade</li>
                    <li><strong>Sub-Co-ordinator:</strong> Prof. Dimpal Zambare</li>
                    <li><strong>Students Representative:</strong></li>
                </ul>
                <ul className="list-disc pl-10 mt-2 space-y-1">
                    <li>Mr. Pavan Jadhav</li>
                    <li>Ms. Gayatri Bachhav</li>
                </ul>
            </>
        ),
    },
    {
        title: "CULTURAL COMMITTEE",
        content: (
            <>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Co-ordinator:</strong> Prof. Dimpal Zamabre</li>
                    <li><strong>Sub-Co-ordinator:</strong> Prof. Rahul Sonawane</li>
                    <li><strong>Students Representative:</strong></li>
                </ul>
                <ul className="list-disc pl-10 mt-2 space-y-1">
                    <li>Mr. Shubham Jain</li>
                    <li>Miss. Sakshi Sharma</li>
                </ul>
            </>
        ),
    },
    {
        title: "INDUSTRY ORIENTATION COMMITTEE",
        content: (
            <>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Co-ordinator:</strong> Mr. Sachin Marke</li>
                    <li><strong>Sub-Co-ordinator:</strong> Prof. Nikita Kekan</li>
                    <li><strong>Students Representative:</strong></li>
                </ul>
                <ul className="list-disc pl-10 mt-2 space-y-1">
                    <li>Mr. Shubham Jain</li>
                    <li>Miss. Sakshi Sharma</li>
                </ul>
            </>
        ),
    },
    {
        title: "SPORTS COMMITTEE",
        content: (
            <>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Co-ordinator:</strong> Prof. Rahul Sonawane</li>
                    <li><strong>Sub-Co-ordinator:</strong> Prof. Dimpal Zamabre</li>
                    <li><strong>Students Representative:</strong></li>
                </ul>
                <ul className="list-disc pl-10 mt-2 space-y-1">
                    <li>Mr. Atharv Rane</li>
                    <li>Mr. Kalpaj Dhumade</li>
                </ul>
            </>
        ),
    },
];

const StudentCorner = () => {
    const [activeIndex, setActiveIndex] = useState(null); // open cultural by default

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...studentCornerHero} />

            {/* ACCORDION SECTION */}
            <section className="bg-gray-100 py-12">
                <div className="max-w-5xl mx-auto px-4 space-y-6">

                    {committees.map((committee, index) => (
                        <div key={index} className="bg-white rounded-md shadow-sm overflow-hidden">

                            {/* HEADER */}
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center bg-[#009448] text-white px-6 py-4 font-semibold tracking-wide hover:bg-green-700 transition"
                            >
                                {committee.title}

                                <ChevronDown
                                    className={`transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {/* CONTENT */}
                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === index ? "max-h-96 p-6" : "max-h-0"
                                    }`}
                            >
                                <div className="text-gray-700 text-sm leading-relaxed">
                                    {committee.content}
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </section>
        </>
    );
};

export default StudentCorner;
