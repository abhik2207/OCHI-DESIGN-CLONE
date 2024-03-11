import { HiOutlineArrowUpRight } from "react-icons/hi2";
import reviewsImage from '../assets/images/reviews-image.png';

function Reviews() {
    return (
        <div id="reviews-page">
            <h1>Client&apos;s reviews</h1>
            <div className="reviews-line"></div>
            <div id="reviews-container">
                <div className="review review-1">
                    <p>Karman Ventures</p>
                </div>
                <div className="review review-2">
                    <p>Services</p>
                    {["investor-deck", "sales deck"].map((item, index) => {
                        return <div key={index} className="review-button-container">
                            <button>{item}</button>
                            <div className="reviews-arrow-top"><HiOutlineArrowUpRight /></div>
                        </div>;
                    })}
                </div>
                <div className="review review-3">
                    <p>William Barnes</p>
                    <img src={reviewsImage} alt="William Barnes" />
                    <p>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p>
                </div>
                <div className="review review-4">
                    <p>READ</p>
                </div>
            </div>
        </div>
    )
}

export default Reviews;