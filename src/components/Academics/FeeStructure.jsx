import React from "react";

const FeeStructure = () => {
    const feeData = [
        {
            id: 1,
            title: "BBA STRUCTURE",
            link: "https://bvim.brahmavalley.edu.in/public/uploads/pdfs/1752309506_3c4ce9578209b0b543d7.pdf",
        },
        {
            id: 2,
            title: "MBA",
            link: "https://bvim.brahmavalley.edu.in/public/uploads/pdfs/1752312276_5e629388fb83f72372eb.pdf",
        },
    ];

    return (
        <div>
            {/* HERO SECTION */}
            <section className="bg-gradient-to-r from-[#0f5c74] to-[#3ec6c1] py-24 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Fee Structure
                </h1>
                <p className="text-lg opacity-90">
                    Discover excellence in education and innovation.
                </p>
            </section>

            {/* TABLE SECTION */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-[#0c2d48] mb-8">
                    Fee Structure List
                </h2>

                <div className="overflow-x-auto shadow-lg rounded-xl">
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr className="bg-gray-800 text-white text-left">
                                <th className="px-6 py-4">Sr.No</th>
                                <th className="px-6 py-4">Title</th>
                                <th className="px-6 py-4">PDF</th>
                            </tr>
                        </thead>

                        <tbody>
                            {feeData.map((item) => (
                                <tr
                                    key={item.id}
                                    className="border-t hover:bg-gray-50 transition"
                                >
                                    <td className="px-6 py-4">{item.id}</td>
                                    <td className="px-6 py-4 font-medium text-gray-800">
                                        {item.title}
                                    </td>
                                    <td className="px-6 py-4">
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
                                        >
                                            Click Here
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default FeeStructure;
