import React, { useState } from "react";
import HeroSection from "../common/components/HeroSection";
import { socialWelfareActivityHero } from "../common/data/heroData";
import s1 from "../../assets/social-welfare/s1.jpg"
import s2 from "../../assets/social-welfare/s2.jpg";
import s3 from "../../assets/social-welfare/s3.jpg";
import s4 from "../../assets/social-welfare/s4.jpg";

const images = [s1, s2, s3, s4];

const SocialWelfareActivity = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <HeroSection {...socialWelfareActivityHero} />

            <section className="py-16 bg-gray-100">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-red-600 tracking-wide">
                            SOCIAL WELFARE ACTIVITY
                        </h2>
                    </div>

                    {/* Content */}
                    <div className="text-gray-700 leading-8 text-justify space-y-6 text-[16px]">
                        <p>
                            Brahma Valley Institute of Management has adopted an entire village about seven kilometers from the institute. The name of this village located in picturesque surroundings in the midst of green valleys is "Pahine" It is fully occupied by tribal population.
                        </p>

                        <p>
                            On the 2021-22 , a field visit was organized and conducted to this village by
                            60 students of Brahma Valley as well as all the teaching staff members. The
                            members included the Director of BVIOM, Dr Prashant B Survanshi, and the
                            Principal of the Brahma Valley College of Engineering and Research, Dr. A
                            Vaidya. The Sarpanch of Pahine Village, Mrs Jijabai G Pehere, Mrs. Hausatai
                            Ambapure a member of the zilla parishad and Gram Sevak, Mr. Balalshaeb Aher ,
                            were there to welcome BVIOM staff and students.
                        </p>

                        <p>
                            Dr Prashant B Survanshi expressed his views about the reasons behind adopting
                            the village. According to him , there are various facilities provided by the
                            Government of Maharashtra and the Government of India to villages, which do not
                            reach upto them just because of the lack of knowledge. Besides, there is the
                            need to enlighten the villagers about the proper way of life, sanitation, etc.
                            in which all students and staff of BVIOM would participate actively. Free medical
                            camps will be set up and free medical check ups and medical services would be
                            provided. Efforts would also be made to resolve all the other problems of the
                            villagers.
                        </p>

                        <p>
                            After meeting up with the children of "Pahine Village", the students
                            of BVIOM were divided into groups and sent to each and every house to conduct a
                            socio-economic survey of the people in every family and their problems. After
                            the survey, the students became aware of the lifestyle of the villagers, their
                            culture and their difficulties.
                        </p>

                        <p>
                            BVIOM has planned to conduct weekly field visits at the adopted village Pahine
                            (Brahma Village) to solve their socio-economic problems through free medical
                            camps, distribution of various commodities, and eatables. This project launched
                            by BVIOM is really commendable; as the institute is determined to develop the
                            village.
                        </p>
                    </div>

                    {/* Activity Heading */}
                    <div className="text-center mt-14 mb-8">
                        <h3 className="text-2xl font-semibold text-red-600">
                            Activity
                        </h3>
                    </div>

                    {/* Image Gallery */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedImage(img)}
                                className="overflow-hidden rounded-lg shadow-md bg-white cursor-pointer"
                            >
                                <img
                                    src={img}
                                    alt={`Activity ${index + 1}`}
                                    className="w-full h-64 object-cover hover:scale-105 transition duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-5xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute -top-10 right-0 text-white text-3xl"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✕
                        </button>

                        <img
                            src={selectedImage}
                            alt="Preview"
                            className="w-full max-h-[85vh] object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default SocialWelfareActivity;
