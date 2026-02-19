import HeroSection from '../common/components/HeroSection';
import { hostelHero } from '../common/data/heroData';

const Hostel = () => {
    return (
        <>

            <HeroSection {...hostelHero} />

            <section className="bg-gray-100 py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="flex flex-col md:flex-row min-h-[320px]">

                            {/* Image Side */}
                            <div className="md:w-5/12">
                                <img
                                    src="https://bvim.brahmavalley.edu.in/public/uploads/1752233670_e8561a9841ac41d487c0.png"
                                    alt="Hostel Facility"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Side */}
                            <div className="md:w-7/12 flex items-center">
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-4">
                                        Hostel Facilities
                                    </h3>

                                    <p className="text-gray-700 mb-4 text-justify">
                                        A well-furnished, ventilated hostel facility is provided
                                        separately for girls and boys on the campus. Trained staff are
                                        appointed to ensure the security, health, and hygiene of the
                                        students. Separate beds and cupboards are provided to each
                                        student.
                                    </p>

                                    <p className="text-gray-700 text-justify">
                                        The hostels are equipped with clean dining areas,
                                        recreational spaces, and round-the-clock security. Regular
                                        maintenance and a disciplined environment contribute to a
                                        comfortable and safe residential experience conducive to
                                        academic focus.
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

export default Hostel;
