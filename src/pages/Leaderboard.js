import React, { useState, useEffect } from "react";
import Layout from "../components/LayoutNotCarousel";
import axios from "axios";

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
const Leaderboard = () => {
  const [leaderboards, setLeaderboards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("leaderboard")
      .then(response => {
        console.log(response);

        if (response.data) {
          setLeaderboards(response.data.result);
          setLoading(false);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <div className="quiz-app">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Leaderboard</h2>
              {!loading ? (
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Right answer</th>
                      <th scope="col">It took time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboards.map((board, i) => (
                      <tr>
                        <th scope="row">
                          {replaceNumbers((i + 1).toString())}
                        </th>
                        <td>{board.participant}</td>
                        <td>
                          {replaceNumbers(board.correctAnswer.toString())}
                        </td>
                        <td>
                          {replaceNumbers((board.time / 1000).toString())}{" "}
                          seconds
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <h3>Please wait......</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Leaderboard;
