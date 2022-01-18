import f1 from "../assets/images/usaid.png";
import f2 from "../assets/images/democracy.png";
import f3 from "../assets/images/ukaid.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section id="footer-1">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-4 col-lg-3 text-center">
              <img src={f1} className="img-fluid" alt="" />
            </div>
            <div className="col-4 col-lg-3 text-center">
              <img src={f2} className="img-fluid" alt="" />
            </div>
            <div className="col-3 col-lg-3 text-center">
              <img src={f3} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="footer-2" style={{ fontSize: "12px" }}>
        <div className="container">
          <div>
            {" "}
            <p
              style={{
                lineHeight: "1.6",
                marginBottom: "20px",
                marginTop: "30px",
              }}
            >
              This website is made possible by the support of the American
              People through the United States Agency for International
              Development (USAID). The contents of this website are the sole
              responsibility of Democracy International and do not necessarily
              reflect the views of USAID or the United States Government.
            </p>
            <p
              style={{
                lineHeight: "1.6",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              The UK provides support to Democracy International in Bangladesh,
              but the views expressed and information contained in this website
              are not necessarily those of or endorsed by the UK Government,
              which can accept no responsibility.
            </p>
          </div>
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <p>© 2021 Democracy International. All rights reserved.</p>
            </div>
            <div
              className="col-lg-6 d-flex"
              style={{ justifyContent: "flex-end" }}
            >
              <div className="icon-div">
                <a
                  href="https://www.facebook.com/karonbangladeshamar"
                  style={{ color: "inherit" }}
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCQ-Teu4PihByX_jU9FTVulQ"
                  style={{ color: "inherit" }}
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div className="d-flex">
                <div class="alignright">
                  <a href="https://karonbangladeshamar.com/en/category/about-us/">
                    About Us
                  </a>{" "}
                  |{" "}
                  <a href="https://karonbangladeshamar.com/en/contact/">
                    Contact
                  </a>{" "}
                  | <Link to="/login">Login</Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
