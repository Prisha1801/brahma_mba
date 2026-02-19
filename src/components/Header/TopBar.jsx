import React from 'react';

const TopBar = () => {
    return (
        <div className="w-full bg-bviom-dark text-white/80 py-1.5 text-[12px] hidden md:block">
            <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
                <ul className="flex items-center gap-6 list-none m-0 p-0">
                    <li>
                        <a
                            href="https://bvim.brahmavalley.edu.in/public/front_end/img/MBA_Admission_2025_26_Final.jpg"
                            target="_blank"
                            className="hover:text-bviom-green transition-colors font-medium flex items-center gap-1.5"
                        >
                            <span className="w-1 h-1 rounded-full bg-bviom-green inline-block" />
                            Download E-Brochures
                        </a>
                    </li>
                    <li>
                        <a
                            href="#home_admission_form"
                            className="hover:text-bviom-green transition-colors font-medium flex items-center gap-1.5"
                        >
                            <span className="w-1 h-1 rounded-full bg-bviom-green inline-block" />
                            Admission
                        </a>
                    </li>
                </ul>

                <ul className="flex items-center gap-4 list-none m-0 p-0">
                    <li>
                        <span className="text-bviom-green font-semibold uppercase tracking-wider text-[10px]">Get Connected</span>
                    </li>
                    {[
                        { src: "https://bvim.brahmavalley.edu.in/public/front_end/img/wp.jpg", alt: "WhatsApp" },
                        { src: "https://bvim.brahmavalley.edu.in/public/front_end/img/360.jpg", alt: "360" },
                        { src: "https://bvim.brahmavalley.edu.in/public/front_end/img/fb.jpg", alt: "Facebook" },
                        { src: "https://bvim.brahmavalley.edu.in/public/front_end/img/ig.jpg", alt: "Instagram" },
                        { src: "https://bvim.brahmavalley.edu.in/public/front_end/img/id.jpg", alt: "LinkedIn" },
                        { src: "https://bvim.brahmavalley.edu.in/public/front_end/img/yt.jpg", alt: "YouTube" }
                    ].map((item, idx) => (
                        <li key={idx}>
                            <a href="#" target="_blank" className="block w-5 h-5 rounded overflow-hidden hover:scale-125 transition-transform">
                                <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TopBar;
