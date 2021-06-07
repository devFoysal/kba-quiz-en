import React, { useEffect, useState } from "react";
import Layout from "../components/LayoutNotCarousel";
import axios from "axios";
import cookie from "js-cookie";
import Countdown from "react-countdown";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  setQuizStart,
  setQuizLevel,
  setQuizAnswer,
  sendQuizStart,
  submitAnswer,
} from "../store/actions/quizAction";
import { resetData } from "../store/actions/authAction";
import Timer2 from "../components/Timer2";

var numbers = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
};

function replaceNumbers(input) {
  var output = [];
  for (var i = 0; i < input.length; ++i) {
    if (numbers.hasOwnProperty(input[i])) {
      output.push(numbers[input[i]]);
    } else {
      output.push(input[i]);
    }
  }
  return output.join("");
}

const QuizOne = () => {
  // const questions = [
  //   {
  //     questionText: "একাদশতম জাতীয় সংসদ নির্বাচন কবে অনুষ্ঠিত হবে?",
  //     answerOptions: [
  //       { answerText: "২৮শে ডিসেম্বর", isCorrect: false, id: 1 },
  //       { answerText: "২৯শে ডিসেম্বর", isCorrect: false, id: 2 },
  //       { answerText: "৩০শে ডিসেম্বর", isCorrect: true, id: 3 },
  //       { answerText: "৩১শে ডিসেম্বর", isCorrect: false, id: 4 },
  //     ],
  //   },
  //   {
  //     questionText: "৩০শে ডিসেম্বর ২০১৮ কি বার?",
  //     answerOptions: [
  //       { answerText: "রবিবার", isCorrect: false, id: 1 },
  //       { answerText: "সোমবার", isCorrect: true, id: 2 },
  //       { answerText: "মঙ্গলবার", isCorrect: false, id: 3 },
  //       { answerText: "বৃহস্পতিবার", isCorrect: false, id: 4 },
  //     ],
  //   },
  //   {
  //     questionText: "নির্বাচন কমিশন এবং নির্বাচন কমিশনারদের কে নিয়োগ দান করেন?",
  //     answerOptions: [
  //       { answerText: "প্রধানমন্ত্রী", isCorrect: true, id: 1 },
  //       { answerText: "নির্বাচন কমিশন সচিবালয়", isCorrect: false, id: 2 },
  //       { answerText: "মন্ত্রিপরিষদ", isCorrect: false, id: 3 },
  //       { answerText: "রাষ্ট্রপতি", isCorrect: false, id: 4 },
  //     ],
  //   },
  //   {
  //     questionText: "একজন প্রার্থী নির্বাচনে কত টাকা খরচ করতে পারবেন?",
  //     answerOptions: [
  //       { answerText: "সর্বোচ্চ ১৫ লক্ষ টাকা", isCorrect: false, id: 1 },
  //       { answerText: "সর্বোচ্চ ২০ লক্ষ টাকা", isCorrect: false, id: 2 },
  //       { answerText: "সর্বোচ্চ ২৫ লক্ষ টাকা", isCorrect: false, id: 3 },
  //       { answerText: "সর্বোচ্চ ৩০ লক্ষ টাকা", isCorrect: true, id: 4 },
  //     ],
  //   },
  //   {
  //     questionText: "বাংলাদেশের নির্বাচন ব্যবস্থা কি ধরনের?",
  //     answerOptions: [
  //       { answerText: "একক বিজয়ী ব্যবস্থা", isCorrect: false, id: 1 },
  //       { answerText: "বহু বিজয়ী ব্যবস্থা", isCorrect: false, id: 2 },
  //       { answerText: "পছন্দানুক্রম ব্যবস্থা", isCorrect: false, id: 3 },
  //       {
  //         answerText: "দলীয়-তালিকা আনুপাতিক প্রতিনিধিত্ব",
  //         isCorrect: true,
  //         id: 4,
  //       },
  //     ],
  //   },
  // ];
  const { quizLevel, quizStart, answerLoading, finalResult } = useSelector(
    (state) => state.quiz
  );
  const [quiz, setQuiz] = useState([]);
  const [quizStartTime, setQuizStartTime] = useState("");
  const [quizALL, setQuizALL] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [duration, setDuration] = useState(null);
  const [quizLoading, setQuizLoading] = useState(false);
  const [quizError, setQuizError] = useState(
    `Sorry it is not possible to express quiz questions. Are you logged in? Or refresh the page`
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setQuizLoading(true);
    axios.defaults.headers.common["Authorization"] = `Bearer ${cookie.get(
      "token"
    )}`;
    axios
      .get("quiz/all")
      .then((res) => {
        if (res.data && res.data.data) {
          let quizData = res.data.data.filter((e) => e.id == quizLevel)[0];
          setQuiz(quizData);
          setQuizALL(res.data.data);
          setTimeLeft(quizData.duration);
          setQuestions(quizData.questions);
          // dispatch(setQuizStart(true));
          setQuizLoading(false);
          setShowModal(true);
        }
      })
      .catch((err) => {
        setQuizLoading(false);
        console.log(err.response);
        if (err.response && err.response.status == 401) {
          dispatch(resetData());
        } else if (err.response && err.response.status == 420) {
          setQuizError(err.response.data.message);
        }
      });
  }, []);

  useEffect(() => {
    let data = quizALL.filter((e) => e.id == quizLevel)[0];
    if (quizLevel >= 2 && quizLevel <= 3) {
      setQuiz(data);
      setCurrentQuestion(0);
      setTimeLeft(data.duration);
      setQuestions(data.questions);
      dispatch(setQuizStart(true));
      console.log(quizLevel, data);
    }
  }, [quizLevel]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [colorbtn, setColorbtn] = useState(false);
  const [clickedId, setClickedId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(duration);

  const handleModal = (start = false) => {
    setShowModal(!showModal);
    if (start == true) {
      dispatch(setQuizStart(true));
      dispatch(sendQuizStart(+Date.now()));
      setQuizStartTime(new Date().toLocaleTimeString());
    }
  };

  const handleAnswerOptionClick = (id) => {
    setClickedId(id);
    setColorbtn(true);
    dispatch(
      setQuizAnswer({
        answerId: id,
        quizLevel,
        time: timeLeft,
      })
    );
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      if (quizLevel == 3) {
        setShowScore(true);
        dispatch(submitAnswer(+Date.now()));
      }
      dispatch(setQuizStart(false));
      dispatch(setQuizLevel(quizLevel + 1));
    }
    setColorbtn(false);
    setClickedId(null);
  };

  return (
    <Layout>
      <div className="quiz-app">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              {showScore ? (
                <div className="row justify-content-center">
                  <div className="col-lg-6 score-section-bg">
                    <div className="score-section">
                      {answerLoading ? (
                        <span>
                          {" "}
                          Please wait for the result of your quiz......{" "}
                        </span>
                      ) : (
                        <>
                          <h3>Result :</h3>
                          <h5>{finalResult}</h5>
                          <Link to="/leaderboard">
                            <button className="btn lets-play ml-2">
                              Leaderboard
                            </button>
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ) : quizStart && !showModal ? (
                <>
                  <div className="question-section">
                    <div className="row justify-content-center mb-5">
                      <div className="col-lg-10">
                        <div className="time-box">
                          <div>
                            <h5>
                              Quiz Start:{" "}
                              {replaceNumbers(quizStartTime.toString())}
                            </h5>
                          </div>
                          <div>
                            <Countdown
                              date={Date.now() + timeLeft}
                              intervalDelay={100}
                              renderer={Timer2}
                              precision={3}
                              onTick={(e) => {
                                console.log(e);
                                setTimeLeft(e.total);
                              }}
                              onComplete={(e) => {
                                dispatch(setQuizLevel(quizLevel + 1));
                                if (quizLevel == 3) {
                                  dispatch(setQuizStart(false));
                                  setShowScore(true);
                                  dispatch(submitAnswer(+Date.now()));
                                }
                              }}
                              onPause={(e) => {
                                console.log("pause");
                              }}
                              onStop={(e) => {
                                console.log("Stop");
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <h2 style={{ fontWeight: "bold" }} className="mb-4">
                      {quiz && quiz.titleEn}
                    </h2>
                    <div className="row justify-content-center">
                      <div className="col-lg-6">
                        {/* <div className="question-count">
                        <span>Question {currentQuestion + 1}</span>/
                        {questions.length}
                      </div> */}
                        <div className="question-text">
                          {questions.length > 0 &&
                            questions[currentQuestion].titleEn}
                        </div>
                      </div>
                    </div>
                  </div>
                  {questions.length > 0 && (
                    <div className="answer-section">
                      <div className="row">
                        {questions[currentQuestion].answers.map(
                          (answerOption) => (
                            <div className="col-lg-6">
                              <button
                                className={
                                  clickedId === answerOption.id
                                    ? "btn color-btn"
                                    : "btn"
                                }
                                onClick={() =>
                                  handleAnswerOptionClick(answerOption.id)
                                }
                              >
                                {answerOption.titleEn}
                              </button>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </>
              ) : quizLoading == true ? (
                <span>Please wait ......</span>
              ) : (
                <span>{quizError}</span>
              )}
            </div>
          </div>
        </div>

        {/* MODAL */}
        <div
          class={showModal ? "modal fade show d-block" : "modal fade d-none"}
          id="exampleModalLong"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
          style={{ overflow: "auto" }}
        >
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  You are here
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={(e) => handleModal(false)}
                ></button>
              </div>
              <div class="modal-body">
                <div className="current-levels">
                  <span className="dot dot-active">Step 01</span>
                  <span className="dot">Step 02</span>
                  <span className="dot">Step 03</span>
                </div>
                <div className="game-rules">
                  <h3>
                    ‘Democracy Festival: Politics Matters’ online quiz
                    competition Terms and Conditions:
                  </h3>
                  <li>
                    Quiz competition is open for any Bangladeshi citizen above
                    18 years of age.
                  </li>
                  <li>
                    Because by registering on Karon Bangladesh Amar website, you
                    can take part in the competition.
                  </li>
                  <li>A contestant can only participate once.</li>
                  <li>
                    In the competition by providing accurate information to
                    every contestant must participate.
                  </li>
                  <li>
                    With Facebook, Google Account, or E-mail address
                    Registration can be done.
                  </li>
                  <li>
                    Can be played only once from a Facebook, Google account.
                  </li>
                  <li>
                    To win the game you must take part in all the step quizzes.
                  </li>
                  <li>
                    There are three quizzes in each step. There is a question
                    under one step.
                  </li>
                  <li>
                    The game must be completed within the time allotted for each
                    question.
                  </li>
                  <li>
                    By playing all the quizzes, the correct answers and results
                    will be known in the final stage.
                  </li>
                  <li>
                    The timing and procedure for awarding the prize will be
                    announced later.
                  </li>

                  <li>
                    The decision of the organizer on any matter related to the
                    competition will be considered final.
                  </li>
                  <li>
                    Democracy International, USAID, UKAID or anyone related to
                    their family will not be able to participate in this quiz
                    competition.
                  </li>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-closes"
                  data-bs-dismiss="modal"
                  onClick={(e) => handleModal(true)}
                >
                  Quiz start
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default QuizOne;