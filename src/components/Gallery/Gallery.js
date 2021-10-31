import React from "react";
import "./Gallery.css";
const Gallery = () => {
  return (
    <div>
      <div>
        <section id="gallery" class="gallery">
          <div class="container">
            <div class="section-title" data-aos="fade-up">
              <h2>Gallery</h2>
              <p>Check our Rids Gallery</p>
            </div>

            <div class="row no-getters" data-aos="fade-left">
              <div class="col-lg-3 col-md-6">
                <div
                  class="gallery-item"
                >
                  <img
                    src={`https://image.shutterstock.com/image-photo/swing-carousel-park-children-260nw-279413759.jpg`}
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div
                  class="gallery-item"
                >
                  <img
                    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrKXqmgOL8H0bvKmrQNiJwy9vSMOpecmDd4w&usqp=CAU`}
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div
                  class="gallery-item"
                >
                  <img
                    src={`https://cdn.cdnparenting.com/articles/2018/06/425739265-H-1024x700.jpg`}
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div
                  class="gallery-item"
                >
                  <img
                    src={`https://www.bookmyballoons.in/wp-content/uploads/2018/09/0_500PCS-Packing-Party-Balloons-Shooting-Water-Bomb-Balls-Large-Size-Baloon-Outdoor-Birthday-Party-Decorations-Kids-1.jpg`}
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div
                  class="gallery-item"
                >
                  <img
                    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJB_cVVMCA9jHx-ZcKuIc3_QxktWTLwHnqrg&usqp=CAU`}
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div
                  class="gallery-item"
                >
                  <img
                    src={`https://littletikescommercial.com/wp-content/uploads/2020/09/Blog-fun-games-to-play-scaled.jpg`}
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div
                  class="gallery-item"
                >
                  <img
                    src={`https://cdn.cdnparenting.com/articles/2018/06/418806355-H-1024x700.jpg`}
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div
                  class="gallery-item"
                >
                  <img
                    src={`https://i.ytimg.com/vi/x_hbFvYGH1k/hqdefault.jpg`}
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;
