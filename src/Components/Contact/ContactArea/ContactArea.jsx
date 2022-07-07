import React from "react";
import "./ContactArea.scss";
export default function ContactArea() {
  return (
    <>
      <h6>İletişim</h6>
      <h3 className="mb-5">Bilgilerimiz</h3>
      <div className="box mb-4">
        <div className="content">
          <h4 className="mb-3">Telefon</h4>
          <a href="/">
            <i className="fa-solid fa-phone"></i> 0 543 235 69 99
          </a>
        </div>
      </div>
      <div className="box mb-4">
        <div className="content">
          <h4 className="mb-3">Adres</h4>
          <p>
            Zeytinlik mah. Türkçü sok No:16 Ferah Palas Apt. A Blok D:11, 34140
            Bakırköy/İstanbul
          </p>
        </div>
      </div>
      <div className="box mb-5">
        <div className="content">
          <h4 className="mb-3">Sosyal Medya</h4>
          <ul className="d-flex align-items-center justify-content-start">
            <li>
              <a href="/">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
