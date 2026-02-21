import TopBar from './TopBar';
import InfoBar from './InfoBar';
import MarqueeSection from './Marquee';
import Navbar from './Navbar';

const Header = () => {
    return (
        <>
            <div className="flex flex-col w-full">
                <TopBar />
                <InfoBar />
                <MarqueeSection />
            </div>
            <Navbar />
        </>
    );
};

export default Header;
