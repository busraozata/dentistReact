import React from "react";
import "./HeadTitle.scss";
import { useLocation, Link } from "react-router-dom";

export default function HeadTitle() {
  const location = useLocation();
  return (
    <section
      style={{
        backgroundImage: `url(${`/images/interior-empty-modern-stomatology-orthodontic-hospital-bright-office.jpg`})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="sub-banner d-flex align-items-center justify-content-center"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>{location.pathname.replace("-", " ").split("/")[1]}</h1>
            <div className="d-flex align-items-center justify-content-start">
              <Link to="/">Ana Sayfa</Link>
              <i className="fa-solid fa-chevron-right"></i>
              <Link to="/about">{location.pathname.replace("-"," ").split("/")[1]}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
