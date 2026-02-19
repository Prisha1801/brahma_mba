import HeroSection from "../common/components/HeroSection";
import { trainingPlacementHero } from "../common/data/heroData";

const TPO = () => {
    return (
        <>
            <HeroSection {...trainingPlacementHero} />

            <section className="py-16 bg-gray-100">
                <div className="max-w-5xl mx-auto px-6">

                    <h2 className="text-3xl font-semibold text-center text-[#0b2c4d] mb-12">
                        TPO Desk
                    </h2>

                    <div className="bg-white shadow-md rounded-xl p-8">

                        {/* Name Section */}
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-semibold text-gray-800">
                                Dr. Sheetal Gade
                            </h3>
                            <p className="text-lg font-medium text-gray-700">
                                M Com, MPM, PhD
                            </p>
                        </div>

                        {/* Message Section */}
                        <div className="space-y-6 text-gray-800 leading-7">

                            <h4 className="text-xl font-semibold text-[#0b2c4d]">
                                What Our TPO Recommends
                            </h4>

                            <ul className="list-disc pl-6 space-y-3 text-justify">
                                <li>
                                    On-Campus Recruitment Drives: Facilitating placements with reputed organizations
                                </li>

                                <li>
                                    across sectors like Banking, Finance, FMCG, IT, Consulting, and Manufacturing.
                                </li>

                                <li>
                                    Internship &amp; Summer Training: Strong focus on industry internships that enhance
                                </li>

                                <li>
                                    practical exposure and domain-specific learning.
                                </li>
                                <li>
                                    Career Skill Development Programs: Including aptitude training, soft skills, interview
                                </li>

                                <li>
                                    techniques, resume writing, and GD-PI practice.
                                </li>

                                <li>
                                    Industry Interface: Regular guest lectures, alumni
                                    interactions, HR conclaves, and
                                </li>

                                <li>
                                    corporate seminars to ensure students are in sync with current industry practices.
                                </li>
                                <li>
                                    Career Counseling &amp; Mentorship: Personalized support to students for career planning,
                                </li>
                                <li>
                                    company research, and interview preparation
                                </li>
                            </ul>

                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default TPO;
