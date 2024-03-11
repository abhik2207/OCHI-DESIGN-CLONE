import { motion } from 'framer-motion';
import projectImage1 from '../assets/images/project-1.png';
import projectImage2 from '../assets/images/project-2.jpg';
import projectImage3 from '../assets/images/project-3.jpg';
import projectImage4 from '../assets/images/project-4.png';
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { useState } from 'react';

function FeaturedProjects() {
    const [isHovering1, setIsHovering1] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);
    const [isHovering3, setIsHovering3] = useState(false);
    const [isHovering4, setIsHovering4] = useState(false);

    return (
        <div id="projects-page" data-scroll data-scroll-section>
            <h1>Featured projects</h1>
            <div className="projects-line"></div>
            <div className="project-row">
                <div className="project project-left" onMouseEnter={() => setIsHovering1(true)} onMouseLeave={() => setIsHovering1(false)}>
                    <h1 className="project-header header-left">
                        {"FYDE".split('').map((item, index) => <motion.span key={index} initial={{ y: "100%" }} animate={isHovering1 ? ({ y: '0%' }) : ({ y: "100%" })} transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 0.5, delay:index*0.05 }}>{item}</motion.span>)}
                    </h1>
                    <div className="project-name"><div className="project-dot"></div> FYDE</div>
                    <div className="project-image">
                        <img src={projectImage1} alt="Project 1" />
                    </div>
                    <div className="project-buttons">
                        <button><a href="#">audit</a></button>
                        <button><a href="#">copywriting</a></button>
                        <button><a href="#">sales deck</a></button>
                        <button><a href="#">slides design</a></button>
                    </div>
                </div>
                <div className="project project-right" onMouseEnter={() => setIsHovering2(true)} onMouseLeave={() => setIsHovering2(false)}>
                    <h1 className="project-header header-right">
                        {"VISE".split('').map((item, index) => <motion.span key={index} initial={{ y: "100%" }} animate={isHovering2 ? ({ y: '0%' }) : ({ y: "100%" })} transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 0.5, delay:index*0.05 }}>{item}</motion.span>)}
                    </h1>
                    <div className="project-name"><div className="project-dot"></div> VISE</div>
                    <div className="project-image">
                        <img src={projectImage2} alt="Project 2" />
                    </div>
                    <div className="project-buttons">
                        <button><a href="#">agency</a></button>
                        <button><a href="#">company presentation</a></button>
                    </div>
                </div>
            </div>
            <div className="project-row">
                <div className="project project-left" onMouseEnter={() => setIsHovering3(true)} onMouseLeave={() => setIsHovering3(false)}>
                    <h1 className="project-header header-left">
                        {"TRAWA".split('').map((item, index) => <motion.span key={index} initial={{ y: "100%" }} animate={isHovering3 ? ({ y: '0%' }) : ({ y: "100%" })} transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 0.5, delay:index*0.05 }}>{item}</motion.span>)}
                    </h1>
                    <div className="project-name"><div className="project-dot"></div> TRAWA</div>
                    <div className="project-image">
                        <img src={projectImage3} alt="Project 3" />
                    </div>
                    <div className="project-buttons">
                        <button><a href="#">brand identity</a></button>
                        <button><a href="#">design research</a></button>
                        <button><a href="#">investor deck</a></button>
                    </div>
                </div>
                <div className="project project-right" onMouseEnter={() => setIsHovering4(true)} onMouseLeave={() => setIsHovering4(false)}>
                    <h1 className="project-header header-right">
                        {"PREMIUM BLEND".split('').map((item, index) => <motion.span key={index} initial={{ y: "100%" }} animate={isHovering4 ? ({ y: '0%' }) : ({ y: "100%" })} transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 0.5, delay:index*0.05 }}>{item}</motion.span>)}
                    </h1>
                    <div className="project-name"><div className="project-dot"></div> PREMIUM BLEND</div>
                    <div className="project-image">
                        <img src={projectImage4} alt="Project 4" />
                    </div>
                    <div className="project-buttons">
                        <button><a href="#">branded template</a></button>
                    </div>
                </div>
            </div>
            <div id="more-projects">
                <button>VIEW ALL CASE STUDIES <div id="projects-button-inside"><HiOutlineArrowUpRight className="arrow-top-right" /></div></button>
            </div>
        </div >
    )
}

export default FeaturedProjects;
