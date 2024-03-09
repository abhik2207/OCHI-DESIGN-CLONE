import { motion } from "framer-motion";

function Marquee() {
    return (
        <div id="marquee-page">
            <div id="marquee-text">
                <motion.h1 initial={{x: 0}} animate={{x: '-100%'}} transition={{ease: 'linear', repeat: Infinity, duration: 5.5}}>WE ARE OCHI</motion.h1>
                <motion.h1 initial={{x: 0}} animate={{x: '-100%'}} transition={{ease: 'linear', repeat: Infinity, duration: 5.5}}>WE ARE OCHI</motion.h1>
                <motion.h1 initial={{x: 0}} animate={{x: '-100%'}} transition={{ease: 'linear', repeat: Infinity, duration: 5.5}}>WE ARE OCHI</motion.h1>
            </div>
        </div>
    )
}

export default Marquee;
