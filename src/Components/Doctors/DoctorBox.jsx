import React from "react";

export default function DoctorBox(props) {
  return (
    <div className="card">
      <div className="top">
        <a href="/#">
          <img src={props.image} className="card-img-top" alt={props.name} />
        </a>
        <a href="/#">
          <div className="overlay">
            <i className="fa-solid fa-link"></i>
          </div>
        </a>
      </div>
      <div className="card-body d-flex justify-content-between align-items-center">
        <div className="user-info">
          <a href="/#">
            <h5 className="card-title">{props.name}</h5>
          </a>
          <span>{props.title}</span>
        </div>
        <a href="/#" className="button">
          <i className="fa-solid fa-chevron-right"></i>
        </a>
      </div>
    </div>
  );
}
