import React from "react";
import "./AboutSidebar.scss";
import { Link } from "react-router-dom";

export default function AboutSidebar(props) {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/about" className="active">
            Hakkımızda
          </Link>
        </li>
        <li>
          <Link to="/why-us">Neden Biz</Link>
        </li>
        <li>
          <Link to="/polyclinic">Polikliniğimiz</Link>
        </li>
        <li>
          <Link to="/human-resources">İnsan Kaynakları</Link>
        </li>
        <li>
          <Link to="/kvkk">KVKK</Link>
        </li>
      </ul>
    </div>
  );
}
