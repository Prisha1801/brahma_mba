import React from "react";
import HeroSection from '../common/components/HeroSection';
import { CommitteeHero } from '../common/data/heroData';

const committees = [
    {
        name: "Academic Monitoring Committee – 2025–26",
        pdf: "https://bvim.brahmavalley.edu.in/public/committees/Academic%20Monitoring%20Committee%20-%202025_26.pdf",
    },
    {
        name: "Anti-Ragging Committee – 2025–26",
        pdf: "https://bvim.brahmavalley.edu.in/public/committees/Anti_Ragging%20Committee%20-%202025_26.pdf",
    },
    {
        name: "Anti-Ragging Squad Committee – 2025–26",
        pdf: "https://bvim.brahmavalley.edu.in/public/committees/Anti_Ragging%20Squad%20Committee%20-%202025_26.pdf",
    },
    {
        name: "College Development Committee – 2025–26",
        pdf: "https://bvim.brahmavalley.edu.in/public/committees/College%20Development%20Committee%20-%202025_26.pdf",
    },
    {
        name: "Cultural Committee – 2025–26",
        pdf: "https://bvim.brahmavalley.edu.in/public/committees/Cultural%20Committee%20-%202025_26.pdf",
    },
    {
        name: "Equal Opportunity Cell Committee – 2025–26",
        pdf: "https://bvim.brahmavalley.edu.in/public/committees/Equal%20Opportunity%20Cell%20Committee%20-%202025_26.pdf",
    },
    {
        name: "Internal Complaint Committee – 2025–26",
        pdf: "https://bvim.brahmavalley.edu.in/public/committees/Internal%20Complaint%20Committee%20-%202025_26.pdf",
    },
    {
        name: "Internal Quality Assurance Cell Committee – 2025–26",
        pdf: "https://bvim.brahmavalley.edu.in/public/committees/Internal%20Quality%20Assurance%20Cell%20Committee%20-%202025_26.pdf",
    },
    {
        name: "Minority Cell Committee – 2025–26",
        pdf: "https://bvim.brahmavalley.edu.in/public/committees/Minority%20Cell%20Committee%20-%202025_26.pdf",
    },
    {
        name: "National Education Policy (NEP) Committee – 2025–26",
        pdf: "https://bvim.brahmavalley.edu.in/public/committees/National%20Education%20Policy%20Committee%20%28NEP%29%20-%202025_26.pdf",
    },
    {
        name: "Other Backward Classes (OBC) Committee – 2025–26",
        pdf: "https://bvim.brahmavalley.edu.in/public/committees/Other%20Backward%20Classes%20%28OBC%29%20Committee%20-%202025_26.pdf",
    },
    {
        name: "Student Council Committee – 2025–26",
        pdf: "https://bvim.brahmavalley.edu.in/public/committees/Student%20Council%20Committee%20-%202025_26.pdf",
    },
    {
        name: "Student Grievance Redressal Committee – 2025–26",
        pdf: "https://bvim.brahmavalley.edu.in/public/committees/Student%20Grievance%20Redrassal%20Committee%20-%202025_26.pdf",
    },
];

const Committees = () => {
    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...CommitteeHero} />

            {/* COMMITTEES GRID */}
            <section className="bg-[#eef1f6] py-20">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1f2b4d]">
                            Our Committees
                        </h2>
                        <div className="w-14 h-1 bg-red-500 mx-auto mt-3 rounded-full"></div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                        {committees.map((committee, index) => (
                            <div
                                key={index}
                                className="rounded-2xl bg-[#f1f3f7] shadow-md overflow-hidden transition hover:shadow-lg"
                            >
                                {/* Top Grey Section */}
                                <div className="h-40 bg-[#d9dee7] flex items-center justify-center relative">
                                    <div className="absolute -bottom-10">
                                        <div className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden bg-white flex items-center justify-center">
                                            <img
                                                src="/assets/person.png"
                                                alt="committee"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Section */}
                                <div className="pt-14 pb-8 px-6 text-center">
                                    <p className="text-[#1f2b4d] font-semibold text-[15px] leading-snug mb-6">
                                        {committee.name}
                                    </p>

                                    <a
                                        href={committee.pdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 bg-[#e63946] hover:bg-[#d62839] text-white px-8 py-3 rounded-full font-medium transition duration-300"
                                    >
                                        📄 View PDF
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

export default Committees;
