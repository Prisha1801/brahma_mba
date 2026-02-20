import React from "react";
import HeroSection from "../common/components/HeroSection";
import { sportsHero } from "../common/data/heroData";
import SportHeroImage from "../../assets/posters/sport.png";

const Sports = () => {
    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...sportsHero} />


            {/* CONTENT SECTION */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="flex flex-col md:flex-row min-h-[320px]">

                            {/* Image Column */}
                            <div className="md:w-5/12">
                                <img
                                    src={SportHeroImage}
                                    alt="Sports Facility"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Column */}
                            <div className="md:w-7/12 flex items-center">
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-4">
                                        Sports
                                    </h3>

                                    <p className="text-gray-700 mb-4 text-justify">
                                        Students are encouraged to participate in various sports
                                        events. A 400 meters running track is developed, and both
                                        indoor and outdoor sports facilities are available.
                                    </p>

                                    <p className="text-gray-700 mb-4 text-justify">
                                        Annual Sports Week is celebrated every year where students
                                        participate enthusiastically in various indoor and outdoor
                                        games.
                                    </p>

                                    <p className="text-gray-700 text-justify">
                                        Indoor games include Chess, Carom, and Badminton, while
                                        outdoor games include Cricket, Football, Kho-Kho,
                                        Volleyball, and Dodgeball. Athletic events are also
                                        organized as part of the sports competition.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Sports;
