import React from "react";
import HeroSection from "../common/components/HeroSection";
import { facultiesHero } from "../common/data/heroData";
import sheetalImg from "../../assets/staff/sheetal.png";
import Directormage from '../../assets/posters/director.jpg';
import staff3 from '../../assets/staff/dimple.png';
import staff4 from '../../assets/staff/rahul.png';
import krishna from '../../assets/staff/krishna.png';
import nikita from '../../assets/staff/nikita.png';
import person from '../../assets/person.png';

const facultyMembers = [
    {
        name: "Dr. Zafar Khan",
        role: "Director",
        image: Directormage
    },
    {
        name: "Dr. Sheetal Gade",
        role: "Asst. Professor",
        image: sheetalImg,
    },
    {
        name: "Prof. Dianasaroj K.",
        role: "Asst. Professor",
        image: person,
    },
    {
        name: "Prof. Sonal Patange",
        role: "Asst. Professor, Exam Coordinator",
        image: person,
    },
    {
        name: "Prof. Dimpal Zambare",
        role: "Asst. Professor",
        image: staff3,
    },
    {
        name: "Prof. Rahul Sonawane",
        role: "Asst. Professor",
        image: staff4,
    },
    {
        name: "Prof. Radhika Torawne",
        role: "Asst. Professor",
        image: person,
    },
    {
        name: "Prof. Radhika Deshmukh",
        role: "Asst. Professor",
        image: person,
    },
    {
        name: "Prof. Prashansa Khaire",
        role: "Asst. Professor",
        image: person,
    },
    {
        name: "Prof. Rahul Thorat",
        role: "Asst. Professor",
        image: person,
    },
    {
        name: "Prof. Apoorva Pakdhane",
        role: "Asst. Professor",
        image: person,
    },
    {
        name: "Prof. Nikita Kekan",
        role: "Asst. Professor",
        image: nikita,
    },
    {
        name: "Krishna Ramayane",
        role: "Asst. Professor",
        image: krishna,
    },
];

const Faculty = () => {
    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...facultiesHero} />


            {/* FACULTY GRID */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Our Board Members
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {facultyMembers.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition duration-300"
                            >
                                <div className="h-64 w-full overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>

                                <div className="p-4 text-center">
                                    <h5 className="text-lg font-semibold">
                                        {member.name}
                                    </h5>
                                    <p className="text-sm text-gray-600 mt-1">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Faculty;
