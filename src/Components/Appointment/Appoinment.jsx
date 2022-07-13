import React, { useEffect } from "react";
import HeadTitle from "../../Common/HeadTitle/HeadTitle";
import ContactArea from "../Contact/ContactArea/ContactArea";
import HomeDoctor from "../Home/HomeDoctor/HomeDoctor";
import "./Appoinment.scss";
import FormArea from "./Form/FormArea";
export default function Appoinment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeadTitle />
      <section className="contact-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="title">
                <h6>Uzmana</h6>
                <h3>Danışın</h3>
              </div>
              <FormArea />
            </div>
            <div className="col-lg-6 contact-info">
              <ContactArea />
            </div>
          </div>
        </div>
      </section>
      <HomeDoctor />
    </>
  );
}
