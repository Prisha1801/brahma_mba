import React from "react";
import HeroSection from "../common/components/HeroSection";
import { culturalProgramHero } from "../common/data/heroData";
import Person from "../../assets/person.png"

const CulturalProgram = () => {
    return (
        <>
            <HeroSection {...culturalProgramHero} />

            <section className="py-16 bg-gray-100">
                <div className="max-w-5xl mx-auto px-6">

                    <div className="bg-white shadow-md rounded-xl p-8">

                        {/* Top Section */}
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                            <img
                                src={Person}
                                alt="Cultural Program"
                                className="w-32 h-32 rounded-full object-cover"
                            />

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    Cultural Program
                                </h2>
                                <p className="text-gray-500 italic mb-4">
                                    BVIM Cultural Fest – BRAHMOTSAV 2025–26
                                </p>

                                <p className="text-gray-700 leading-relaxed text-justify">
                                    BVIM celebrated its annual Cultural Fest{" "}
                                    <span className="font-semibold">
                                        “BRAHMOTSAV 2025–26”
                                    </span>{" "}
                                    with great enthusiasm from{" "}
                                    <span className="font-semibold">
                                        6 February 2026 to 8 February 2026
                                    </span>
                                    . The festival marked a vibrant beginning to a series of
                                    cultural, sports, and management events, showcasing the
                                    talent, teamwork, and sportsmanship of students.
                                </p>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="space-y-6 text-gray-800 leading-relaxed">

                            {/* Sports Events */}
                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    Sports Events
                                </h3>

                                <p className="mb-3 text-justify">
                                    As part of <span className="font-semibold">BRAHMOTSAV 2025–26</span>,
                                    various indoor and outdoor sports events were successfully organized:
                                </p>

                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Chess Matches were conducted with enthusiastic participation.</li>

                                    <li>
                                        Cricket League and Practice Matches were organized with 8 overs per side.
                                        <ul className="list-[circle] pl-6 mt-2 space-y-1">
                                            <li>Participants were students from MBA I and MBA II.</li>
                                            <li>Each team consisted of 9 boys and 2 girls, promoting inclusivity and team spirit.</li>
                                        </ul>
                                    </li>

                                    <li>
                                        Badminton and Carrom Matches were held on the same day.
                                        <ul className="list-[circle] pl-6 mt-2 space-y-1">
                                            <li>Badminton matches were organized exclusively for girls of MBA I and MBA II.</li>
                                            <li>A total of 3 badminton matches and 3 carrom matches were played.</li>
                                            <li>Results for these matches were declared on the same day.</li>
                                        </ul>
                                    </li>
                                </ul>

                                <p className="mt-4 text-justify">
                                    The final cricket match was conducted during the fest, and the MBA team emerged as the winner.
                                </p>
                            </div>

                            {/* Cultural & Management Events */}
                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    Cultural and Management Events
                                </h3>

                                <p className="mb-3 text-justify">
                                    In addition to sports activities, BVIM also organized various
                                    cultural and management events during the academic year:
                                </p>

                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Ganesh Festival – 07 September 2026</li>
                                    <li>Dindi Sahar – June 2026</li>
                                </ul>

                                <p className="mt-4 text-justify">
                                    These events encouraged student participation, cultural awareness,
                                    leadership skills, and community bonding.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default CulturalProgram;
