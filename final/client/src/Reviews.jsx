import './Reviews.css'
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Review from "./Review.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Reviews() {

  const [review, setReview] = useState({
    game: "",
    user: "",
    score: "",
    text: ""
  });

  const [reviews, setReviews] = useState([]);

  const games = [
    "Emergent Game", "New Yaw City", "Units Game", "Tafonk", "Castellum Ignoramus", "BraakeRout", "Jimmy's Lagoon", "Atomic Inquiry", "Yummy Tree Bark", "Try Falling Sometime"
  ];

  useEffect(() => {
    fetch('/api/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, []);


  function handleAdd() {
    if (!review.game || !review.user || !review.score) {
      toast.error("Fill out all required fields (game, name, score). Your voice means nothing if it isn't syntactically correct.");
      return;
    }
    let newReview = {
      game: review.game,
      user: review.user,
      score: review.score,
      text: review.text
    };

    setReviews([newReview, ...reviews]);

    setReview({
      game: "",
      user: "",
      score: "",
      text: ""
    });

    fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify([newReview, ...reviews])
    }).catch(err => console.error(err));



  }

  return (
    <div className='reviews-full-page'>
      <div className="reviews-nav-buttons">
        <NavLink to="/" className="nav-link" style={{ color: 'white' }}>
          Home
        </NavLink>
      </div>


      <div className="review">

        <h2 className='review-title alagard'>{"Leave A Review"}</h2>

        <select className='gameDropdown'
          value={review.game}
          onChange={(e) => setReview({ ...review, game: e.target.value })}
        >
          <option value="">Choose game</option>
          {games.map((game) => (
            <option key={game} value={game}>{game}</option>
          ))}
        </select>

        <div className='row'>
          <input
            type="text"
            placeholder="Your name"
            value={review.user} className='name-input'
            onChange={(e) => setReview({ ...review, user: e.target.value })}
          />
          <select
            value={review.score}
            onChange={(e) => setReview({ ...review, score: e.target.value })}
            className="gameDropdown"
          >
            <option value="No Score">Score</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <textarea
          placeholder="Your review"
          value={review.text}
          onChange={(e) => setReview({ ...review, text: e.target.value })}
          className="review-textarea"
        />

        <button className='review-submit' onClick={handleAdd}>Add Review</button>
      </div>

      <div className="reviewitems">
        {reviews.map((review, index) => (
          <Review
            key={index}
            review={review}
          />
        ))}
      </div>


      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        
      />
    </div>
  );
}


export default Reviews;