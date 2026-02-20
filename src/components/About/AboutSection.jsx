import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import P4 from '../../assets/home/p4.jpg'

const AboutSection = () => {
    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-stretch gap-0 rounded-3xl overflow-hidden shadow-elevated">

                    {/* Left Image */}
                    <motion.div
                        initial={{ x: -80, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:w-1/2 relative"
                    >
                        <img
                            src={P4}
                            alt="BVIOM Campus"
                            className="w-full h-full object-cover min-h-[400px]"
                        />
                        {/* Green accent strip */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-bviom-green to-emerald-400" />
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        initial={{ x: 80, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="bg-gradient-green text-white p-10 md:p-14 h-full flex flex-col justify-center relative overflow-hidden">
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-20 -mt-20" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16" />

                            <div className="relative z-10">
                                <span className="text-white/60 font-heading font-medium text-[11px] uppercase tracking-[0.2em] mb-3 block">About Us</span>

                                <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-white mb-8 leading-tight">
                                    Welcome to Brahma Valley Institute of Management
                                </h2>

                                <div className="space-y-4 text-white/85 text-[14px] md:text-[15px] leading-relaxed font-light">
                                    <p>
                                        Your career is a journey. It can lead you anywhere in the world. It can bridge the gap between cultures.
                                        It can generate wealth and foster understanding. Success is the ultimate destination and that depends on
                                        the tools we bring with us.
                                    </p>
                                    <p>
                                        BVIOM is situated at Anjaneri in the close vicinity of Nashik City. It has a very impressive campus in a
                                        serene surrounding at the foot of Anjaneri Hills of the Sahyadri Range, encompassing a sprawling area of 35 acres.
                                    </p>
                                    <p>
                                        It is full of green, shady trees and has a comfortable sitting arrangement, which naturally
                                        creates and promotes a studious environment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
