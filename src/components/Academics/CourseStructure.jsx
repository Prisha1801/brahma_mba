import HeroSection from "../common/components/HeroSection";
import { courseStructureHero } from "../common/data/heroData";

const CourseStructure = () => {
    const syllabusData = [
        {
            id: 1,
            title: "MBA 2019 Pattern Syllabus",
            link: "https://bvim.brahmavalley.edu.in/public/uploads/1752049143_1ed6165a332d8743c1f4.pdf",
        },
        {
            id: 2,
            title: "MBA 2019 Pattern Syllabus Revised",
            link: "https://bvim.brahmavalley.edu.in/public/uploads/1752049160_8f9579af27b7c6f2d0a9.pdf",
        },
        {
            id: 3,
            title: "MBA 2024 Pattern Syllabus",
            link: "https://bvim.brahmavalley.edu.in/public/uploads/1752824078_35f6e553fe1940ec6dc1.pdf",
        },
    ];

    return (
        <>
            <HeroSection {...courseStructureHero} />

            <section className="py-16 bg-gray-100">
                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-3xl font-semibold text-[#0b2c4d] mb-8">
                        Course Structure
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
                                        Syllabus
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">
                                        PDF
                                    </th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody>
                                {syllabusData.map((item, index) => (
                                    <tr
                                        key={item.id}
                                        className="border-t border-gray-200 hover:bg-gray-50 transition"
                                    >
                                        <td className="px-6 py-4 font-medium text-gray-800">
                                            {item.id}
                                        </td>
                                        <td className="px-6 py-4 text-gray-700">
                                            {item.title}
                                        </td>
                                        <td className="px-6 py-4">
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline font-medium"
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
            </section>
        </>
    );
};

export default CourseStructure;
