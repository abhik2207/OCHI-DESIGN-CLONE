import footerImage from '../assets/images/card-1.svg';

function Footer() {
    return (
        <div id="footer" data-scroll data-scroll-section data-scroll-speed="-0.1">
            <div id="footer-left">
                <h1>EYE-<br />OPENING</h1>
                <img src={footerImage} alt="Footer image" />
            </div>
            <div id="footer-right">
                <h1>PRESENTATIONS</h1>
                <div id="footer-right-bottom">
                    <div id="footer-right-1">
                        {["S:", "Instagram", "Behance", "Facebook", "LinkedIn"].map((item, index) => <p className='footer-link' key={index} style={{ marginTop: index === 0 ? "3vmax" : '0vmax', marginBottom: index === 0 ? "1.25vmax" : '0vmax' }}>{item}</p>)}
                        {["L:", "202-1965 W 4th Ave", "Vancouver, Canada", "30 Chukarina St", "Lviv, Ukraine"].map((item, index) => <p className='footer-link' key={index} style={{ marginTop: index === 0 ? "3vmax" : '0vmax', marginBottom: index === 0 ? "1.25vmax" : '0vmax' }}>{item}</p>)}
                        {["E:", "hello@ochi.design"].map((item, index) => <p className='footer-link' key={index} style={{ marginTop: index === 0 ? "3vmax" : '0vmax', marginBottom: index === 0 ? "1.25vmax" : '0vmax' }}>{item}</p>)}
                        <p className='footer-bottom'>&copy; ochi design 2024. Legal Terms</p>
                    </div>
                    <div id="footer-right-2">
                        {["M:", "Home", "Services", "Our work", "About us", "Insights", "Contact us"].map((item, index) => <p className='footer-link' key={index} style={{ marginTop: index === 0 ? "3vmax" : '0vmax', marginBottom: index === 0 ? "1.25vmax" : '0vmax' }}>{item}</p>)}
                        <p className='footer-bottom'>Website by Obys</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
