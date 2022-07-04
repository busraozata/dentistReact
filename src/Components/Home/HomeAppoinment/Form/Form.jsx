import React from "react";
import "./Form.scss";
export default function Form() {
  return (
    <div className="form">
      <form>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="İsim Soyisim"
              />
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div>
              <input type="text" className="form-control" placeholder="Telefon" />
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Soru Başlığı"
              />
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div>
              <input type="email" className="form-control" placeholder="E - Mail" />
            </div>
          </div>
          <div className="col-lg-12 mb-4">
            <textarea
              className="form-control"
              placeholder="Mesaj Yazın"
              rows="5"
            ></textarea>
          </div>
          <div className="col-lg-12">
            <button type="submit" >
              GÖNDER
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
