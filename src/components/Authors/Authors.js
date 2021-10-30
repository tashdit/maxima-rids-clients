import React from "react";
import "./Authors.css";
const Authors = () => {
  return (
    <div>
      <section id="team" className="team">
        <div className="container">
          <div className="section-title">
            <h2>Best Authors</h2>
            <p> Grate Authors in Bangladesh</p>
          </div>

          <div className="row" data-aos="fade-left">
            <div className="col-lg-3 col-md-6">
              <div className="member">
                <div className="pic">
                  <img
                    src={`https://m.media-amazon.com/images/M/MV5BNTM5YmQ5ZGYtMzRiMC00ZmVkLWIzMGItYjkwMTRkZWIyMTk1XkEyXkFqcGdeQXVyNDI3NjcxMDA@._V1_.jpg`}
                    className="img-fluid"
                    alt=""
                  />
                </div>

                <div className="member-info">
                  <h4>Humayon Ahmed</h4>
                  <span>Nobel</span>
                  <div className="social">
                    <a href="/">
                      <i className="icofont-twitter"></i>
                    </a>
                    <a href="/">
                      <i className="icofont-instagram"></i>
                    </a>
                    <a href="/">
                      <i className="icofont-facebook"></i>
                    </a>
                    <a href="/">
                      <i className="icofont-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="member">
                <div className="pic">
                  <img
                    src={`https://www.sust.edu/uploads/profile-images/1513593908.jpg`}
                    className="img-fluid"
                    alt=""
                  />
                </div>

                <div className="member-info">
                  <h4>Jafor Eqbal</h4>
                  <span>Scince</span>
                  <div className="social">
                    <a href="/">
                      <i className="icofont-twitter"></i>
                    </a>
                    <a href="/">
                      <i className="icofont-instagram"></i>
                    </a>
                    <a href="/">
                      <i className="icofont-facebook"></i>
                    </a>
                    <a href="/">
                      <i className="icofont-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="member">
                <div className="pic">
                  <img
                    src={`https://yt3.ggpht.com/ytc/AKedOLTBLMf4tq8iRjYjbmOPzLlQbD31_D2E4AOSmFPGzw=s900-c-k-c0x00ffffff-no-rj`}
                    className="img-fluid"
                    alt=""
                  />
                </div>

                <div className="member-info">
                  <h4>Jhonker Mahbub</h4>
                  <span>Programming</span>
                  <div className="social">
                    <a href="/">
                      <i className="icofont-twitter"></i>
                    </a>
                    <a href="/">
                      <i className="icofont-instagram"></i>
                    </a>
                    <a href="/">
                      <i className="icofont-facebook"></i>
                    </a>
                    <a href="/">
                      <i className="icofont-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="member">
                <div className="pic">
                  <img
                    src={`https://avatars.githubusercontent.com/u/23283009?v=4`}
                    className="img-fluid"
                    alt=""
                  />
                </div>

                <div className="member-info">
                  <h4>HM Nayeem</h4>
                  <span>Programming</span>
                  <div className="social">
                    <a href="/">
                      <i className="icofont-twitter"></i>
                    </a>
                    <a href="/">
                      <i className="icofont-instagram"></i>
                    </a>
                    <a href="/">
                      <i className="icofont-facebook"></i>
                    </a>
                    <a href="/">
                      <i className="icofont-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Authors;
