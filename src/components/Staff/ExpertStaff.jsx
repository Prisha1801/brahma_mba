import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import staff1 from '../../assets/posters/director.jpg';
import staff2 from '../../assets/staff/sheetal.png';
import staff3 from '../../assets/staff/dimple.png';
import staff4 from '../../assets/staff/rahul.png';
import { Link } from 'react-router-dom';

const ExpertStaff = () => {
    const staff = [
        {
            name: "Dr. Zafar Khan",
            title: "Director",
            image: staff1
        },
        {
            name: "Dr. Sheetal Gader",
            title: "Assistant Professor",
            image: staff2
        },
        {
            name: "Prof. Dimple",
            title: "Assistant Professor",
            image: staff3
        },
        {
            name: "Prof. Rahul Sonawane",
            title: "Assistant Professor",
            image: staff4
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-gray-50/80">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-bviom-green font-heading font-medium text-[11px] uppercase tracking-[0.3em] block mb-3"
                    >
                        Meet Our Faculty
                    </motion.span>
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="section-title text-bviom-dark"
                    >
                        Our Expert <span className="text-gradient-green">Staff</span>
                    </motion.h2>
                    <div className="section-divider" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {staff.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-400 h-full flex flex-col">
                                <div className="relative overflow-hidden aspect-[4/5] bg-gradient-to-b from-bviom-green/5 to-gray-50">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {/* Green accent on hover */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-bviom-green to-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                </div>

                                <div className="p-5 text-center flex-grow flex flex-col justify-center">
                                    <h4 className="font-heading text-lg font-bold text-bviom-dark mb-1 leading-tight">
                                        {member.name}
                                    </h4>
                                    <p className="text-bviom-green font-medium text-[13px] uppercase tracking-wider">
                                        {member.title}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-14">
                    {/* here we will use link */}
                    <Link to="/faculty">
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

export default ExpertStaff;
