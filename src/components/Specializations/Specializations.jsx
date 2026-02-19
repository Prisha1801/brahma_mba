import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Specializations = () => {
    const specializations = [
        {
            title: "Marketing Management",
            icon: "https://bvim.brahmavalley.edu.in/public/uploads/1752142620_603d0a27d7024b0f566a.svg"
        },
        {
            title: "Financial Management",
            icon: "https://bvim.brahmavalley.edu.in/public/uploads/1752142628_112a191dc7cd8c6d7a6b.svg"
        },
        {
            title: "Human Resources Management (HRM)",
            icon: "https://bvim.brahmavalley.edu.in/public/uploads/1752142635_aa3465ff30563e49738b.svg"
        },
        {
            title: "Operations & Supply Chain Management (OSCM)",
            icon: "https://bvim.brahmavalley.edu.in/public/uploads/1752142609_aaf74d2dc5467d302a1c.svg"
        },
        {
            title: "Business Analytics (BA)",
            icon: "https://bvim.brahmavalley.edu.in/public/uploads/1752142643_4246d2556922d4cea894.svg"
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-bviom-dark relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-10 w-72 h-72 bg-bviom-green/8 rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-10 w-56 h-56 bg-bviom-green/6 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bviom-green/3 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-bviom-green font-heading font-medium text-[11px] uppercase tracking-[0.3em] block mb-3"
                    >
                        Programs We Offer
                    </motion.span>
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="section-title text-white"
                    >
                        M.B.A <span className="text-gradient-green">Specializations</span>
                    </motion.h2>
                    <div className="section-divider" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    {specializations.map((spec, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-white/10 hover:border-bviom-green/40 hover:bg-white/15 transition-all duration-400 group"
                        >
                            <div className="mb-5 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-white/10 group-hover:bg-bviom-green/20 transition-all duration-300">
                                <img
                                    src={spec.icon}
                                    alt={spec.title}
                                    className="w-10 h-10 md:w-12 md:h-12 object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <h6 className="text-[13px] md:text-[14px] font-heading font-semibold text-white/80 group-hover:text-white leading-tight transition-colors">
                                {spec.title}
                            </h6>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-14">
                    <motion.a
                        href="#"
                        whileHover={{ x: 8 }}
                        className="inline-flex items-center gap-3 text-bviom-green font-heading font-semibold text-lg hover:text-bviom-green-300 transition-colors"
                    >
                        View All Specializations <FaArrowRight className="text-sm" />
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Specializations;
