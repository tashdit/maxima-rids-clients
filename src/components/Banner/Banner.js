import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="container text-center text-md-left" data-aos="fade-up">
          <h1>Welcome to Maxim Books Park</h1>
          <h2>
            We are team of talented designers making websites with Bootstrap
          </h2>
          <a href="#about" class="btn-get-started scrollto">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default Banner;
