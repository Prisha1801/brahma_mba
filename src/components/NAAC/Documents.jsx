import React from "react";
import HeroSection from "../common/components/HeroSection";
import { naacDocumentsHero } from "../common/data/heroData";

const Documents = () => {
    return (
        <>
            <HeroSection {...naacDocumentsHero} />
            <div className="max-w-5xl mx-auto my-12 px-4">
                <h2 className="text-center text-xl font-bold text-slate-800 mb-6">No documents available at this time.</h2>
            </div>
        </>
    );
};

export default Documents;