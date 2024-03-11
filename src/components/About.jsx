import { HiOutlineArrowUpRight } from "react-icons/hi2";
import aboutImage from '../assets/images/about-image.jpg';

function About() {
    return (
        // <div id="about-page" data-scroll data-scroll-section data-scroll-speed="-0.3">
        <div id="about-page">
            <div id="about-page-1">
                <div id="about-page-1-top">
                    <h1>Ochi is a strategic partner for fast-grow­ing tech businesses that need to <span>raise funds</span>, <span>sell prod­ucts</span>, <span>ex­plain com­plex ideas</span>, and <span>hire great peo­ple.</span></h1>
                </div>
                <div className="about-line" />
                <div id="about-page-1-bottom">
                    <div id="about-page-1-bottom-left">
                        <p>What you can expect:</p>
                    </div>
                    <div id="about-page-1-bottom-center">
                        {["We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.", "We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating."].map((item, index) => {
                            return <p key={index}>{item}</p>;
                        })}
                    </div>
                    <div id="about-page-1-bottom-right">
                        {["S:", "Instagram", "Facebook", "Behance", "LinkedIn"].map((item, index) => {
                            return <p key={index} style={{ marginBottom: index === 0 && '1.75vmax' }}>{item}</p>;
                        })}
                    </div>
                </div>
            </div>
            <div className="about-line"></div>
            <div id="about-page-2">
                <div id="about-page-2-left">
                    <h1>Our approach:</h1>
                    <button>READ MORE <div id="about-button-inside"><HiOutlineArrowUpRight className="arrow-top-right" /></div></button>
                </div>
                <div id="about-page-2-right">
                    <img src={aboutImage} alt="About" />
                </div>
            </div>
        </div>
    )
}

export default About;
