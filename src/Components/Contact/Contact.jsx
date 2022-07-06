import React from "react";
import HeadTitle from "../../Common/HeadTitle/HeadTitle";
import "./Contact.scss";
import ContactArea from "./ContactArea/ContactArea";
export default function Contact() {
  return (
    <>
      <HeadTitle />
      <section class="contact-page">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="title">
                <h6>Bize</h6>
                <h3>Ulaşın</h3>
              </div>
              <div class="form">
                <form>
                  <div class="row">
                    <div class="col-lg-6 mb-3">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="İsim Soyisim"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 mb-3">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="E - Mail"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 mb-3">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Telefon"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 mb-3">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Konu"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 mb-3">
                      <div class="form-group">
                        <textarea
                          class="form-control"
                          placeholder="Mesaj Yazın"
                          rows="8"
                        ></textarea>
                      </div>
                    </div>
                    <div class="button-area">
                      <button type="submit" class="button">
                        Gönder
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-6 contact-info">
              <ContactArea />
            </div>
          </div>
        </div>
      </section>
      <section class="map">
        <iframe
          title="Wucize"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.0864253127293!2d28.870207015661308!3d40.97958832913813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabd671f7391b7%3A0x9f90d1a19c5df6d2!2zV3VjaXplIHwgV2ViIFRhc2FyxLFtICwgw5xyw7xuIEZvdG_En3JhZiDDh2VraW1pLCBUYW7EsXTEsW0gRmlsbWk!5e0!3m2!1str!2str!4v1654152514006!5m2!1str!2str"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />
      </section>
    </>
  );
}