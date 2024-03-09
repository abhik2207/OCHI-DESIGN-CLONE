import { HiOutlineArrowUpRight } from "react-icons/hi2";
import coverImage from '../assets/images/hero-cover.jpg';

function LandingPage() {
    return (
        <div id="landing-page">
            <div id="hero-text">
                {["we create", "eye-opening", "presentations"].map((item, index) => {
                    return (<div className="mask" key={index}>
                        <div id="hero-row">
                            {index === 1 && (<div id="hero-cover"><img src={coverImage} alt="Cover" /></div>)}
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
