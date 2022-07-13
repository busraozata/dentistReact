import React from "react";
import HeadTitle from "../HeadTitle/HeadTitle";
import { useLocation } from "react-router-dom";

export default function Page404() {
  const location = useLocation();

  return (
    <>
      <HeadTitle />
      <section
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "40vh", width: "100%" }}
      >
        <div className="container">
          <strong>{location.pathname.replace("-", " ").split("/")[1]}</strong>{" "}
          Bulunamadı
        </div>
      </section>
    </>
  );
}
