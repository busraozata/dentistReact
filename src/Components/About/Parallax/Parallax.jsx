import React from "react";
import { Link } from "react-router-dom";

export default function Parallax() {
  return (
    <section
      className="parallax d-flex justify-content-center"
      style={{
        backgroundImage: `url(${`./images/full-equiped-medical-cabinet.jpg`})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mb-2">
            <Link to="/contact">
              <i className="fa-solid fa-circle-info"></i> Bize Sorun
            </Link>
          </div>
          <div className="col-lg-3 mb-2">
            <Link to="/appoinment">
              <i className="fa-solid fa-calendar-check"></i>Randevu Al
            </Link>
          </div>
          <div className="col-lg-3 mb-2">
            <Link to="/services" className="button">
              <i className="fa-solid fa-tooth"></i>Tedavilerimiz
            </Link>
          </div>
          <div className="col-lg-3 mb-2">
            <Link to="/before-after">
              <i className="fa-solid fa-face-grin-beam"></i> Öncesi & Sonrası
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
