import React from "react";

const MissionVision = () => {
    return (
        <>
            {/* HERO SECTION */}
            <section
                className="w-full h-[60vh] bg-center bg-cover bg-no-repeat flex items-center justify-center relative text-center"
                style={{
                    backgroundImage:
                        "url('https://bvim.brahmavalley.edu.in/public/uploads/banner_1752044130.png')",
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative px-6">
                    <h1
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        className="text-white text-4xl md:text-5xl font-bold font-heading"
                    >
                        Vision Mission
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1200"
                        className="text-white mt-4 text-lg"
                    >
                        Brahma Valley MBA College
                    </p>
                </div>
            </section>

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
