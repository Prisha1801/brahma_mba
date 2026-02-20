import React, { useState } from "react";
import { eligibilityHero } from "../common/data/heroData";
import HeroSection from "../common/components/HeroSection";
const Eligibility = () => {
    const [activeIndex, setActiveIndex] = useState(null); // all closed initially

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        {
            title: "MBA Eligibility Criteria",
            content: (
                <div className="space-y-8 text-gray-700 text-justify">

                    {/* 1. Academic Qualification */}
                    <div>
                        <h4 className="font-semibold text-green-700 mb-3">
                            1. Academic Qualification
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                • A 3-year bachelor’s degree in any discipline from a UGC/AIU-recognized university.
                            </li>
                            <li>
                                • Minimum aggregate of 50% for General category; 45% for SC/ST/OBC/PwD candidates from Maharashtra state.
                                Final-year students may apply provisionally, provided they pass before admissions conclude.
                            </li>
                        </ul>
                    </div>

                    {/* 2. Nationality & Domicile */}
                    <div>
                        <h4 className="font-semibold text-green-700 mb-3">
                            2. Nationality & Domicile
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                • Must be an Indian citizen (NRI/OCI/PIO may apply under specific categories).
                            </li>
                            <li>
                                • Maharashtra domicile/residency definitions include several candidate types (Types A–E),
                                based on HSC location, parental domicile, or employment in the state.
                            </li>
                        </ul>
                    </div>

                    {/* 3. Entrance Exams */}
                    <div>
                        <h4 className="font-semibold text-green-700 mb-3">
                            3. Entrance Exams
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                • MAH–MBA/MMS CET is mandatory for Maharashtra State candidates.
                            </li>
                            <li>
                                • All-India candidates (outside Maharashtra) must have a valid score in
                                MAH-CET or CAT/XAT/MAT/CMAT/ATMA/GMAT.
                            </li>
                        </ul>
                    </div>

                    {/* 4. Age */}
                    <div>
                        <h4 className="font-semibold text-green-700 mb-3">
                            4. Age
                        </h4>
                        <p>
                            No upper age limit; minimum requirement is completion of a bachelor’s degree.
                        </p>
                    </div>

                    {/* Steps to Apply */}
                    <div>
                        <h4 className="font-semibold text-green-700 mb-3">
                            Steps to Apply
                        </h4>
                        <ol className="list-decimal pl-6 space-y-3">
                            <li>
                                Meet eligibility: Degree with minimum aggregate, nationality & category paperwork.
                            </li>
                            <li>
                                Take an entrance exam: MAH-CET (State) or CAT/XAT/MAT/CMAT/etc. for All-India candidates.
                            </li>
                            <li>
                                Apply through DTE’s Centralized Admission Process (CAP):
                                Upload documents (marksheets, certificates, scorecards).
                            </li>
                            <li>
                                Attend CAP rounds: Counseling, college choice submission,
                                GD/PI, then final seat allotment.
                            </li>
                        </ol>
                    </div>

                </div>
            ),
        },
        {
            title: "MBA Eligibility Summary",
            content: (
                <div className="space-y-6 text-gray-700">

                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-300 text-sm">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                        Category
                                    </th>
                                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                        Academic
                                    </th>
                                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                        Entrance Exam
                                    </th>
                                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                        Additional Notes
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="hover:bg-gray-50">
                                    <td className="border border-gray-300 px-4 py-3">
                                        General*
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3">
                                        50% at graduation
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3">
                                        MAH-CET (Maha) or MAH-CET/CAT/XAT/etc (Non-Maha)
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3">
                                        Indian national, no age limit
                                    </td>
                                </tr>

                                <tr className="hover:bg-gray-50">
                                    <td className="border border-gray-300 px-4 py-3">
                                        Reserved (Maha only)
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3">
                                        45% at graduation
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3">
                                        Same as above
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3">
                                        Maharashtra domicile + category certificates
                                    </td>
                                </tr>

                                <tr className="hover:bg-gray-50">
                                    <td className="border border-gray-300 px-4 py-3">
                                        Final-Year Students
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3">
                                        Appearing in final year
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3">
                                        Eligible provisionally
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3">
                                        Degree requirement must be met before admission
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-sm text-gray-600">
                        *General = Open category including OMS (Outside Maharashtra State) and Maharashtra open quota.
                    </p>

                </div>
            ),
        },
        {
            title: "BBA Eligibility Criteria",
            content: (
                <div className="space-y-8 text-gray-700 text-justify">

                    {/* 1. Educational Qualification */}
                    <div>
                        <h4 className="font-semibold text-green-700 mb-3">
                            1. Educational Qualification
                        </h4>
                        <p>
                            Candidates must have passed the 12th standard (HSC) or an equivalent
                            examination from a recognized board or university.
                        </p>
                    </div>

                    {/* 2. Stream */}
                    <div>
                        <h4 className="font-semibold text-green-700 mb-3">
                            2. Stream
                        </h4>
                        <p>
                            The 12th standard can be from any stream
                            (Arts, Science, Commerce, or Vocational).
                        </p>
                    </div>

                    {/* 3. Minimum Marks */}
                    <div>
                        <h4 className="font-semibold text-green-700 mb-3">
                            3. Minimum Marks
                        </h4>
                        <p>
                            A minimum of 45% marks is generally required for the General category,
                            while reserved categories (such as candidates from Maharashtra)
                            may have a slightly lower requirement, typically 40%.
                        </p>
                    </div>

                    {/* 4. English Subject */}
                    <div>
                        <h4 className="font-semibold text-green-700 mb-3">
                            4. English Subject
                        </h4>
                        <p>
                            English must be one of the subjects passed at the 10+2 level.
                        </p>
                    </div>

                    {/* 5. Entrance Exam */}
                    <div>
                        <h4 className="font-semibold text-green-700 mb-3">
                            5. Entrance Exam
                        </h4>
                        <p>
                            Some colleges or departments within SPPU may conduct an entrance
                            exam for BBA admissions, such as an Online Entrance Examination (OEE).
                        </p>
                    </div>

                    {/* 6. Specifics */}
                    <div>
                        <h4 className="font-semibold text-green-700 mb-3">
                            6. Specific Requirements
                        </h4>
                        <p>
                            The Department of Management Sciences (PUMBA) at SPPU has specific
                            requirements, including passing 10+2 with English as a compulsory
                            subject and a minimum of 45% marks (40% for reserved categories
                            from Maharashtra).
                        </p>
                    </div>

                </div>
            ),
        }
    ];

    return (
        <div>
            {/* HERO SECTION */}
            <HeroSection {...eligibilityHero} />

            {/* ACCORDION SECTION */}
            <div className="max-w-5xl mx-auto my-12 px-4">
                {accordionData.map((item, index) => (
                    <div
                        key={index}
                        className="mb-4 border rounded-xl overflow-hidden shadow-sm"
                    >
                        {/* Header */}
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full flex justify-between items-center px-6 py-4 bg-[#009448] text-white font-semibold text-left"
                        >
                            {item.title}
                            <span
                                className={`transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                                    }`}
                            >
                                ▾
                            </span>
                        </button>

                        {/* Content */}
                        <div
                            className={`transition-all duration-500 overflow-hidden ${activeIndex === index
                                ? "max-h-[2000px] opacity-100 p-6"
                                : "max-h-0 opacity-0"
                                }`}
                        >
                            {item.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Eligibility;