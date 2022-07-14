import React, { useEffect } from "react";
import HeadTitle from "../../Common/HeadTitle/HeadTitle";
import "./Contact.scss";
import ContactArea from "./ContactArea/ContactArea";
import FormArea from "./FormArea/FormArea";
import MapArea from "./Map/Map";
export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeadTitle
        title="İletişim"
        image="/images/interior-empty-modern-stomatology-orthodontic-hospital-bright-office.jpg"
      />
      <section className="contact-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="title">
                <h6>Bize</h6>
                <h3>Ulaşın</h3>
              </div>
              <FormArea />
            </div>
            <div className="col-lg-6 contact-info">
              <ContactArea />
            </div>
          </div>
        </div>
      </section>
      <MapArea />
    </>
  );
}
