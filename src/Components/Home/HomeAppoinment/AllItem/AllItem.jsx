import React from "react";
import Faq from "../Faq/Faq";
import FormArea from "../FormArea/FormArea";
import "./AllItem.scss";
export default function AllItem() {
  return (
    <section
      className="appoinment d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${`./images/parallax-3.jpg`})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      /* style="background-image: url(./img/parallax-3.jpg); background-size: cover; background-position: center; background-repeat: no-repeat;background-attachment: fixed;" */
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="title">
              <h6>Uzmana</h6>
              <h3>Danışın</h3>
            </div>
            <FormArea/>
          </div>
          <div className="col-lg-6 faq-area">
            <div className="title">
              <h6>Sık Sorulan</h6>
              <h3>Sorular</h3>
            </div>
            <Faq />
          </div>
        </div>
      </div>
    </section>
  );
}
