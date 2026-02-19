import React from 'react';
import { motion } from 'framer-motion';

import logo1 from '../../assets/place-part/bajaj.png';
import logo2 from '../../assets/place-part/byjus.png';
import logo3 from '../../assets/place-part/icici.png';
import logo4 from '../../assets/place-part/jaro.png';
import logo5 from '../../assets/place-part/kotak.png';
import logo6 from '../../assets/place-part/reliance.png';
import logo7 from '../../assets/place-part/tcs.png';
import logo8 from '../../assets/place-part/yes-bank.png';

const PlacementPartners = () => {
    const partners = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-bviom-green font-heading font-medium text-[11px] uppercase tracking-[0.3em] block mb-3"
                    >
                        Career Opportunities
                    </motion.span>
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="section-title text-bviom-dark"
                    >
                        Our Placement <span className="text-gradient-green">Partners</span>
                    </motion.h2>
                    <div className="section-divider" />
                </div>

                {/* Marquee Slider */}
                <div className="relative overflow-hidden py-4">
                    {/* Fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

                    <motion.div
                        className="flex gap-10 items-center whitespace-nowrap"
                        animate={{ x: [0, -1200] }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {[...partners, ...partners, ...partners].map((logo, index) => (
                            <div
                                key={index}
                                className="w-44 h-20 flex-shrink-0 flex items-center justify-center bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-bviom-green/30 hover:shadow-card transition-all duration-300 group"
                            >
                                <img
                                    src={logo}
                                    alt={`Partner ${(index % partners.length) + 1}`}
                                    className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PlacementPartners;
