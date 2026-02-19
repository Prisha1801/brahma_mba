import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaLongArrowAltRight } from 'react-icons/fa';

const UpcomingEvents = () => {
    const events = [
        {
            day: "28",
            month: "Jun",
            title: "Statistics are the hard facts that back up your argument. Whether you're trying to persuade, inform, or entertain, sta...",
            time: "10:00 AM to 10:00PM",
            location: "Nashik Auditorium",
            image: "https://bvim.brahmavalley.edu.in/public/uploads/carousel/1752818208_d0f1274fa6a74166fc13.jpeg"
        },
        {
            day: "31",
            month: "Jul",
            title: "Statistics are the hard facts that back up your argument. Whether you're trying to persuade, infor..",
            time: "10:00AM",
            location: "Auditorium",
            image: "https://bvim.brahmavalley.edu.in/public/uploads/carousel/1752822384_7a87eb6316ca4b013131.jpg"
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-bviom-dark relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bviom-green via-emerald-400 to-bviom-green" />

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-bviom-green font-heading font-medium text-[11px] uppercase tracking-[0.3em] block mb-3"
                    >
                        Stay Updated
                    </motion.span>
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="section-title text-white"
                    >
                        Upcoming <span className="text-gradient-green">Events</span>
                    </motion.h2>
                    <div className="section-divider" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group overflow-hidden rounded-2xl flex bg-white/5 backdrop-blur-sm border border-white/10 hover:border-bviom-green/30 transition-all duration-400"
                        >
                            {/* Image */}
                            <div className="w-[55%] relative overflow-hidden">
                                <img
                                    src={event.image}
                                    alt="Event"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bviom-dark/40" />
                            </div>

                            {/* Content */}
                            <div className="w-[45%] p-5 md:p-6 flex flex-col justify-between">
                                {/* Date Badge */}
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="bg-bviom-green/15 rounded-xl px-3 py-2 text-center min-w-[50px]">
                                        <span className="block text-2xl font-heading font-bold text-bviom-green">{event.day}</span>
                                        <span className="block text-[10px] text-bviom-green/70 font-semibold uppercase">{event.month}</span>
                                    </div>
                                    <div className="space-y-1 text-[11px] text-white/50">
                                        <div className="flex items-center gap-1.5">
                                            <FaClock className="text-bviom-green/60" />
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <FaMapMarkerAlt className="text-bviom-green/60" />
                                            <span>{event.location}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-white/60 text-[12px] md:text-[13px] leading-relaxed mb-5 flex-grow line-clamp-4">
                                    {event.title}
                                </p>

                                {/* Button */}
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="btn-primary text-[11px] py-2.5 px-5 w-fit rounded-lg"
                                >
                                    View Details
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-14">
                    <motion.a
                        href="#"
                        whileHover={{ x: 8 }}
                        className="inline-flex items-center gap-3 text-bviom-green font-heading font-semibold text-lg hover:text-bviom-green-300 transition-colors"
                    >
                        View All Events <FaLongArrowAltRight />
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
