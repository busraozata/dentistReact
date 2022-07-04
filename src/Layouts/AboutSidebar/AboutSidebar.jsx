import React from "react";
import "./AboutSidebar.scss";
import { Link } from "react-router-dom";

export default function AboutSidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/about" className="active">
            Hakkımızda
          </Link>
        </li>
        <li>
          <Link to="/">Neden Biz</Link>
        </li>
        <li>
          <Link to="/">Polikliniğimiz</Link>
        </li>
        <li>
          <Link to="/">İnsan Kaynakları</Link>
        </li>
        <li>
          <Link to="/">KVKK</Link>
        </li>
      </ul>
    </div>
  );
}
