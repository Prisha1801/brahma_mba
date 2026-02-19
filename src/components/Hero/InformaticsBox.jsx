import React from 'react';
import { motion } from 'framer-motion';

const InformaticsBox = () => {
    const infoItems = [
        {
            icon: "https://bvim.brahmavalley.edu.in/public/assets/img/education.png",
            label: "Industry-Relevant Curriculum",
            delay: 0
        },
        {
            icon: "https://bvim.brahmavalley.edu.in/public/assets/img/student.png",
            label: "Personalized Mentorship",
            delay: 0.15
        },
        {
            icon: "https://bvim.brahmavalley.edu.in/public/assets/img/alumni.png",
            label: "Robust Alumni Network",
            delay: 0.3
        },
        {
            icon: "https://bvim.brahmavalley.edu.in/public/assets/img/placemen.png",
            label: "Placement Support",
            delay: 0.45
        }
    ];

    return (
        <div className="relative -mt-12 md:-mt-16 z-40 px-4">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="bg-white rounded-2xl shadow-elevated p-6 md:p-8 border-b-[3px] border-bviom-green"
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {infoItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: item.delay, duration: 0.5 }}
                                className="flex flex-col items-center text-center group cursor-default p-4 rounded-xl hover:bg-bviom-green/5 transition-all duration-300"
                            >
                                <div className="mb-4 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl bg-bviom-green/10 group-hover:bg-bviom-green/15 transition-colors duration-300">
                                    <img
                                        src={item.icon}
                                        alt={item.label}
                                        className="w-10 h-10 md:w-12 md:h-12 object-contain transform group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <h6 className="text-bviom-dark font-heading font-semibold text-sm md:text-[15px] leading-tight group-hover:text-bviom-green transition-colors">
                                    {item.label}
                                </h6>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default InformaticsBox;
