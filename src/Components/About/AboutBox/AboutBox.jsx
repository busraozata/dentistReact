import React from "react";
export default function AboutBox(props) {
  return (
    <>
      <div className="box">
        <div className="icon-box">
          <img src={props.image} className="img-fluid" alt={props.title} />
        </div>
        <div className="content">
          <h3>{props.title}</h3>
          <p>{props.shortDesc}</p>
        </div>
      </div>
    </>
  );
}
