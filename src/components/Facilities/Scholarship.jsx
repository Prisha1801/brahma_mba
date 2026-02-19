import React from "react";
import HeroSection from '../common/components/HeroSection';
import { scholarshipHero } from '../common/data/heroData';
const Scholarship = () => {
    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...scholarshipHero} />

            {/* CONTENT SECTION */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="flex flex-col md:flex-row min-h-[320px]">

                            {/* Image Column */}
                            <div className="md:w-5/12">
                                <img
                                    src="https://bvim.brahmavalley.edu.in/public/uploads/1752128018_3846cc4682753f827d83.png"
                                    alt="Scholarship Facility"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Column */}
                            <div className="md:w-7/12 flex items-center">
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-blue-700 underline mb-6">
                                        Scholarship Details
                                    </h3>

                                    <div className="space-y-5 text-gray-700 text-justify">

                                        <div>
                                            <h4 className="font-semibold text-lg">
                                                • Merit-Based Scholarships
                                            </h4>
                                            <p>
                                                BVIM provides scholarships to meritorious students
                                                based on their academic performance.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-lg">
                                                • Need-Based Scholarships
                                            </h4>
                                            <p>
                                                The institute also offers financial aid to students
                                                from economically weaker sections.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-lg">
                                                • Government Schemes
                                            </h4>
                                            <p>
                                                Students can benefit from scholarships offered by the
                                                Government of India and the Government of Maharashtra.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-lg">
                                                • Eligibility
                                            </h4>
                                            <p>
                                                Students belonging to SC/ST/NT/SBC/OBC, minority, and
                                                economically backward classes are eligible for
                                                scholarships as per government rules.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-lg">
                                                • Education Loans
                                            </h4>
                                            <p>
                                                BVIM has tie-ups with banks to help students secure
                                                education loans.
                                            </p>
                                        </div>

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

export default Scholarship;
