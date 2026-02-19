import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaGraduationCap } from 'react-icons/fa';

const AdmissionForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        program: '',
        agreed: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
    };

    return (
        <section id="home_admission_form" className="relative py-20 md:py-28 overflow-hidden min-h-[700px] flex items-center">
            {/* Background Image — fully visible */}
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(https://bvim.brahmavalley.edu.in/public/assets/img/admissionForm.png)` }} />
            {/* Very light overlay for minimal darkening */}
            <div className="absolute inset-0 bg-black/10" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Form aligned to the left */}
                <div className="max-w-md ml-4 md:ml-8">
                    <motion.div
                        initial={{ x: -60, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white rounded-2xl shadow-elevated p-8 md:p-10">
                            <h3 className="font-heading text-xl font-bold text-bviom-dark mb-1">Admission Form</h3>
                            <div className="w-10 h-1 bg-gradient-to-r from-bviom-green to-emerald-400 rounded-full mb-8" />

                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Full Name */}
                                <div>
                                    <label className="text-[12px] font-heading font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
                                        Full Name <span className="text-bviom-red">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="fullName"
                                            placeholder="Enter your full name"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-bviom-green focus:ring-2 focus:ring-bviom-green/10 outline-none transition-all pr-11 text-sm"
                                            onChange={handleChange}
                                        />
                                        <FaUser className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" />
                                    </div>
                                </div>

                                {/* Email & Phone Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-[12px] font-heading font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
                                            Email <span className="text-bviom-red">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="your@email.com"
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-bviom-green focus:ring-2 focus:ring-bviom-green/10 outline-none transition-all pr-11 text-sm"
                                                onChange={handleChange}
                                            />
                                            <FaEnvelope className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-[12px] font-heading font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
                                            Phone <span className="text-bviom-red">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="+91 XXXXX XXXXX"
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-bviom-green focus:ring-2 focus:ring-bviom-green/10 outline-none transition-all pr-11 text-sm"
                                                onChange={handleChange}
                                            />
                                            <FaPhone className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" />
                                        </div>
                                    </div>
                                </div>

                                {/* Program */}
                                <div>
                                    <label className="text-[12px] font-heading font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
                                        Select Program <span className="text-bviom-red">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="program"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-bviom-green focus:ring-2 focus:ring-bviom-green/10 outline-none transition-all pr-11 text-sm appearance-none text-gray-500"
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled selected>Choose a program...</option>
                                            <option value="MBA">Master of Business Administration (MBA)</option>
                                            <option value="BBA">Bachelor of Business Administration (BBA)</option>
                                        </select>
                                        <FaGraduationCap className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Agreement */}
                                <div className="flex items-start gap-3 pt-1">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        name="agreed"
                                        required
                                        className="w-4 h-4 mt-0.5 accent-bviom-green rounded"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="terms" className="text-[12px] text-gray-500 leading-relaxed">
                                        I agree to the <span className="text-bviom-green font-semibold hover:underline cursor-pointer">Terms & Conditions</span> and <span className="text-bviom-green font-semibold hover:underline cursor-pointer">Privacy Policy</span>
                                    </label>
                                </div>

                                {/* Submit */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full btn-primary py-4 rounded-xl text-base tracking-widest"
                                >
                                    Submit Application
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AdmissionForm;
