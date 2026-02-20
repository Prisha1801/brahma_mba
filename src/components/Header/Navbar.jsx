import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo1 from '../../assets/posters/left-logo.png';
import logo2 from '../../assets/posters/right-logo.png';

const Dropdown = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li
            className="relative group lg:py-4"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className="flex items-center gap-1.5 font-heading font-semibold text-bviom-dark hover:text-bviom-green transition-colors py-2 lg:py-0 w-full lg:w-auto text-[13px] uppercase tracking-wide">
                {title} <FaChevronDown className={`text-[8px] opacity-50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="lg:absolute left-0 mt-0 w-60 bg-white border border-gray-100 shadow-elevated rounded-xl overflow-hidden z-[100] list-none p-2"
                    >
                        {items.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.link}
                                    className="block px-4 py-2.5 text-[13px] text-gray-600 hover:bg-bviom-green/10 hover:text-bviom-green rounded-lg transition-all font-medium"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </li>
    );
};

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navData = [
        {
            title: 'BVIOM',
            items: [
                { label: 'Board Members', link: '/board-members' },
                { label: 'LMC Committee', link: '/lmc-committee' },
                { label: 'President Desk', link: '/president-desk' },
                { label: 'Director Desk', link: '/director-desk' },
                { label: 'Mission & Vision', link: '/mission-vision' },
                { label: 'Committees', link: '/committees' },
            ]
        },
        {
            title: 'Facilities',
            items: [
                { label: 'Library', link: '/library' },
                { label: 'Hostel', link: '/hostel' },
                { label: 'Cafeteria', link: '/cafeteria' },
                { label: 'Sports', link: '/sports' },
                { label: 'Scholarship', link: '/scholarship' },
                { label: 'Transportation', link: '/transportation' },
                { label: 'Personal Development', link: '/personal-development' },
            ]
        },
        {
            title: 'Academics',
            items: [
                { label: 'Faculty', link: '/faculty' },
                { label: 'Students Corner', link: '/student-corner' },
                { label: 'Admission Criteria', link: '/admission-criteria' },
                { label: 'Fee Structure', link: '/fee-structure' },
                { label: 'Eligibility', link: '/eligibility' },
                { label: 'Specialization', link: '/specialization' },
            ]
        },
        {
            title: 'Alumni',
            items: [
                { label: 'Alumni List', link: '/alumni-list' },
                {
                    label: 'Distinguished Alumni', link: "#",
                    items: [
                        { label: 'Entrepreneur List', link: '#' },
                        { label: 'Corporate Leader', link: '#' },
                    ]
                },
            ]
        },
        {
            title: 'Training & Placement',
            items: [
                { label: 'TPO Desk', link: '/tpo-desk' },
                { label: 'Industrial Visit', link: '/industrial-visit' },
                { label: 'Student Placement', link: '/student-placement' },
            ]
        },
        {
            title: 'Management Events',
            items: [
                { label: 'Events', link: '/events' },
                { label: 'Cultural Program', link: '/cultural-program' },
                { label: 'Upcoming Events', link: '/upcoming-event' },
            ]
        },
        {
            title: 'Social Activity',
            items: [
                { label: 'Social Welfare Activity', link: '/social-welfare-activity' },
                { label: 'Anti-Ragging', link: '/anti-ragging' },
                { label: 'Grievance', link: '/grievance' },
            ]
        },
        {
            title: 'NAAC',
            items: [
                { label: 'IIQA', link: '/iiqa' },
                { label: 'IQAC', link: '/iqac' },
                { label: 'Best Practices', link: '/best-practices' },
                { label: 'Feedback', link: '/feedback' },
                { label: 'NAAC SSR', link: '/ssr' },
                { label: 'NAAC Documents', link: '/naac-documents' },
                { label: 'RTI', link: '/rti' },
                { label: 'DVV History', link: '/dvv-history' }
            ]
        }
    ];

    return (
        <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
            <nav className="container mx-auto px-4 lg:px-8 py-2 flex items-center justify-between">
                {/* Left Logo */}
                <Link to="/">
                    <img
                        src={logo1}
                        alt="BVIOM Logo"
                        className="h-12 lg:h-14"
                    />
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-bviom-dark focus:outline-none p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Navigation Links */}
                <div className={`
                    fixed lg:static top-[70px] left-0 w-full lg:w-auto bg-white lg:bg-transparent
                    shadow-elevated lg:shadow-none p-6 lg:p-0 transition-all duration-300 transform lg:translate-y-0
                    ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto'}
                    flex flex-col lg:flex-row items-center lg:gap-2 z-50
                `}>
                    <ul className="flex flex-col lg:flex-row items-center gap-2 lg:gap-1 list-none m-0 p-0">
                        <li>
                            <Link to="/" className="font-heading font-semibold text-bviom-dark hover:text-bviom-green py-2 px-4 block text-[13px] uppercase tracking-wide transition-colors relative group">
                                Home
                                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-bviom-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            </Link>
                        </li>

                        {navData.slice(0, 3).map((group, idx) => (
                            <Dropdown key={idx} title={group.title} items={group.items} />
                        ))}

                        <li>
                            <Link to="/course-structure" className="font-heading font-semibold text-bviom-dark hover:text-bviom-green py-2 px-4 block text-[13px] uppercase tracking-wide transition-colors relative group">
                                Course Structure
                                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-bviom-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            </Link>
                        </li>

                        {navData.slice(3).map((group, idx) => (
                            <Dropdown key={idx + 3} title={group.title} items={group.items} />
                        ))}

                        <li>
                            <Link to="/gallery" className="font-heading font-semibold text-bviom-dark hover:text-bviom-green py-2 px-3 block text-[13px] uppercase tracking-wide transition-colors relative group">
                                Gallery
                                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-bviom-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="font-heading font-semibold text-bviom-dark hover:text-bviom-green py-2 px-3 block text-[13px] uppercase tracking-wide transition-colors relative group">
                                Contact
                                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-bviom-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Right Logo */}
                <Link to="/">
                    <img
                        src={logo2}
                        alt="MBA Logo"
                        className="h-14"
                    />
                </Link>
            </nav>
        </header>
    );
};

export default Navbar;
