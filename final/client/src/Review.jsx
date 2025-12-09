import './Review.css';

function Review({ review }) {

    function getGameImage(gameName) {
        switch (gameName) {
            case "Emergent Game":
                return "/assets/games/emergentgame.png";
            case "New Yaw City":
                return "/assets/games/newyawcity.png";
            case "Units Game":
                return "/assets/games/units.png";
            case "Tafonk":
                return "/assets/games/tafonk.png";
            case "Castellum Ignoramus":
                return "/assets/games/castellumignoramus.png";
            case "BraakeRout":
                return "/assets/games/braakerout.png";
            case "Jimmy's Lagoon":
                return "/assets/games/jimmylagoon.png";
            case "Atomic Inquiry":
                return "/assets/games/atomicinquiry.png";
            case "Yummy Tree Bark":
                return "/assets/games/yummytreebark.png";
            case "Try Falling Sometime":
                return "/assets/games/tryfallingsometime.png";
        }
    }

    let imageSrc = getGameImage(review.game);


    return (
        <div className="item">
            <div className="item-header">
                <img src={imageSrc} className="item-image" />
                <div className="item-header-text">
                    <span className='item-title'>{review.game}</span>
                    <span className="item-score">{review.score}/5</span>
                    <span className="item-user">{review.user}</span>
                </div>
            </div>
            <div className="item-text">{review.text}</div>
        </div>
    );
}

export default Review;
