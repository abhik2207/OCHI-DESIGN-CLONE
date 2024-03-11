import cardImage1 from '../assets/images/card-1.svg';
import cardImage2 from '../assets/images/card-2.svg';
import cardImage3 from '../assets/images/card-3.png';

function Cards() {
    return (
        <div id="cards-page">
            <div className="card card1">
                <img src={cardImage1} alt="Card 1" />
                <button>&copy;2019-2022</button>
            </div>
            <div className="card card2">
                <img src={cardImage2} alt="Card 2" />
                <button>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className="card card3">
                <img src={cardImage3} alt="Card 3" />
                <button>BUSINESS BOOTCAMP ALUMNI</button>
            </div>
        </div>
    )
}

export default Cards;
