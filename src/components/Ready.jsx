import { useEffect, useState } from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

function Ready() {
    const [rotate2, setRotate2] = useState(0);

    useEffect(() => {
        window.addEventListener('mousemove', (dets)=>{
            let mouseX = dets.clientX;
            let mouseY = dets.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            let angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
            setRotate2(angle);
        });
    });

    return (
        <div id="ready-page" data-scroll data-scroll-section data-scroll-speed="0.2">
            <h1>READY</h1>
            <h1>TO START</h1>
            <h1>THE PROJECT <span>?</span></h1>
            <button id="ready-button-1">START THE PROJECT <div id="ready-button-inside-1"><HiOutlineArrowUpRight className="arrow-top-right" /></div></button>
            <p>OR</p>
            <button id="ready-button-2"><a href="#">HELLO@OHI.DESIGN</a> <div id="ready-button-inside-2"><HiOutlineArrowUpRight className="arrow-top-right" /></div></button>
            <div className="eyes-container">
                <div className="eye-outer">
                    <div className="eye-middle">
                        <p>PLAY</p>
                        <div className="eye-moving-line" style={{transform: `rotate(${rotate2+180}deg)`}}>
                            <div className="eye-inner"></div>
                        </div>
                    </div>
                </div>
                <div className="eye-outer">
                    <div className="eye-middle">
                        <p>PLAY</p>
                        <div className="eye-moving-line" style={{transform: `rotate(${rotate2+180}deg)`}}>
                            <div className="eye-inner"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ready;