import React from "react";
import HeroSection from "../common/components/HeroSection";
import { personalDevelopmentHero } from "../common/data/heroData";

const PersonalDevelopment = () => {
    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...personalDevelopmentHero} />

            {/* CONTENT SECTION */}
            {/* CONTENT SECTION */}
            {/* CONTENT SECTION */}
            <section className="bg-gray-100 py-12 sm:py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

                        <div className="flex flex-col md:flex-row h-auto md:h-[520px]">

                            {/* IMAGE SIDE */}
                            <div className="md:w-1/2 w-full h-64 sm:h-80 md:h-full">
                                <img
                                    src="https://bvim.brahmavalley.edu.in/public/uploads/1752044682_8b8a753421ae46637e10.jpg"
                                    alt="Personality Development"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* CONTENT SIDE WITH SCROLL */}
                            <div className="md:w-1/2 w-full bg-gray-50">
                                <div className="h-full overflow-y-auto p-6 sm:p-8 space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">

                                    <h3 className="text-xl sm:text-2xl font-bold text-black">
                                        Personality Development Brahma Valley Institute Of Management
                                    </h3>

                                    <p>
                                        BVIM integrates personality development into its curriculum and
                                        extracurriculars through expert-led workshops, soft-skill training,
                                        active student clubs, role-based learning, and exposure via guest
                                        lectures. This holistic approach ensures students are not just
                                        academically prepared, but also mentally and emotionally equipped
                                        for leadership roles.
                                    </p>

                                    {/* Workshops */}
                                    <div>
                                        <h4 className="font-semibold text-[#2e75b5] text-lg mb-2">
                                            Structured Workshops & Guest Lectures
                                        </h4>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>
                                                One-day workshops and guest lectures on stress management,
                                                time management, and soft skills.
                                            </li>
                                            <li>
                                                Practical seminars to manage exam pressure and real-life
                                                challenges effectively.
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Soft Skills */}
                                    <div>
                                        <h4 className="font-semibold text-[#2e75b5] text-lg mb-2">
                                            Curriculum-Integrated Soft Skills
                                        </h4>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>
                                                Mock interviews, group discussions, role-plays, case studies,
                                                and spoken-English sessions.
                                            </li>
                                            <li>
                                                Certified trainers guiding communication, grooming, emotional
                                                intelligence, body language, and goal-setting.
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Clubs */}
                                    <div>
                                        <h4 className="font-semibold text-[#2e75b5] text-lg mb-2">
                                            Student-Driven Clubs & Extracurriculars
                                        </h4>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>
                                                Management simulations, meditation sessions, adventure tours,
                                                and thematic tests.
                                            </li>
                                            <li>
                                                Leadership roles during Brahmotsav and Sports Week.
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Timeline */}
                                    <div>
                                        <h4 className="font-semibold text-[#2e75b5] text-lg mb-2">
                                            Sample Timeline for a Student
                                        </h4>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>
                                                <span className="font-semibold">1st Year:</span> Basic communication and foundational workshops.
                                            </li>
                                            <li>
                                                <span className="font-semibold">2nd Year:</span> Intensive placement preparation and emotional intelligence.
                                            </li>
                                            <li>
                                                <span className="font-semibold">Ongoing:</span> Participation in clubs, cultural events, and leadership roles.
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default PersonalDevelopment;
