import HeroSection from "../common/components/HeroSection";
import { dvvDocumentsHero } from "../common/data/heroData";


const DVVHistory = () => {
    return (
        <>
            <HeroSection {...dvvDocumentsHero} />
            <div className="max-w-5xl mx-auto my-12 px-4">

                {/* Title */}
                <h4 className="text-center text-xl font-bold text-slate-800 mb-6">
                    DVV Documents
                </h4>

                {/* Table Wrapper */}
                <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                    <table className="min-w-full border border-gray-300 text-center">

                        {/* Table Head */}
                        <thead>
                            <tr className="bg-slate-700 text-white">
                                <th className="py-3 px-4 border-r border-slate-600 font-semibold">
                                    Sr No
                                </th>
                                <th className="py-3 px-4 font-semibold">
                                    Title
                                </th>
                            </tr>
                        </thead>

                        {/* Table Body */}

                        <tbody>
                            <tr className="hover:bg-gray-50 transition">
                                <td className="px-6 py-4 border text-sm">1</td>
                                <td className="px-6 py-4 border text-sm">
                                    <a
                                        href="https://bvim.brahmavalley.edu.in/public/assets/pdf/naac/dvv/1752304527_71f6a44f0c407439b682.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 font-medium"
                                    >
                                        DVV Documents
                                    </a>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>

            </div>
        </>
    );
};

export default DVVHistory;
