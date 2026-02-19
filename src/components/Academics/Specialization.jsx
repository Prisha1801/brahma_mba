import HeroSection from "../common/components/HeroSection";
import { specializationHero } from "../common/data/heroData";
import { useState } from "react";

const Specialization = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const mbaSpecializations = [
        {
            title: "Marketing Management",
            content:
                "This specialization focuses on market research, consumer behavior, branding, and digital marketing strategies. It prepares students to create and manage high-impact marketing campaigns across various industries.",
        },
        {
            title: "Financial Management",
            content:
                "Designed to build strong financial acumen, this course covers investment analysis, corporate finance, banking, and risk management—enabling students to make informed financial decisions in dynamic environments.",
        },
        {
            title: "Human Resources Management (HRM)",
            content:
                "This specialization develops expertise in talent acquisition, employee engagement, organizational development, and labor laws—preparing future HR leaders to manage and nurture workforce potential.",
        },
        {
            title: "Operations & Supply Chain Management (OSCM)",
            content:
                "Focused on optimizing business processes, logistics, and supply networks, this course trains students in effective planning, execution, and resource management across global operations.",
        },
        {
            title: "Business Analytics (BA)",
            content:
                "Blending data science with business strategy, this specialization teaches students how to interpret data, apply statistical tools, and drive business decisions using analytics and AI-powered insights.",
        },
    ];
    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...specializationHero} />

            {/* MBAspecialization */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16">

                        {/* LEFT SIDE - MBA */}
                        <div>
                            <h3 className="text-2xl font-semibold text-[#0b2c4d] mb-4">
                                MBA Overview
                            </h3>

                            <p className="text-gray-700 text-sm leading-7">
                                The two-year full-time MBA programme at Brahma Valley MBA College
                                is designed to nurture future business leaders with a strong
                                foundation in core management disciplines. Spread across four
                                semesters, the programme offers specialisations in Marketing
                                Management, Financial Management, Human Resources Management (HRM),
                                Operations & Supply Chain Management (OSCM), and Business
                                Analytics (BA). With a balanced blend of academic learning and
                                industry exposure, the programme equips students with the
                                analytical, leadership, and decision-making skills required to
                                thrive in today’s competitive business environment.
                            </p>

                            <hr className="my-8 border-gray-300" />

                            <h2 className="text-2xl font-semibold text-[#0b2c4d] mb-6">
                                Specialization Offered –
                            </h2>

                            <div className="space-y-3">
                                {mbaSpecializations.map((item, index) => (
                                    <div key={index} className="rounded overflow-hidden">

                                        {/* Title */}
                                        <button
                                            onClick={() =>
                                                setActiveIndex(activeIndex === index ? null : index)
                                            }
                                            className={`w-full text-left px-6 py-4 font-medium text-white transition-all duration-300 ${activeIndex === index
                                                    ? "bg-green-700"
                                                    : "bg-green-600 hover:bg-green-700"
                                                }`}
                                        >
                                            {item.title}
                                        </button>

                                        {/* Content */}
                                        {activeIndex === index && (
                                            <div className="bg-white border border-gray-200 p-6 text-sm text-gray-700 leading-7">
                                                {item.content}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* RIGHT SIDE - BBA */}
                        <div>
                            <h2 className="text-2xl font-semibold text-[#0b2c4d] mb-4">
                                BBA Overview
                            </h2>

                            <p className="text-gray-700 text-sm leading-7">
                                The Bachelor of Business Administration (BBA) is a three-year
                                undergraduate programme designed to provide students with a strong
                                foundation in business and management principles. The course covers
                                key areas such as Marketing, Finance, Human Resources, and
                                Operations, along with entrepreneurship and business analytics.
                                Through a blend of classroom learning, case studies, and practical
                                projects, the BBA programme prepares students for leadership roles,
                                higher education, and diverse career opportunities in the corporate
                                world.
                            </p>

                            <hr className="my-8 border-gray-300" />

                            <h2 className="text-2xl font-semibold text-[#0b2c4d] mb-6">
                                Specialization Offered –
                            </h2>

                            <p className="text-gray-500 text-sm">
                                No BBA specializations found.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
};

export default Specialization;
