import React from "react";
import HeroSection from "../common/components/HeroSection";
import { cafeteriaHero } from "../common/data/heroData";
import CafeteriaHeroImage from "../../assets/posters/cafeteria.png";
const Cafeteria = () => {
    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...cafeteriaHero} />

            {/* CONTENT SECTION */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="flex flex-col md:flex-row min-h-[320px]">

                            {/* Image Column */}
                            <div className="md:w-5/12">
                                <img
                                    src={CafeteriaHeroImage}
                                    alt="Cafeteria Facility"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Column */}
                            <div className="md:w-7/12 flex items-center">
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-4">
                                        Cafeteria
                                    </h3>

                                    <p className="text-gray-700 mb-4 text-justify">
                                        A professionally managed canteen ensures good quality and
                                        nutritious food for students and staff. Clean, purified
                                        drinking water is provided, and a hygienically maintained
                                        environment is ensured across the campus.
                                    </p>

                                    <p className="text-gray-700 text-justify">
                                        The canteen offers a variety of meals and snacks prepared
                                        under strict cleanliness standards. Regular quality checks
                                        and supervision are conducted to maintain food safety,
                                        promoting overall well-being and satisfaction among
                                        students.
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

export default Cafeteria;
