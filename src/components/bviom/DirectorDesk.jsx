import React from "react";
import HeroSection from '../common/components/HeroSection';
import { directorDeskHero } from '../common/data/heroData';
import Directormage from '../../assets/posters/director.jpg';

const DirectorDesk = () => {
    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...directorDeskHero} />

            {/* DIRECTOR MESSAGE SECTION */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">

                    <h3
                        data-aos="fade-up"
                        className="text-center text-3xl md:text-4xl font-bold text-[#0b2c4d] mb-12"
                    >
                        Director Message
                    </h3>

                    <div
                        data-aos="fade-up"
                        className="bg-white rounded-2xl shadow-md p-8 lg:p-12"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                            {/* LEFT SIDE - IMAGE */}
                            <div className="text-center">
                                <img
                                    src={Directormage}
                                    alt="Director"
                                    className="w-full max-h-[450px] object-contain rounded-xl shadow-md"
                                />

                                <div className="mt-6">
                                    <h4 className="text-xl font-semibold text-[#0b2c4d]">
                                        Dr. Zafar Khan
                                    </h4>
                                    <p className="text-gray-600 mt-2">Director</p>
                                    <p className="text-gray-500 text-sm mt-1">
                                        Brahma Valley Institute Of Management
                                    </p>
                                </div>
                            </div>

                            {/* RIGHT SIDE - MESSAGE */}
                            <div>
                                <p className="font-semibold text-lg mb-4 text-gray-700">
                                    Welcome to the Director Desk,
                                </p>

                                <p className="text-gray-600 leading-8 text-justify mb-4">
                                    The Nashik Gramin Shikshan Prasarak Mandal’s Brahma Valley
                                    Institute Of Management at Anjaneri Nashik is affiliated to
                                    SPPU with 120 student intake. It sees excellence in
                                    contemporary management education as its first priority.
                                </p>

                                <p className="text-gray-600 leading-8 text-justify mb-4">
                                    We achieve this by equipping our graduates with relevant
                                    knowledge, managerial, analytical, interpersonal and
                                    communication skills, and the right attitudes, with a strong
                                    emphasis on personal values.
                                </p>

                                <p className="text-gray-600 leading-8 text-justify">
                                    Consistent change in today’s business environment is complex
                                    and unpredictable. To overcome increasingly multifaceted
                                    challenges, business leaders must think creatively and react
                                    strategically to gain and sustain competitive advantages.
                                    Therefore, we strive to develop competent managerial human
                                    resources who are ready to take on the challenges of the
                                    ever-changing corporate world.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default DirectorDesk;
