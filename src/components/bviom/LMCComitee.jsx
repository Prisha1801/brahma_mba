import React from "react";
import HeroSection from '../common/components/HeroSection';
import { lmcComiteeHero } from '../common/data/heroData';

const members = [
    {
        name: "Hon. Mr. Rajaram D.Pangavhane (Patil)",
        role: "President",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1752043579_9475762fe0bfd25f52cf.png",
    },
    {
        name: "Mr. Gaurav R. Pangavhane (Patil)",
        role: "Joint Secretary",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1752043637_23387894f77ac89dd86d.png",
    },
    {
        name: "Dr.Dhanisha G. Pangavhane (Patil)",
        role: "Vice President",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1752064637_fd97e348629992f412db.png",
    },
    {
        name: "Mrs.Prabhavati R. Pangavhane(Patil)",
        role: "Member",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1752231855_7fd001114fcf2806da5c.png",
    },
    {
        name: "Mr.Bhagwan G. Khairnar",
        role: "Member",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1752231941_252c40c82b7ddcfdf7ab.png",
    },
    {
        name: "Mr.Madhavrao G. Chavan",
        role: "Member",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1752232001_d0d2b94f75bc4fb70fdd.png",
    },
    {
        name: "Prof. Mrs.Dianasaroj.K",
        role: "Member",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1752232039_f6c0be96ed8a3edfeda6.png",
    },
    {
        name: "Dr. Sheetal Gader",
        role: "Member",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1752233114_f31b4b74b46bb68972e7.png",
    },
    {
        name: "Mr.Sandip.H.Landge",
        role: "Member",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1752232481_60d18957869193e35a09.png",
    },
    {
        name: "Dr. Zafar Khan",
        role: "Member Secretary",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1752233127_8788c8629f01848f58bf.png",
    },
];

const LMCComitee = () => {
    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...lmcComiteeHero} />


            {/* MEMBERS SECTION */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <h2
                        data-aos="fade-up"
                        className="text-center text-3xl md:text-4xl font-bold text-[#0b2c4d] mb-12"
                    >
                        Our Local Managing Committee Members
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {members.map((member, index) => (
                            <div
                                key={index}
                                data-aos="zoom-in"
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden text-center p-6"
                            >
                                <div className="w-full h-64 overflow-hidden rounded-xl mb-6">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                                    />
                                </div>

                                <h5 className="text-lg font-semibold text-[#0b2c4d]">
                                    {member.name}
                                </h5>

                                <p className="text-gray-500 mt-2 text-sm">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default LMCComitee;
