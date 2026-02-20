import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import MarketingIcon from '../../assets/icons/marketing.svg';
import FinancialIcon from '../../assets/icons/finance.svg';
import OperationsIcon from '../../assets/icons/operation.svg';
import BusinessAnalyticsIcon from '../../assets/icons/ba.svg';
import HumanResourcesIcon from '../../assets/icons/hr.svg';
import { Link } from 'react-router-dom';

const Specializations = () => {
    const specializations = [
        {
            title: "Marketing Management",
            icon: MarketingIcon
        },
        {
            title: "Financial Management",
            icon: FinancialIcon
        },
        {
            title: "Human Resources Management (HRM)",
            icon: HumanResourcesIcon
        },
        {
            title: "Operations & Supply Chain Management (OSCM)",
            icon: OperationsIcon
        },
        {
            title: "Business Analytics (BA)",
            icon: BusinessAnalyticsIcon
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
                    {/* here we will use link */}
                    <Link to="/specialization">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="btn-primary text-[11px] py-2.5 px-5 rounded-lg"
                        >
                            View Details
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Specializations;
