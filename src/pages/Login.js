import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { setLogin } from "../store/actions/authAction";
import { useSelector, useDispatch } from "react-redux";
import Google from "../components/social/Google";
import Facebook from "../components/social/Facebook";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, errors, regMsg } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (loading) return;
    if (password.length <= 5) {
      alert("Password must be 6 characters or higher");
      return;
    } else if (email == "") {
      alert("Please Write Email Address");
      return;
    }
    dispatch(setLogin(email, password));
  };

  useEffect(() => {
    return () => {
      dispatch({ type: "RESET_ERROR_LOGIN_DATA" });
    };
  }, []);

  return (
    <>
      <Header />
      <div className="login-app">
        <div className="container">
          <div class="row justify-content-center">
            <div className="col-lg-6">
              {errors.message && (
                <span className="alert alert-danger">{errors.message}</span>
              )}

              {regMsg && regMsg.length > 0 && (
                <span className="alert alert-success">{regMsg}</span>
              )}
              <div class="form-group mt-4">
                <label for="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div class="d-flex justify-content-between ">
                <button
                  onClick={e => handleLogin()}
                  type="submit"
                  class="btn btn-primary mt-2"
                >
                  {loading ? "Please wait..." : "Login"}
                </button>
                <a href="#">Forgot password ?</a>
              </div>
              <div class="d-flex justify-content-between mt-3">
                <Google operation="Login" />
                <Facebook operation="Login" />
              </div>

              <Link to="/register">
                <button
                  style={{ width: "100%" }}
                  className="btn btn-success btn-block mt-3"
                >
                  New registration
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
