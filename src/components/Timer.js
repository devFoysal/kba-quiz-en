import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuizStart, setQuizLevel } from "../store/actions/quizAction";

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
  9: "9d",
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

const secondsToTime = secs => {
  // let secs = Math.ceil(miliseconds / 1000);
  let hours = Math.floor(secs / (60 * 60));

  let divisor_for_minutes = secs % (60 * 60);
  let minutes = Math.floor(divisor_for_minutes / 60);

  let divisor_for_seconds = divisor_for_minutes % 60;
  let seconds = Math.ceil(divisor_for_seconds);

  let obj = {
    hour: hours,
    minutes: minutes,
    seconds: seconds,
    miliseconds: 0,
  };

  return obj;
};

const Timer = ({ timeLeft, setTimeLeft, setShowScore }) => {
  // initialize timeLeft with the seconds prop

  const { quizStart, quizLevel } = useSelector(state => state.quiz);
  const dispatch = useDispatch();

  const [time, setTime] = useState({
    hour: 0,
    minutes: 0,
    seconds: 0,
    miliseconds: 0,
  });

  useEffect(() => {
    // exit early when we reach 0
    if (timeLeft == 0) {
      dispatch(setQuizStart(false));
      if (quizLevel == 3) {
        setShowScore(true);
      }
      if (quizLevel == 1 || quizLevel == 2)
        dispatch(setQuizLevel(quizLevel + 1));
      return;
    }

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
      setTime(secondsToTime(timeLeft - 1));
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

  return (
    <div>
      <h5>
        Time Remaining: {replaceNumbers(toString(time.minutes))}ঃ
        {replaceNumbers(toString(time.seconds))} seconds
      </h5>
    </div>
  );
};

export default Timer;
