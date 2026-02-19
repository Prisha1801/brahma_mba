import React from "react";
import { FileText } from "lucide-react";
import HeroSection from "../common/components/HeroSection";
import { greivanceHero } from "../common/data/heroData";

const Grievance = () => {
    return (
        <>
            {/* Hero Section */}
            <HeroSection {...greivanceHero} />

            {/* Grievance Table Section */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Section Heading */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Grievance Documents
                        </h2>
                        <div className="w-16 h-1 bg-red-600 mx-auto mt-3 rounded"></div>
                    </div>

                    {/* Table */}
                    <div className="bg-white shadow-md rounded-xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-left border border-gray-200">

                                {/* Table Head */}
                                <thead className="bg-[#1f2a44] text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-sm font-semibold w-20 border">
                                            Sr. No
                                        </th>
                                        <th className="px-6 py-4 text-sm font-semibold border">
                                            Name
                                        </th>
                                        <th className="px-6 py-4 text-sm font-semibold w-44 border">
                                            PDF / DOCX
                                        </th>
                                    </tr>
                                </thead>

                                {/* Table Body */}
                                <tbody>
                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="px-6 py-4 border text-sm">1</td>
                                        <td className="px-6 py-4 border text-sm font-medium">
                                            Grievance
                                        </td>
                                        <td className="px-6 py-4 border">
                                            <a
                                                href="https://bvim.brahmavalley.edu.in/public/grievance/Grievance.docx"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition"
                                            >
                                                <FileText size={16} />
                                                Download DOCX
                                            </a>
                                        </td>
                                    </tr>

                                    {/* Add more rows here if needed */}

                                </tbody>

                            </table>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Grievance;
