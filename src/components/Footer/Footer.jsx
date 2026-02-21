import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaPhoneSquareAlt, FaGlobe, FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    const quickLinks = [
        { label: 'Home', link: '/' },
        { label: 'Bviom', link: '/board-members' },
        { label: 'About Us', link: '/' }
    ];

    const additionalLinks = [
        { label: 'DTE Code', link: '#' },
        { label: 'Publication', link: '#' },
        { label: 'Hostel Overview', link: '/hostel' },
        { label: 'Student Login', link: '#' },
        { label: 'Staff Login', link: '#' },
        { label: 'Terms & Condition', link: '#' }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-bviom-dark text-white relative">
            {/* Top Green Accent */}
            <div className="h-1 bg-gradient-to-r from-bviom-green via-emerald-400 to-bviom-green" />

            <div className="container mx-auto px-4 md:px-8 pt-16 pb-8">
                <div className="flex flex-col md:flex-row justify-between gap-12 mb-14">

                    {/* Quick Links */}
                    <div className="flex-1">
                        <h4 className="font-heading text-lg font-bold text-white mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-bviom-green inline-block" />
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link} className="text-white/50 hover:text-bviom-green hover:pl-2 transition-all duration-300 text-[14px] font-medium">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Additional Links */}
                    <div className="flex-1">
                        <h4 className="font-heading text-lg font-bold text-white mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-bviom-green inline-block" />
                            Additional Links
                        </h4>
                        <ul className="space-y-3">
                            {additionalLinks.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link} className="text-white/50 hover:text-bviom-green hover:pl-2 transition-all duration-300 text-[14px] font-medium">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex-1">
                        <h4 className="font-heading text-lg font-bold text-white mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-bviom-green inline-block" />
                            Contact Info
                        </h4>
                        <div className="space-y-4">
                            {[
                                { icon: FaEnvelope, text: "reply@bestinstituteeducation.com", href: "mailto:reply@bestinstituteeducation.com" },
                                { icon: FaPhoneAlt, text: "+91 9923072990" },
                                { icon: FaPhoneSquareAlt, text: "+91 9923072990" },
                                { icon: FaGlobe, text: "www.brahmavalley.com", href: "http://www.brahmavalley.com" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-white/50 hover:text-white/80 transition-colors group">
                                    <span className="w-8 h-8 rounded-lg bg-bviom-green/15 flex items-center justify-center flex-shrink-0 group-hover:bg-bviom-green/25 transition-colors">
                                        <item.icon className="text-bviom-green text-sm" />
                                    </span>
                                    {item.href ? (
                                        <a href={item.href} className="text-[13px] font-medium hover:text-bviom-green transition-colors">{item.text}</a>
                                    ) : (
                                        <span className="text-[13px] font-medium">{item.text}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>


                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 font-medium text-[13px]">
                        Copyright © 2026 Brahma Valley University. All Rights Reserved
                    </p>

                    <div className="flex gap-2">
                        {[FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                            <Link to="/contact" key={idx}>
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 1.97 }}
                                    className="btn-primary text-[11px] py-2.5 px-5 w-fit rounded-lg"
                                >
                                    <Icon size={13} />
                                </motion.button>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll to top */}
            <motion.button
                onClick={scrollToTop}
                whileHover={{ y: -3 }}
                className="fixed bottom-6 right-6 w-12 h-12 bg-bviom-green text-white rounded-xl shadow-lg shadow-bviom-green/30 flex items-center justify-center hover:shadow-bviom-green/50 transition-all z-50"
            >
                <FaArrowUp size={16} />
            </motion.button>
        </footer>
    );
};

export default Footer;