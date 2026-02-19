import React from 'react';
import HeroSection from '../common/components/HeroSection';
import { boardMembersHero } from '../common/data/heroData';

const BoardMembers = () => {
    const members = [
        {
            name: "Mr. Rajaram D.Pangavhane (Patil)",
            role: "President",
            image: "https://bvim.brahmavalley.edu.in/public/uploads/board_members/members/1752043332_90a16cc599f3d5393905.png",
        },
        {
            name: "Dr.Dhanisha G. Pangavhane (Patil)",
            role: "Vice President",
            image: "https://bvim.brahmavalley.edu.in/public/uploads/board_members/members/1752064603_5bea3f23392255e13f03.png",
        },
        {
            name: "Mrs. Ashwini A Bhosale",
            role: "Vice President",
            image: "https://bvim.brahmavalley.edu.in/public/uploads/board_members/members/1755845380_81b4a62b1a01f5eb7d00.jpg",
        },
        {
            name: "Mr. Gaurav R. Pangavhane (Patil)",
            role: "General Secretary",
            image: "https://bvim.brahmavalley.edu.in/public/uploads/board_members/members/1752043429_757f38234349b21d3378.png",
        },
        {
            name: "Mrs.Prabhavati R. Pangavhane",
            role: "Joint Secretary",
            image: "https://bvim.brahmavalley.edu.in/public/uploads/board_members/members/1755845410_108c18fb7870cd86bfbf.jpg",
        },
        {
            name: "Mrs.Rohini A Bhosle",
            role: "Member",
            image: "https://bvim.brahmavalley.edu.in/public/uploads/board_members/members/1755845423_9a0d444ca1d23e552f9e.jpg",
        },
        {
            name: "Mrs. Sheetal Y. Mule",
            role: "Member",
            image: "https://bvim.brahmavalley.edu.in/public/uploads/board_members/members/1755845434_56ba6e8dd23b0a525081.jpg",
        },
    ];

    return (
        <div>
            {/* Reusable hero section */}
            <HeroSection {...boardMembersHero} />

            <section className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <h2
                        data-aos="fade-up"
                        className="text-center text-3xl md:text-4xl font-bold text-[#0b2c4d] mb-12"
                    >
                        Our Board Members
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
        </div>
    );
};

export default BoardMembers;