import React from "react";
import "./TopHeader.css";
export default function TopHeader() {
  return (
    <div className="top-line d-lg-block d-none">
      <div className="container">
        <div className="contact-area d-flex justify-content-between align-items-center">
          <ul className="contact d-flex align-items-center justify-content-start">
            <li className="nav-item">
              <a href="/#" className="nav-link">
                <i className="fa-solid fa-phone"></i>466 66 00
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                <i className="fa-solid fa-envelope"></i>
                info@smiledesignhouse.com
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <ul className="social-media d-flex">
              <li className="nav-item">
                <a href="/#" className="nav-link">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                TR
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="/#">
                    EN
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    DE
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
