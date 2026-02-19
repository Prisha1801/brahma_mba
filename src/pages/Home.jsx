import React from 'react';
import HeroCarousel from '../components/Hero/HeroCarousel';
import InformaticsBox from '../components/Hero/InformaticsBox';
import AboutSection from '../components/About/AboutSection';
import Specializations from '../components/Specializations/Specializations';
import ExpertStaff from '../components/Staff/ExpertStaff';
import UpcomingEvents from '../components/Events/UpcomingEvents';
import PlacementPartners from '../components/Placement/PlacementPartners';
import AdmissionForm from '../components/Admission/AdmissionForm';

const Home = () => {
    return (
        <>
            <HeroCarousel />
            <InformaticsBox />
            <AboutSection />
            <Specializations />
            <ExpertStaff />
            <UpcomingEvents />
            <PlacementPartners />
            <AdmissionForm />
        </>
    );
};

export default Home;
