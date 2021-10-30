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
              <p>Check our Book Gallery</p>
            </div>

            <div class="row no-getters" data-aos="fade-left">
              <div class="col-lg-3 col-md-6">
                <div
                  class="gallery-item"
                >
                  <img
                    src={`https://image.shutterstock.com/image-illustration/quran-books-open-islamic-religion-260nw-1938397261.jpg`}
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
                    src={`https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
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
                    src={`https://media.istockphoto.com/photos/many-hardbound-books-background-selective-focus-picture-id1209683444?k=20&m=1209683444&s=612x612&w=0&h=apRHyEOnUCQ7gXkIChHTyixwezHZ4Bm6tDyr7zwu32Y=`}
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
                    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB2eKLB44_Y3YynInNzyo94AXoB2mvBjazCg&usqp=CAU`}
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
                    src={`https://media.istockphoto.com/photos/small-heart-and-books-picture-id1254825698?b=1&k=20&m=1254825698&s=170667a&w=0&h=8baPqEfIKNwmyRefowMyrFKAhpG5trM-BR_TZTF3a1c=`}
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
                    src={`https://image.shutterstock.com/image-photo/many-old-books-book-shop-260nw-269516258.jpg`}
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
                    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl1wA45y-8-4hT4UX_2U4dNqpL1mL_ZASqlvu-5DASkNkLLjqyVbly0-1J0lLYJd-nTaA&usqp=CAU`}
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
                    src={`https://media.istockphoto.com/photos/books-picture-id949118068?k=20&m=949118068&s=612x612&w=0&h=e8tiaCdluEA9IS_I7ytStcx--toLbovf3U74v-LfNAk=`}
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
