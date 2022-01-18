import welcome from "../assets/images/stage.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Carousel from "../components/Carousel";
import HomeQuiz from "../components/HomeQuiz";
import Layout from "../components/Layout";
import banner from "../assets/images/mnemonic.png";
const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      {/* welcome to vote */}
      <section id="welcome-to-vote" className="m-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center">
              <img src={welcome} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6">
              <div>
                <img
                  src={banner}
                  class="d-block m-auto"
                  width="300"
                  alt="..."
                />
              </div>
              <p>
                Welcome to the{" "}
                <strong>‘Democracy Festival: Politics Matters’</strong> quiz
                contest organized by Democracy International to celebrate the
                Golden Jubilee of the Independence of Bangladesh. Politics
                greatly affects the lives and livelihoods of the citizens. Let
                us learn about our country and its politics through a game of
                quizzes and win some prizes,
                <strong className="d-block">
                  Please log in, if you want to play
                </strong>
              </p>

              <div className="d-felx justify-content-between">
                <Link to="/quiz">
                  <button className="btn lets-play">Let's Play</button>
                </Link>
                <Link to="/leaderboard">
                  <button className="btn lets-play ml-2">Leaderboard</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
