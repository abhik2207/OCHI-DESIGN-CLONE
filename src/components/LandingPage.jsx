import { HiOutlineArrowUpRight } from "react-icons/hi2";
import coverImage from '../assets/images/hero-cover.jpg';
import { motion } from "framer-motion";

function LandingPage() {
    return (
        <div id="landing-page" data-scroll data-scroll-section data-scroll-speed="-0.3">
            <div id="hero-text">
                {["we create", "eye-opening", "presentations"].map((item, index) => {
                    return (<div className="mask" key={index}>
                        <div id="hero-row">
                            {index === 1 && (<motion.div initial={{width: '0vmax'}} animate={{width: '9vmax'}} transition={{ease: [0.87, 0, 0.13, 1], duration: 0.75, delay: 0.5}} id="hero-cover"><img src={coverImage} alt="Cover" /></motion.div>)}
                            <h1>{item}</h1>
                        </div>
                    </div>);
                })}
            </div>
            <div id="hero-bottom">
                <a href="#">For public and private companies</a>
                <a href="#">From the first pitch to IPO</a>
                <div id="hero-bottom-buttons">
                    <button id="hero-button-1"><a href="#">START THE PROJECT</a></button>
                    <button id="hero-button-2"><a href="#"><HiOutlineArrowUpRight /></a></button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
