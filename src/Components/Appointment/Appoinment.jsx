import React from "react";
import HeadTitle from "../../Common/HeadTitle/HeadTitle";
import ContactArea from "../Contact/ContactArea/ContactArea";
import HomeDoctor from "../Home/HomeDoctor/HomeDoctor";
import "./Appoinment.scss";
export default function Appoinment() {
  return (
    <>
      <HeadTitle />
      <section class="contact-page">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="title">
                <h6>Uzmana</h6>
                <h3>Danışın</h3>
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
                      <div class="form-check-group h-100 d-flex justify-content-start align-items-center">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Kadın
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault2"
                          >
                            Erkek
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6 mb-3">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Tarih"
                          id="datetimepicker2"
                          required
                        />
                      </div>
                      <span>Randevu İstediğiniz Tarihi Seçebilirsiniz</span>
                    </div>

                    <div class="col-lg-6 mb-3">
                      <div class="form-group">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          required
                        >
                          <option selected hidden>
                            Bölüm Seçiniz
                          </option>
                          <option value="Genel Diş Hekimliği">
                            Genel Diş Hekimliği
                          </option>
                          <option value="Kozmetik diş hekimliği">
                            Kozmetik diş hekimliği
                          </option>
                          <option value="Diş implantları">
                            Diş implantları
                          </option>
                          <option value="Genel Diş Hekimliği">
                            Genel Diş Hekimliği
                          </option>
                          <option value="Kozmetik diş hekimliği">
                            Kozmetik diş hekimliği
                          </option>
                          <option value="Diş implantları">
                            Diş implantları
                          </option>
                          <option value="Genel Diş Hekimliği">
                            Genel Diş Hekimliği
                          </option>
                          <option value="Kozmetik diş hekimliği">
                            Kozmetik diş hekimliği
                          </option>
                          <option value="Diş implantları">
                            Diş implantları
                          </option>
                        </select>
                        <span>Hangi Bölüme Randevu Talep Ediyorsunuz?</span>
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
                      <span>
                        Doktorunuza eklemek istediğiniz bir ayrıntı var ise
                        lütfen belirtiniz.
                      </span>
                    </div>
                  </div>

                  <div class="button-area">
                    <button type="submit" class="button">
                      Randevu Al
                    </button>
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
      <HomeDoctor />
    </>
  );
}
