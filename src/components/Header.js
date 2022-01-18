import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../store/actions/authAction";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.loggedIn);
  console.log(sidebar);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    setSidebar(true);
  };
  const handleClickToggle = (e) => {
    setSidebar(false);
  };

  const handelLogout = async () => {
    await dispatch(setLogout());
    handleClickToggle();
    window.location.replace("https://quizen.karonbangladeshamar.com/");
  };

  return (
    <>
      <header className="d-none d-lg-block">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-3">
              <a href="https://karonbangladeshamar.com/en/">
                <img src={logo} className="img-fluid" alt="" />
              </a>
            </div>
            <div className="col-lg-9">
              <div className="header-top-div">
                <div className="lang-social-wrap">
                  <ul className="social-icons">
                    <li>
                      <a
                        href="https://www.facebook.com/karonbangladeshamar"
                        className="icon facebook"
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.youtube.com/channel/UCQ-Teu4PihByX_jU9FTVulQ"
                        className="icon youtube"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>

                    {/* <li>
                      <a href="#" className="icon twitter">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="icon instagram">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li> */}
                  </ul>

                  {/* <ul className="languages">
                    <li style={{ marginRight: "15px" }}>
                      <a
                        href="https://karonbangladeshamar.com/en/"
                        className="language active"
                      >
                        <img
                          width="25"
                          src="https://karonbangladeshamar.com/en/wp-content/uploads/2021/04/Flag-United-Kingdom.jpg"
                          className="flag"
                        />{" "}
                        <span>English</span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://karonbangladeshamar.com/bn/"
                        className="language"
                      >
                        <img
                          width="25"
                          src="https://karonbangladeshamar.com/en/wp-content/uploads/2021/04/203-bangladesh_400px.jpg"
                          className="flag"
                        />{" "}
                        <span>বাংলা</span>
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-end">
                <div className="search-div flex-1 d-flex ">
                  <input
                    type="text"
                    className="search-input-box border-0 form-control mx-1 my-1 w-100 "
                    placeholder="Search"
                  />
                  <button className="border-0 bg-transparent px-3 text-white">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
                <div className="buttons-div flex-1 align-items-center">
                  <a
                    className="btn"
                    href="https://karonbangladeshamar.com/en/category/about-us/"
                  >
                    About Us
                  </a>

                  <a
                    className="btn"
                    href="https://karonbangladeshamar.com/en/contact/"
                  >
                    Contact
                  </a>

                  {isAuthenticated ? (
                    <button
                      onClick={(e) => dispatch(setLogout())}
                      className="btn"
                    >
                      Logout
                    </button>
                  ) : (
                    <Link to="/login" className="btn">
                      Login
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navbar */}
      <section id="main-nav" className="d-none d-lg-block m-0">
        <nav className="nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Positive Political Stories
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="https://karonbangladeshamar.com/en/category/positive-political-stories/articles/"
                >
                  Articles
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://karonbangladeshamar.com/en/category/positive-political-stories/pictures/"
                >
                  Pictures
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://karonbangladeshamar.com/en/category/positive-political-stories/video/"
                >
                  Video
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              href="https://karonbangladeshamar.com/en/category/lets-talk/"
            >
              Let’s Talk
            </a>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Easy Read
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="https://karonbangladeshamar.com/en/category/easy-read/animation/"
                >
                  Animation
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://karonbangladeshamar.com/en/category/easy-read/infographic/"
                >
                  Infographic
                </a>
              </li>

              <li>
                <a
                  className="dropdown-item"
                  href="http://web.politicsmatters.com.bd"
                >
                  E-Learning
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Quiz
            </NavLink>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Campaign
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="https://karonbangladeshamar.com/en/democracy-festival/"
                >
                  Democracy Festival
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://karonbangladeshamar.com/en/category/campaign/harmony-festival/"
                >
                  Harmony Festival
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.facebook.com/NarirJoyeShobarJoy"
                >
                  Narir Joye Shobar Joy
                </a>
              </li>
            </ul>
          </li>
        </nav>
      </section>

      {/* Mobile version */}
      <section className="py-2 d-lg-none">
        <div className="container">
          <div className="col-12 text-center">
            <div
              onClick={handleClick}
              style={{ position: "relative", top: "40px" }}
            >
              <i
                className="fas fa-bars"
                style={{ position: "absolute", left: "0", fontSize: "25px" }}
              ></i>
            </div>
            <img src={logo} alt="" />
          </div>
        </div>
      </section>

      <section className={sidebar ? "mobile-menu" : "d-none"}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-left">
              <button className="mb-3" onClick={handleClickToggle}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="col-12">
              <div className="form-box">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
                <i className="fas fa-search"></i>
              </div>
            </div>
            <div className="col-12 text-center my-3">
              <div className="icon-div">
                <i
                  className="fab fa-facebook-f"
                  style={{ marginRight: "10px" }}
                ></i>
                <i className="fab fa-youtube"></i>
              </div>
            </div>
            <li className="nav-item dropdown">
              <a
                className=" dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                Positive Political Stories
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="https://karonbangladeshamar.com/en/category/positive-political-stories/articles/"
                  >
                    Articles
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://karonbangladeshamar.com/en/category/positive-political-stories/pictures/"
                  >
                    Pictures
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://karonbangladeshamar.com/en/category/positive-political-stories/video/"
                  >
                    Video
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className=""
                href="https://karonbangladeshamar.com/en/category/lets-talk/"
              >
                Let’s Talk
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className=" dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                Easy Read
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="https://karonbangladeshamar.com/en/category/easy-read/animation/"
                  >
                    Animation
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://karonbangladeshamar.com/en/category/easy-read/infographic/"
                  >
                    Infographic
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="http://web.politicsmatters.com.bd"
                  >
                    E-Learning
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="" to="/">
                Quiz
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <a
                className=" dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                Campaign
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="https://karonbangladeshamar.com/en/democracy-festival/"
                  >
                    Democracy Festival
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://karonbangladeshamar.com/en/category/campaign/harmony-festival/"
                  >
                    Harmony Festival
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://www.facebook.com/NarirJoyeShobarJoy"
                  >
                    Narir Joye Shobar Joy
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className=""
                href="https://karonbangladeshamar.com/en/category/about-us/"
              >
                About Us
              </a>
            </li>

            <li className="nav-item">
              <a
                className=""
                href="https://karonbangladeshamar.com/en/contact/"
              >
                Contact
              </a>
            </li>

            <li className="nav-item">
              {isAuthenticated ? (
                <button
                  onClick={(e) => handelLogout()}
                  className="btn p-0"
                  style={{ color: "#ccc" }}
                >
                 Logout
                </button>
              ) : (
                <NavLink to="/login" className="">
                  Login
                </NavLink>
              )}
            </li>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
