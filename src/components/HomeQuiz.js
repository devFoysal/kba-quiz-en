import card1 from "../assets/images/button01.png";
import card2 from "../assets/images/button02.png";
import card3 from "../assets/images/button03.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HomeQuiz = () => {
  const { quizLevel } = useSelector(state => state.quiz);
  return (
    <section id="home-quiz">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-6 text-center">
            <h2>Quiz</h2>
            <p>
            The game of answering questions! You need to know if you want to play! There is a prize to win!
            </p>
          </div>
        </div>

        {/* <div className="row justify-content-center">
          <div className="col-md-3">
            <div className={`${quizLevel == 1 ? "card" : "card disabled"}`}>
              <div>
                <img src={card1} alt="" className="img-fluid" />
              </div>
              <Link to="/quiz">
                <h4>
                  ১ম পর্যায় <i className="fas fa-arrow-right"></i>
                </h4>
              </Link>
              <h5>খেলেছে : ৩৩০৪ জন</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className={`${quizLevel == 2 ? "card" : "card disabled"}`}>
              <div>
                <img src={card2} alt="" className="img-fluid" />
              </div>
              <a href="">
                <h4>
                  ২য় পর্যায় <i className="fas fa-arrow-right"></i>
                </h4>
              </a>
              <h5>খেলেছে : ৩২০৩ জন</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className={`${quizLevel == 3 ? "card" : "card disabled"}`}>
              <div>
                <img src={card3} alt="" className="img-fluid" />
              </div>
              <a href="">
                <h4>
                  ৩য় পর্যায় <i className="fas fa-arrow-right"></i>
                </h4>
              </a>
              <h5>খেলেছে : ২৮৮৬ জন</h5>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HomeQuiz;
