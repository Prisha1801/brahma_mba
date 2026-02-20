import React from "react";
import HeroSection from "../common/components/HeroSection";
import { iiqaHero } from "../common/data/heroData";

const IIQA = () => {
    return (
        <>
            <HeroSection {...iiqaHero} />
            <section className="py-16 bg-gray-100">
                <div className="max-w-5xl mx-auto px-6">

                    {/* Section Heading */}
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                            Cycle I Documents
                        </h2>
                    </div>

                    {/* Table Card */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">

                        <div className="overflow-x-auto">
                            <table className="min-w-full text-center border border-gray-200">

                                {/* Table Head */}
                                <thead className="bg-gray-700 text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-sm font-semibold border">
                                            Sr No
                                        </th>
                                        <th className="px-6 py-4 text-sm font-semibold border">
                                            Title
                                        </th>
                                    </tr>
                                </thead>

                                {/* Table Body */}
                                <tbody>
                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="px-6 py-4 border text-sm">1</td>
                                        <td className="px-6 py-4 border text-sm">
                                            <a
                                                href="/uploads/alumni/iiqa.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800 font-medium"
                                            >
                                                IIQA Documents
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default IIQA;
