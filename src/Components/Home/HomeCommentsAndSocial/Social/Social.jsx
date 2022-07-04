import React from "react";
import "./Social.scss";
export default function Social() {
  return (
    <ul className="d-flex social-media">
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
          <i className="fa-brands fa-twitter"></i>
        </a>
      </li>
      <li>
        <a href="/">
          <i className="fa-brands fa-youtube"></i>
        </a>
      </li>
      <li>
        <a href="/">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </li>
    </ul>
  );
}
