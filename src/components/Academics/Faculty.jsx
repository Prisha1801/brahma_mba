import React from "react";
import HeroSection from "../common/components/HeroSection";
import { facilitiesHero } from "../common/data/heroData";

const facultyMembers = [
    {
        name: "Dr. Zafar Khan",
        role: "Director",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1771329963_ed2fca19dd9f2ba44ed0.png",
    },
    {
        name: "Dr. Sheetal Gade",
        role: "Asst. Professor",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1752234121_b9c3bda318b88af2a41b.png",
    },
    {
        name: "Prof. Dianasaroj K.",
        role: "Asst. Professor",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1752045578_37d7153bd1d51d8a9181.jpg",
    },
    {
        name: "Prof. Sonal Patange",
        role: "Asst. Professor, Exam Coordinator",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1752045960_b4697d441971c3fff3c7.jpg",
    },
    {
        name: "Prof. Dimpal Zambare",
        role: "Asst. Professor",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1771330133_40d1583128f1aabc1ed8.png",
    },
    {
        name: "Prof. Rahul Sonawane",
        role: "Asst. Professor",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1771330220_daddce426cf8cc7feaed.png",
    },
    {
        name: "Prof. Radhika Torawne",
        role: "Asst. Professor",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1752046060_5090dd7f9823f12cbb05.jpg",
    },
    {
        name: "Prof. Radhika Deshmukh",
        role: "Asst. Professor",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1752046084_204a539890d20a76f1ef.jpg",
    },
    {
        name: "Prof. Prashansa Khaire",
        role: "Asst. Professor",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1752046107_8b03f7300bb3242a4716.jpg",
    },
    {
        name: "Prof. Rahul Thorat",
        role: "Asst. Professor",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1752046131_0e4b9a9ec27faaa10b2e.jpg",
    },
    {
        name: "Prof. Apoorva Pakdhane",
        role: "Asst. Professor",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1752046154_0ddbd3da6761801502b3.jpg",
    },
    {
        name: "Prof. Nikita Kekan",
        role: "Asst. Professor",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1771330156_bb91ab3b80b1836f735d.png",
    },
    {
        name: "Krishna Ramayane",
        role: "Asst. Professor",
        image:
            "https://bvim.brahmavalley.edu.in/public/uploads/1771330049_492afa5a697cd74d73bb.png",
    },
];

const Faculty = () => {
    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...facilitiesHero} />


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
                                        className="w-full h-full object-cover"
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
