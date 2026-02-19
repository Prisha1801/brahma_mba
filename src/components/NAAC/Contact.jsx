import React from "react";
import HeroSection from "../common/components/HeroSection";
import { contactHero } from "../common/data/heroData";
import { Home, Headphones, Mail } from "lucide-react";

const Contact = () => {
    return (
        <>
            <HeroSection {...contactHero} />

            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Google Map */}
                    <div className="flex justify-center mb-12">
                        <div className="w-full max-w-5xl h-[400px] rounded-lg overflow-hidden shadow-md">
                            <iframe
                                title="Brahma Valley Location"
                                src="https://www.google.com/maps?q=Brahma+Valley+Nashik&output=embed"
                                className="w-full h-full border-0"
                                loading="lazy"
                                allowFullScreen
                            />
                        </div>
                    </div>

                    {/* Contact Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Contact Info */}
                        <div className="space-y-10">

                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <Home className="text-blue-900 w-6 h-6 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-lg text-gray-900 leading-7">
                                        Brahma Valley Educational Campus,<br />
                                        Anjaneri, Trimbak Road<br />
                                        Nashik: 422213 Tel: 02594-299219
                                    </h4>
                                    <p className="text-gray-600 mt-1">Nashik</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <Headphones className="text-blue-900 w-6 h-6 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-lg text-gray-900">
                                        (0253) 2318963 , 2312904
                                    </h4>
                                    <p className="text-gray-600 mt-1">
                                        10:00 AM To 06:00PM
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <Mail className="text-blue-900 w-6 h-6 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-lg text-gray-900">
                                        directormba@brahmavalley.com
                                    </h4>
                                    <p className="text-gray-600 mt-1">
                                        Send us your query anytime!
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div className="space-y-6">
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        required
                                    />

                                    <input
                                        type="email"
                                        placeholder="Enter email address"
                                        className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        required
                                    />

                                    <input
                                        type="text"
                                        placeholder="Enter Subject"
                                        className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        required
                                    />
                                </div>

                                <div>
                                    <textarea
                                        rows="7"
                                        placeholder="Enter Message"
                                        className="w-full border border-gray-300 px-4 py-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        required
                                    />
                                </div>

                                <div className="md:col-span-2 flex justify-end">
                                    <button
                                        type="submit"
                                        className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-md transition duration-300"
                                    >
                                        SEND MESSAGE
                                    </button>
                                </div>

                            </form>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default Contact;

