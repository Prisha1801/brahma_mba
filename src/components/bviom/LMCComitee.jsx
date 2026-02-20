import React from "react";
import HeroSection from '../common/components/HeroSection';
import { lmcComiteeHero } from '../common/data/heroData';
import rajaramImg from "../../assets/board-members/Mr. Rajaram D.Pangavhane.png";
import dhanishaImg from "../../assets/board-members/Dr.Dhanisha G. Pangavhane.png";
import gauravImg from "../../assets/board-members/Mr. Gaurav R. Pangavhane.png";
import ashwiniImg from "../../assets/board-members/Mrs. Ashwini A Bhosale.jpg";
import sheetalImg from "../../assets/board-members/Mrs. Sheetal Y. Mule.jpg";
import prabhavatiImg from "../../assets/board-members/Mrs.Prabhavati R. Pangavhane.jpg";
import Directormage from '../../assets/posters/director.jpg';
import person from '../../assets/person.png';

const members = [
    {
        name: "Hon. Mr. Rajaram D.Pangavhane (Patil)",
        role: "President",
        image: rajaramImg,
    },
    {
        name: "Mr. Gaurav R. Pangavhane (Patil)",
        role: "Joint Secretary",
        image: gauravImg,
    },
    {
        name: "Dr.Dhanisha G. Pangavhane (Patil)",
        role: "Vice President",
        image: dhanishaImg,
    },
    {
        name: "Mrs.Prabhavati R. Pangavhane(Patil)",
        role: "Member",
        image: prabhavatiImg,
    },
    {
        name: "Mr.Bhagwan G. Khairnar",
        role: "Member",
        image: person,
    },
    {
        name: "Mr.Madhavrao G. Chavan",
        role: "Member",
        image: person
    },
    {
        name: "Prof. Mrs.Dianasaroj.K",
        role: "Member",
        image: person,
    },
    {
        name: "Dr. Sheetal Gader",
        role: "Member",
        image: sheetalImg,
    },
    {
        name: "Mr.Sandip.H.Landge",
        role: "Member",
        image: person,
    },
    {
        name: "Dr. Zafar Khan",
        role: "Member Secretary",
        image: Directormage,
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
