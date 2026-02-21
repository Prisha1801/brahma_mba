import React from "react";
import HeroSection from '../common/components/HeroSection';
import { CommitteeHero } from '../common/data/heroData';
import { FaFilePdf } from "react-icons/fa";

const committees = [
    {
        name: "Academic Monitoring Committee – 2025–26",
        pdf: "/uploads/committee/Academic Monitoring Committee - 2025_26.pdf",
    },
    {
        name: "Anti-Ragging Committee – 2025–26",
        pdf: "/uploads/committee/Anti_Ragging Committee - 2025_26.pdf",
    },
    {
        name: "Anti-Ragging Squad Committee – 2025–26",
        pdf: "/uploads/committee/Anti_Ragging Squad Committee - 2025_26.pdf",
    },
    {
        name: "College Development Committee – 2025–26",
        pdf: "/uploads/committee/College Development Committee - 2025_26.pdf",
    },
    {
        name: "Cultural Committee – 2025–26",
        pdf: "/uploads/committee/Cultural Committee - 2025_26.pdf",
    },
    {
        name: "Equal Opportunity Cell Committee – 2025–26",
        pdf: "/uploads/committee/Equal Opportunity Cell Committee - 2025_26.pdf",
    },
    {
        name: "Internal Complaint Committee – 2025–26",
        pdf: "/uploads/committee/Internal Complaint Committee - 2025_26.pdf",
    },
    {
        name: "Internal Quality Assurance Cell Committee – 2025–26",
        pdf: "/uploads/committee/Internal Quality Assurance Cell Committee - 2025_26.pdf",
    },
    {
        name: "Minority Cell Committee – 2025–26",
        pdf: "/uploads/committee/Minority Cell Committee - 2025_26.pdf",
    },
    {
        name: "National Education Policy (NEP) Committee – 2025–26",
        pdf: "/uploads/committee/National Education Policy Committee (NEP) - 2025_26.pdf",
    },
    {
        name: "Other Backward Classes (OBC) Committee – 2025–26",
        pdf: "/uploads/committee/Other Backward Classes (OBC) Committee - 2025_26.pdf",
    },
    {
        name: "Student Council Committee – 2025–26",
        pdf: "/uploads/committee/Student Council Committee - 2025_26.pdf",
    },
    {
        name: "Student Grievance Redressal Committee – 2025–26",
        pdf: "/uploads/committee/Student Grievance Redrassal Committee - 2025_26.pdf",
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
                                            <FaFilePdf className="text-5xl text-[#e63946]" />
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
                                        className="inline-flex items-center gap-2 
           bg-white text-[#e63946] 
           border border-[#e63946] 
           hover:bg-[#e63946] hover:text-white
           px-8 py-3 rounded-full font-medium transition duration-300"
                                    >
                                        <span>View PDF</span>
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
