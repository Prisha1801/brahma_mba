import React from "react";
import HeroSection from '../common/components/HeroSection';
import { missionHero } from '../common/data/heroData';

const MissionVision = () => {
    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...missionHero} />

            {/* VISION & MISSION SECTION */}
            <section id="vision-mission" className="bg-gray-100 py-16">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Intro Text */}
                    <div className="text-center mb-12" data-aos="fade-up">
                        <p className="text-gray-600 leading-8 max-w-4xl mx-auto">
                            Brahma Valley MBA College is a premier institute dedicated to
                            nurturing future business leaders through industry-oriented
                            education, innovative learning, and holistic development.
                            Located in the serene surroundings of Nashik, we empower students
                            with strong academic foundations and real-world skills.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                        {/* Vision Card */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="rounded-3xl text-white p-8 shadow-lg hover:scale-105 transition duration-300"
                            style={{
                                background:
                                    "linear-gradient(135deg, #008080, #006666)",
                            }}
                        >
                            <h4 className="text-2xl font-semibold mb-4">
                                Our Vision
                            </h4>

                            <p className="leading-8 text-justify">
                                To emerge as one of the aspiring business schools and provide
                                quality management education along with a strong foundation
                                for life skills.
                            </p>
                        </div>

                        {/* Mission Card */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="rounded-3xl text-white p-8 shadow-lg hover:scale-105 transition duration-300"
                            style={{
                                background:
                                    "linear-gradient(135deg, #005f73, #0a9396)",
                            }}
                        >
                            <h4 className="text-2xl font-semibold mb-4">
                                Our Mission
                            </h4>

                            <p className="leading-8 text-justify">
                                To develop necessary competencies in students by providing
                                exposure to various areas of knowledge, enhancing employability
                                for gainful employment, promoting entrepreneurship, and
                                encouraging ethical and value-based learning.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default MissionVision;
