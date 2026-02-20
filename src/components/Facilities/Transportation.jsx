import React from "react";
import HeroSection from '../common/components/HeroSection';
import { transportationHero } from '../common/data/heroData';
import busImage from '../../assets/posters/bus.png';

const Transportation = () => {
    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...transportationHero} />

            {/* CONTENT SECTION */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="flex flex-col md:flex-row min-h-[320px]">

                            {/* Image Column */}
                            <div className="md:w-1/2">
                                <img
                                    src={busImage}
                                    alt="Transport Facility"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Column */}
                            <div className="md:w-1/2 flex items-center">
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-[#002347] mb-4">
                                        Transport Facilities
                                    </h3>

                                    <p className="text-gray-700 mb-4 text-justify font-semibold">
                                        Safe, Convenient & Student-Friendly Commute
                                    </p>

                                    <p className="text-gray-700 mb-6 text-justify">
                                        At Brahma Valley Institute of Pharmacy, we understand the
                                        importance of reliable and comfortable transportation for
                                        our students and staff. To ensure timely and safe travel,
                                        the institute provides a well-organized transport facility
                                        covering major areas of Nashik city and surrounding regions.
                                    </p>

                                    <div className="space-y-3 text-gray-700 text-justify">
                                        <p>
                                            <span className="font-semibold">
                                                • Well-Maintained Buses:
                                            </span>{" "}
                                            Regularly serviced for safety & comfort.
                                        </p>

                                        <p>
                                            <span className="font-semibold">
                                                • Wide Route Coverage:
                                            </span>{" "}
                                            Nashik, Trimbak Road, Panchavati & nearby villages.
                                        </p>

                                        <p>
                                            <span className="font-semibold">
                                                • Affordable Charges:
                                            </span>{" "}
                                            Pay annually or semester-wise with reasonable fees.
                                        </p>

                                        <p>
                                            <span className="font-semibold">
                                                • Experienced Drivers & Staff:
                                            </span>{" "}
                                            Ensuring punctuality & safety.
                                        </p>

                                        <p>
                                            <span className="font-semibold">
                                                • Fixed Timings & Backup Support:
                                            </span>{" "}
                                            Emergency support always available.
                                        </p>
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

export default Transportation;
