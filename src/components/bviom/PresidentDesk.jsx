import React from "react";
import HeroSection from '../common/components/HeroSection';
import { presidentDeskHero } from '../common/data/heroData';
import PresidentImage from '../../assets/posters/president.png';

const PresidentDesk = () => {
    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...presidentDeskHero} />

            {/* PRESIDENT SECTION */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div
                        data-aos="fade-up"
                        className="bg-white rounded-2xl shadow-md p-8 lg:p-12"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                            {/* LEFT SIDE - IMAGE */}
                            <div className="text-center">
                                <img
                                    src={PresidentImage}
                                    alt="President"
                                    className="w-full max-h-[450px] object-cover rounded-xl shadow-md"
                                />

                                <div className="mt-6">
                                    <h4 className="text-xl font-semibold text-[#0b2c4d]">
                                        Mr. Rajaram D. Pangavhane (Patil)
                                    </h4>
                                    <p className="text-gray-600 mt-2">Founder President</p>
                                    <p className="text-gray-500 text-sm mt-1">
                                        Nashik Gramin Shikshan Prasarak Mandal
                                    </p>
                                </div>
                            </div>

                            {/* RIGHT SIDE - MESSAGE */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-[#0b2c4d] mb-6">
                                    From The President's Desk
                                </h2>

                                <p className="text-gray-600 leading-8 text-justify mb-4">
                                    Welcome to <strong>Brahma Valley Educational Campus</strong>,
                                    where education meets values and dreams take flight.
                                </p>

                                <p className="text-gray-600 leading-8 text-justify mb-4">
                                    For over 19 years, we have been dedicated to bringing quality
                                    technical and professional education to rural communities.
                                    Located on a scenic 35-acre campus near the sacred
                                    Trimbakeshwar Temple in Nashik, our serene environment inspires
                                    both academic and personal growth.
                                </p>

                                <p className="text-gray-600 leading-8 text-justify mb-4">
                                    Our mission is to empower underprivileged youth by offering
                                    diverse programs in Engineering, Polytechnic, Pharmacy,
                                    Education, Management, ITI, Schooling, Traditional Arts,
                                    Science, and Commerce. We provide modern classrooms, advanced
                                    labs, a rich library, and collaborative spaces to support
                                    holistic development.
                                </p>

                                <p className="text-gray-600 leading-8 text-justify">
                                    At Brahma Valley, we blend innovative teaching with core values
                                    like compassion, courage, integrity, and trust. I encourage you
                                    to make the most of your time here and strive for excellence in
                                    all you do.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PresidentDesk;
