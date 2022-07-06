import React from "react";
import "./ContactArea.scss";
export default function ContactArea() {
  return (
    <>
      <h6>İletişim</h6>
      <h3 class="mb-5">Bilgilerimiz</h3>
      <div class="box mb-4">
        <div class="content">
          <h4 class="mb-3">Telefon</h4>
          <a href="/">
            <i class="fa-solid fa-phone"></i> 0 543 235 69 99
          </a>
        </div>
      </div>
      <div class="box mb-4">
        <div class="content">
          <h4 class="mb-3">Adres</h4>
          <p>
            Zeytinlik mah. Türkçü sok No:16 Ferah Palas Apt. A Blok D:11, 34140
            Bakırköy/İstanbul
          </p>
        </div>
      </div>
      <div class="box mb-5">
        <div class="content">
          <h4 class="mb-3">Sosyal Medya</h4>
          <ul class="d-flex align-items-center justify-content-start">
            <li>
              <a href="/">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
