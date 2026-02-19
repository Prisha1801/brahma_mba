import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


// Pages
import Home from './pages/Home';
import BoardMembers from './components/bviom/BoardMembers';
import LMCComitee from './components/bviom/LMCComitee';
import PresidentDesk from './components/bviom/PresidentDesk';
import DirectorDesk from './components/bviom/DirectorDesk';
import MissionVision from './components/Header/MissionVision';
import Committees from './components/bviom/Committees';
import Library from './components/Facilities/Library';
import Hostel from './components/Facilities/Hostel';
import Cafeteria from './components/Facilities/Cafeteria';
import Sports from './components/Facilities/Sports';
import PersonalDevelopment from './components/Facilities/PersonalDevelopment';
import Scholarship from './components/Facilities/Scholarship';
import Transportation from './components/Facilities/Transportation';
import Faculty from './components/Academics/Faculty';
import StudentCorner from './components/Academics/StudentCorner';
import AdmissionCriteria from './components/Academics/AdmissionCriteria';
import FeeStructure from './components/Academics/FeeStructure';
import Eligibility from './components/Academics/Eligibility';
import Specialization from './components/Academics/Specialization';
import CourseStructure from './components/Academics/CourseStructure';
import AlumniList from './components/Alumni/AlumniList';
import TPO from './components/TrainingPlacement/TPO';
import IndustrialVisit from './components/TrainingPlacement/IndustrialVisit';
import StudentPlacement from './components/TrainingPlacement/StudentPlacement';
import Events from './components/Management/Events';
import CulturalProgram from './components/Management/CulturalProgram';
import UpcomingEvents from './components/Management/UpcomingEvents';
import SocialWelfareActivity from './components/SocialActivity/SocialWelfareActivity';
import AntiRagging from './components/SocialActivity/AntiRagging';
import Grievance from './components/SocialActivity/Greivance';
import IIQA from './components/NAAC/IIQA';
import IQAC from './components/NAAC/IQAC';
import SSR from './components/NAAC/SSR';
import Documents from './components/NAAC/Documents';
import RTI from './components/NAAC/RTI';
import DVVHistory from './components/NAAC/DVVHistory';
import Gallery from './components/NAAC/Gallery';
import Contact from './components/NAAC/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board-members" element={<BoardMembers />} />
          <Route path="/lmc-committee" element={<LMCComitee />} />
          <Route path="/president-desk" element={<PresidentDesk />} />
          <Route path="/director-desk" element={<DirectorDesk />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/library" element={<Library />} />
          <Route path="/hostel" element={<Hostel />} />
          <Route path="/cafeteria" element={<Cafeteria />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/personal-development" element={<PersonalDevelopment />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/student-corner" element={<StudentCorner />} />
          <Route path="/admission-criteria" element={<AdmissionCriteria />} />
          <Route path="/fee-structure" element={<FeeStructure />} />
          <Route path="/eligibility" element={<Eligibility />} />
          <Route path="/specialization" element={<Specialization />} />
          <Route path="/course-structure" element={<CourseStructure />} />
          <Route path="/alumni-list" element={<AlumniList />} />
          <Route path="/tpo-desk" element={<TPO />} />
          <Route path="/industrial-visit" element={<IndustrialVisit />} />
          <Route path="/student-placement" element={<StudentPlacement />} />
          <Route path="/events" element={<Events />} />
          <Route path="/cultural-program" element={<CulturalProgram />} />
          <Route path="/upcoming-event" element={<UpcomingEvents />} />
          <Route path="/social-welfare-activity" element={<SocialWelfareActivity />} />
          <Route path="/anti-ragging" element={<AntiRagging />} />
          <Route path="/grievance" element={<Grievance />} />
          <Route path="/iiqa" element={<IIQA />} />
          <Route path="/iqac" element={<IQAC />} />
          <Route path="/best-practices" element={<IQAC />} />
          <Route path="/feedback" element={<IQAC />} />
          <Route path="/ssr" element={<SSR />} />
          <Route path="/naac-documents" element={<Documents />} />
          <Route path="/rti" element={<RTI />} />
          <Route path='/dvv-history' element={<DVVHistory />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
