import React from "react";
import "./Authors.css";
const Authors = () => {
  return (
    <div>
      <section id="team" className="team">
        <div className="container">
          <div className="section-title">
            <h2>Up comming </h2>
            <p> Grate Enjoyable 3d game comming</p>
          </div>

          <div className="row" data-aos="fade-left">
            <div className="col-lg-3 col-md-6">
              <div className="member">
                <div className="pic">
                  <img
                    src={`https://i.all3dp.com/wp-content/uploads/2021/06/08145453/3d-design-video-games-Fortnite.jpg`}
                    className="img-fluid"
                    alt=""
                  />
                </div>

                <div className="member-info">
                  <h4> <span>Name</span> Space Park</h4>
                  <div className="social">
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="member">
                <div className="pic">
                  <img
                    src={`https://i.ytimg.com/vi/WQeM86ozraQ/maxresdefault.jpg`}
                    className="img-fluid"
                    alt=""
                  />
                </div>

                <div className="member-info">
                  <h4>Earth Rider</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="member">
                <div className="pic">
                  <img
                    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWcoi2wGIGfb03aRzthEtDlOLDMScTuEhXKQ&usqp=CAU`}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Freedom Fighter</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="member">
                <div className="pic">
                  <img
                    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFctrMQiBKYGsPjFSDNydwWUKlTo61wz_aJw&usqp=CAU`}
                    className="img-fluid"
                    alt=""
                  />
                </div>

                <div className="member-info">
                  <h4>Pirads of carabian</h4>
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
