import React, { useState } from "react";
import HeroSection from "../common/components/HeroSection";
import { admissionCriteriaHero } from "../common/data/heroData";

const AdmissionCriteria = () => {
    const [activeIndex, setActiveIndex] = useState(null); // all closed initially

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        {
            title: "MBA Admission Criteria",
            content: (
                <div className="space-y-8 text-gray-700 text-justify">

                    {/* 1. Eligibility Criteria */}
                    <div>
                        <h4 className="font-semibold text-green-700 mb-3">
                            1. Eligibility Criteria:
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <span className="font-semibold">• Bachelor's Degree:</span>
                                <p className="ml-5">
                                    Candidates must have completed a minimum three-year bachelor's degree from a recognized university.
                                </p>
                            </li>

                            <li>
                                <span className="font-semibold">• Minimum Marks:</span>
                                <p className="ml-5">
                                    A minimum of 50% marks in aggregate is required (45% for reserved categories).
                                </p>
                            </li>

                            <li>
                                <span className="font-semibold">• Final Year Students:</span>
                                <p className="ml-5">
                                    Students in their final year of their bachelor's degree can also apply, but they must submit their degree during the counselling process.
                                </p>
                            </li>

                            <li>
                                <span className="font-semibold">• MAH CET Score:</span>
                                <p className="ml-5">
                                    Candidates need to have scored more than zero in the MAH CET exam.
                                </p>
                            </li>

                            <li>
                                <span className="font-semibold">• Alternative Exams:</span>
                                <p className="ml-5">
                                    Candidates can also use scores from other recognized MBA entrance exams like CAT, GMAT, XAT, MAT, ATMA, or CMAT.
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* 2. Maharashtra State Candidature */}
                    <div>
                        <h4 className="font-semibold text-green-700 mb-3">
                            2. Maharashtra State Candidature:
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <span className="font-semibold">• Indian National:</span>
                                <p className="ml-5">
                                    Candidates must be Indian citizens.
                                </p>
                            </li>

                            <li>
                                <span className="font-semibold">• 50% Marks (General):</span>
                                <p className="ml-5">
                                    General category candidates need a minimum of 50% marks in their bachelor's degree.
                                </p>
                            </li>

                            <li>
                                <span className="font-semibold">• 45% Marks (Reserved):</span>
                                <p className="ml-5">
                                    Reserved categories (SC, ST, OBC, etc.) require a minimum of 45% marks.
                                </p>
                            </li>

                            <li>
                                <span className="font-semibold">• MAH CET Score:</span>
                                <p className="ml-5">
                                    A score of more than zero in the MAH CET exam is required.
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* 3. All India / J&K Migrant */}
                    <div>
                        <h4 className="font-semibold text-green-700 mb-3">
                            3. All India Candidature / Jammu and Kashmir Migrant Candidature:
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <span className="font-semibold">• Indian National:</span>
                                <p className="ml-5">
                                    Candidates must be Indian citizens.
                                </p>
                            </li>

                            <li>
                                <span className="font-semibold">• 50% Marks:</span>
                                <p className="ml-5">
                                    A minimum of 50% marks in their bachelor's degree is required.
                                </p>
                            </li>

                            <li>
                                <span className="font-semibold">• MAH CET / Alternative Score:</span>
                                <p className="ml-5">
                                    Candidates need to have a score of more than zero in the MAH CET or other recognized MBA entrance exams.
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* 4. NRI / OCI / PIO / Foreign National */}
                    <div>
                        <h4 className="font-semibold text-green-700 mb-3">
                            4. NRI / OCI / PIO / Foreign National / Children of Indian Workers in Gulf Countries:
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <span className="font-semibold">• Bachelor's Degree:</span>
                                <p className="ml-5">
                                    A minimum three-year bachelor's degree with 50% marks or equivalent is required from a UGC or AIU recognized university.
                                </p>
                            </li>

                            <li>
                                <span className="font-semibold">• MAH CET Score:</span>
                                <p className="ml-5">
                                    Candidates need to have scored more than zero in the MAH CET.
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* 5. Important Points */}
                    <div>
                        <h4 className="font-semibold text-green-700 mb-3">
                            5. Important Points:
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <span className="font-semibold">• Documentation:</span>
                                <p className="ml-5">
                                    Candidates need to provide valid documentation to support their eligibility.
                                </p>
                            </li>

                            <li>
                                <span className="font-semibold">• Single Application:</span>
                                <p className="ml-5">
                                    Candidates are allowed to fill out only one application form for MAH CET.
                                </p>
                            </li>

                            <li>
                                <span className="font-semibold">• Caste Certificates:</span>
                                <p className="ml-5">
                                    Reserved category candidates may need to submit caste validity certificates and non-creamy layer certificates during the verification process.
                                </p>
                            </li>
                        </ul>
                    </div>

                </div>
            ),
        },

        {
            title: "BBA Admission Criteria",
            content: (
                <div className="space-y-8 text-gray-700 text-justify">

                    {/* Program Overview */}
                    <div>
                        <h4 className="font-semibold text-green-700 mb-3">
                            BBA Program Overview
                        </h4>
                        <p>
                            A 3-year full-time undergraduate program aligned with NEP-2020,
                            providing academic flexibility through a multiple-entry/exit system
                            (Certificate after 1 year, Diploma after 2 years, Degree after 3 years).
                        </p>
                        <p className="mt-3">
                            Designed for students aiming for international business,
                            cross-cultural competencies, and global corporate exposure.
                        </p>
                    </div>

                    {/* Eligibility & Admission */}
                    <div>
                        <h4 className="font-semibold text-green-700 mb-3">
                            Eligibility & Admission
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                • Completion of 10+2 in any stream with English as a mandatory subject
                                and minimum 40% marks.
                            </li>
                            <li>• OR Two-year diploma.</li>
                            <li>• OR Three-year diploma after 10th.</li>
                            <li>• OR MCVC certification.</li>
                            <li>• Entrance through MAH-B CET (Common Entrance Test).</li>
                        </ul>
                    </div>

                    {/* Program Structure & Syllabus */}
                    <div>
                        <h4 className="font-semibold text-green-700 mb-3">
                            Program Structure & Syllabus
                        </h4>
                        <p className="mb-3">
                            Based on the CBCS pattern and SPPU curriculum:
                        </p>

                        {/* Years 1 & 2 */}
                        <div className="space-y-3">
                            <h5 className="font-semibold text-gray-800">
                                Years 1 & 2 (Foundational Business + Skill Courses)
                            </h5>
                            <ul className="space-y-2">
                                <li>
                                    • Core Subjects: Principles of Management, Marketing, Finance,
                                    Accounting, Cost Accounting, Business Mathematics & Statistics,
                                    Organizational Behaviour, HRM, etc.
                                </li>
                                <li>
                                    • Skill Courses: Communication, Computing (Tally/Excel/ERP),
                                    IT & Business Analytics, AI/ML introductory sessions.
                                </li>
                                <li>
                                    • Practical Exposure: Physical education, soft-skills classes,
                                    CSR & environmental awareness modules, vocational electives.
                                </li>
                            </ul>
                        </div>

                        {/* Year 3 */}
                        <div className="space-y-3 mt-5">
                            <h5 className="font-semibold text-gray-800">
                                Year 3 (International Business Focus + Projects)
                            </h5>

                            <p className="font-medium">Semester III–IV:</p>
                            <ul className="space-y-2">
                                <li>• Foreign Language I & II (French / German).</li>
                                <li>
                                    • International Economics, Export-Import Procedures,
                                    Supply Chain Management, Logistics, MIS, Business Ethics, etc.
                                </li>
                            </ul>

                            <p className="font-medium mt-3">Semester V–VI:</p>
                            <ul className="space-y-2">
                                <li>
                                    • International Marketing & Financial Management,
                                    Foreign Exchange, Cross-Cultural Management,
                                    International HRM, Project Management.
                                </li>
                                <li>
                                    • Agri-Exports, Service Management, Brand Management.
                                </li>
                                <li>
                                    • Includes Internship & Viva/Project Modules.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Key Objectives & Pedagogy */}
                    <div>
                        <h4 className="font-semibold text-green-700 mb-3">
                            Key Objectives & Pedagogy
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                • Strengthening global business acumen, cross-cultural communication,
                                foreign exchange markets, and supply-chain understanding.
                            </li>
                            <li>
                                • Emphasis on internships, project-based assignments,
                                case studies, and foreign language training.
                            </li>
                            <li>
                                • Industry-ready, research-oriented curriculum aligned with
                                NEP flexibility principles.
                            </li>
                        </ul>
                    </div>

                    {/* Special Features & NEP Alignment */}
                    <div>
                        <h4 className="font-semibold text-green-700 mb-3">
                            Special Features & NEP Alignment
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                • Flexible exit points: Certificate (1 year),
                                Diploma (2 years), Degree (3 years) under NEP-2020.
                            </li>
                            <li>
                                • Focus on global perspective, supply chains, logistics,
                                digital learning, and language skills.
                            </li>
                            <li>
                                • Designed for aspiring researchers and international
                                business professionals.
                            </li>
                        </ul>
                    </div>

                </div>
            ),
        }
        ,
    ];

    return (
        <div>
            {/* HERO SECTION */}
            <HeroSection {...admissionCriteriaHero} />

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

export default AdmissionCriteria;
