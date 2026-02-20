import HeroSection from "../common/components/HeroSection";
import { alumniHero } from "../common/data/heroData";
import { Link } from "react-router-dom";

const AlumniList = () => {
    const alumniData = [
        {
            id: 1,
            year: "2022-2023",
            link: "/uploads/alumni/p1.pdf",
        },
        {
            id: 2,
            year: "2023-2024",
            link: "/uploads/alumni/p2.pdf",
        },
    ];

    return (
        <>
            <HeroSection {...alumniHero} />

            <section className="py-16 bg-gray-100">
                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-3xl font-semibold text-[#0b2c4d] mb-8">
                        Alumni List
                    </h2>

                    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                        <table className="min-w-full border border-gray-200">

                            {/* Table Head */}
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">
                                        Sr.No
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">
                                        Alumni
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">
                                        PDF
                                    </th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody>
                                {alumniData.map((item) => (
                                    <tr
                                        key={item.id}
                                        className="border-t border-gray-200 hover:bg-gray-50 transition"
                                    >
                                        <td className="px-6 py-4 font-medium text-gray-800">
                                            {item.id}
                                        </td>
                                        <td className="px-6 py-4 text-gray-700">
                                            {item.year}
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link to={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                                                Click Here
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>

                </div>
            </section>
        </>
    );
};

export default AlumniList;
