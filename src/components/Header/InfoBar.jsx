import React from 'react';

const InfoBar = () => {
    return (
        <div className="bg-gradient-green text-white py-5 relative overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-40 h-40 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-white rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <p className="uppercase font-heading font-medium mb-1 tracking-[0.25em] text-white/80 text-[11px] md:text-[13px]">
                    Nashik Gramin Shikshan Prasarak Mandal's
                </p>
                <h1 className="font-heading font-extrabold text-xl md:text-3xl text-white tracking-wide mb-2">
                    BRAHMA VALLEY INSTITUTE OF MANAGEMENT
                </h1>
                <p className="text-white/80 text-[11px] md:text-[13px] leading-relaxed font-medium max-w-3xl mx-auto">
                    Approved by AICTE | Affiliated to Savitribai Phule Pune University | DTE Code: MB5123
                </p>
            </div>
        </div>
    );
};

export default InfoBar;
