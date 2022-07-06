import React from "react";
import { Link } from "react-router-dom";
export default function DoctorBox(props) {
  return (
    <div className="card">
      <div className="top">
        <Link to={`/doctor-detail/${props.id}`}>
          <img src={props.image} className="card-img-top" alt={props.name} />
        </Link>
        <Link to={`/doctor-detail/${props.id}`}>
          <div className="overlay">
            <i className="fa-solid fa-link"></i>
          </div>
        </Link>
      </div>
      <div className="card-body d-flex justify-content-between align-items-center">
        <div className="user-info">
          <Link to={`/doctor-detail/${props.id}`}>
            <h5 className="card-title">{props.name}</h5>
          </Link>
          <span>{props.title}</span>
        </div>
        <Link to={`/doctor-detail/${props.id}`} className="button">
          <i className="fa-solid fa-chevron-right"></i>
        </Link>
      </div>
    </div>
  );
}
