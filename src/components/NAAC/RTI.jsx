import React from "react";
import HeroSection from "../common/components/HeroSection";
import { naacDocumentsHero } from "../common/data/heroData";


const RTI = () => {
    return (
        <>
            <HeroSection {...naacDocumentsHero} />
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
                            <tr className="bg-gray-100">
                                <td
                                    colSpan="2"
                                    className="py-4 px-4 font-semibold text-gray-700 border-t border-gray-300"
                                >
                                    No documents found.
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>

            </div>
        </>
    );
};

export default RTI;
