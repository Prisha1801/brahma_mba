import React from 'react';
import { FaBullhorn, FaUniversity, FaCode, FaUsers, FaEnvelope, FaPhone } from 'react-icons/fa';

const MarqueeSection = () => {
    const marqueeItems = [
        { icon: <FaUniversity />, label: 'Institute Code:', value: 'MB5123' },
        { icon: <FaCode />, label: 'DTE Choice Code:', value: '512310110' },
        { icon: <FaUsers />, label: 'Intake:', value: '120 Students' },
        { icon: <FaEnvelope />, label: 'Contact:', value: 'admissions@university.edu' },
        { icon: <FaPhone />, label: 'Helpline:', value: '+91-9876543210' },
    ];

    return (
        <section className="bg-bviom-dark/5 border-b border-gray-200/50 py-2.5 overflow-hidden relative">
            <div className="container mx-auto px-4 flex items-center h-8">
                {/* Label */}
                <div className="bg-gradient-green text-white px-4 py-1.5 flex items-center gap-2 font-heading font-semibold z-20 whitespace-nowrap rounded-md shadow-sm text-[12px]">
                    <FaBullhorn className="text-bviom-gold animate-pulse" />
                    <span>University Information</span>
                </div>

                {/* Marquee track */}
                <div className="flex-1 overflow-hidden relative h-full flex items-center ml-4">
                    <div className="animate-marquee-rtl flex gap-12 whitespace-nowrap">
                        {[...marqueeItems, ...marqueeItems].map((item, index) => (
                            <div key={index} className="flex items-center gap-2 text-gray-600 font-medium text-[13px]">
                                <span className="text-bviom-green">{item.icon}</span>
                                <span className="text-gray-400">{item.label}</span>
                                <span className="font-semibold text-bviom-dark">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarqueeSection;
