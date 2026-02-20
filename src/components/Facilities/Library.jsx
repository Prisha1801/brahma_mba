import React from "react";
import HeroSection from '../common/components/HeroSection';
import { libraryHero } from '../common/data/heroData';
import LibraryImage from '../../assets/posters/library1.png';

const Library = () => {
    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...libraryHero} />

            {/* CONTENT SECTION */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="flex flex-col md:flex-row min-h-[320px]">

                            {/* Image Side */}
                            <div className="md:w-5/12">
                                <img
                                    src={LibraryImage}
                                    alt="Library Facility"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Side */}
                            <div className="md:w-7/12 flex items-center">
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-4">
                                        Library Facilities
                                    </h3>

                                    <p className="text-gray-700 mb-4 text-justify">
                                        A well-equipped, spacious library is established with
                                        adequate reference books, textbooks, and national and
                                        international journals, which are required for the course
                                        and for reference work. A separate reading hall is provided
                                        for knowledge updates.
                                    </p>

                                    <p className="text-gray-700 text-justify">
                                        The library is digitally enabled with access to e-resources,
                                        databases, and online journals to support research and
                                        learning. Regular updates and new arrivals ensure students
                                        stay informed with the latest developments in management
                                        and related fields.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Library;
