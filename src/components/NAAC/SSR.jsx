import React from "react";
import HeroSection from "../common/components/HeroSection";
import { ssrHero } from "../common/data/heroData";

const SSR = () => {
    return (
        <>
            <HeroSection {...ssrHero} />
            <div className="max-w-5xl mx-auto my-12 px-4">

                {/* Title */}
                <h4 className="text-center text-xl font-bold text-slate-800 mb-6">
                    Cycle I Documents
                </h4>

                {/* Table Wrapper */}
                <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                    <table className="min-w-full border border-gray-300 text-center">

                        {/* Table Head */}
                        <thead>
                            <tr className="bg-slate-700 text-white">
                                <th className="py-3 px-4 border-r border-slate-600 font-semibold">
                                    Sr No
                                </th>
                                <th className="py-3 px-4 font-semibold">
                                    Title
                                </th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            <tr className="hover:bg-gray-50 transition">
                                <td className="py-3 px-4 border-t border-gray-300">
                                    1
                                </td>
                                <td className="py-3 px-4 border-t border-gray-300">
                                    <a
                                        href="https://bvim.brahmavalley.edu.in/public/assets/pdf/naac/ssr/1752304962_03e4aa7b5fe179cec8db.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 font-medium hover:text-blue-800 hover:underline transition"
                                    >
                                        SSR Documents
                                    </a>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>

            </div>
        </>
    );
};

export default SSR;
