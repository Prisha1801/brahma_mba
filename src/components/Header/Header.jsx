import TopBar from './TopBar';
import InfoBar from './InfoBar';
import MarqueeSection from './Marquee';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className="flex flex-col w-full">
            <TopBar />
            <InfoBar />
            <MarqueeSection />
            <Navbar />
        </header>
    );
};

export default Header;
