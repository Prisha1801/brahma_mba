import React from "react";
import HeroSection from "../common/components/HeroSection";
import { antiRaggingHero } from "../common/data/heroData";

const members = [
    { id: 1, name: "Dr. Zafar Khan", designation: "Director", cell: "BVIOM" },
    { id: 2, name: "Mr. Vinayak Nikhade", designation: "Principal", cell: "BVIOP" },
    { id: 3, name: "Dr. Sheetal Gade", designation: "Asso. Professor", cell: "BVIOM" },
    { id: 4, name: "Mr. Dimpal Zambre", designation: "Assis. Professor", cell: "BVIOM" },
    { id: 5, name: "Sarika S. Malode", designation: "Assis. Professor", cell: "BVPC" },
    { id: 6, name: "Mr. Shivaji Jagtap", designation: "Non-Teaching Representative", cell: "BVIOM" },
    { id: 7, name: "Dr. Vilas Deshpande", designation: "NGO", cell: "MSW College" },
    { id: 8, name: "Mr. Ganesh Jagdale", designation: "Journalists", cell: "Local Media" },
    { id: 9, name: "Mr. Yogesh Warungase", designation: "Hotel Rector", cell: "BV" },
    { id: 10, name: "Mrs. Leena Warungase", designation: "Hostel Rector", cell: "BV" },
];

const AntiRagging = () => {
    return (
        <>
            <HeroSection {...antiRaggingHero} />

            <section className="py-16 bg-gray-100">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="bg-white shadow-md rounded-xl overflow-hidden">

                        <div className="overflow-x-auto">
                            <table className="min-w-full text-left border border-gray-200">

                                {/* Table Head */}
                                <thead className="bg-gray-900 text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-sm font-semibold border">
                                            Sr.No
                                        </th>
                                        <th className="px-6 py-4 text-sm font-semibold border">
                                            Name
                                        </th>
                                        <th className="px-6 py-4 text-sm font-semibold border">
                                            Designation
                                        </th>
                                        <th className="px-6 py-4 text-sm font-semibold border">
                                            Structure Cell
                                        </th>
                                    </tr>
                                </thead>

                                {/* Table Body */}
                                <tbody>
                                    {members.map((member) => (
                                        <tr
                                            key={member.id}
                                            className="hover:bg-gray-50 transition"
                                        >
                                            <td className="px-6 py-4 border text-sm">
                                                {member.id}
                                            </td>
                                            <td className="px-6 py-4 border text-sm font-medium">
                                                {member.name}
                                            </td>
                                            <td className="px-6 py-4 border text-sm">
                                                {member.designation}
                                            </td>
                                            <td className="px-6 py-4 border text-sm">
                                                {member.cell}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default AntiRagging;
