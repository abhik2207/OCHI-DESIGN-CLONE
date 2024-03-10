import { useEffect, useState } from 'react';
import eyesBackground from '../assets/images/eyes-background.jpg';

function Eyes() {
    const eyesBackgroundStyle = {
        backgroundImage: `url(${eyesBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener('mousemove', (dets)=>{
            let mouseX = dets.clientX;
            let mouseY = dets.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            let angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
            setRotate(angle);
        });
    });

    return (
        <div id="eyes-page" style={eyesBackgroundStyle}>
            <div id="eyes-container">
                <div className="eye-outer">
                    <div className="eye-middle">
                        <p>PLAY</p>
                        <div className="eye-moving-line" style={{transform: `rotate(${rotate+180}deg)`}}>
                            <div className="eye-inner"></div>
                        </div>
                    </div>
                </div>
                <div className="eye-outer">
                    <div className="eye-middle">
                        <p>PLAY</p>
                        <div className="eye-moving-line" style={{transform: `rotate(${rotate+180}deg)`}}>
                            <div className="eye-inner"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes;
