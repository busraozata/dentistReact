import React from "react";
import HeadTitle from "../../../Common/HeadTitle/HeadTitle";
import AboutSidebar from "../../../Layouts/AboutSidebar/AboutSidebar";
import "./Polyclinic.scss";
import { useEffect } from "react";
import PolyclinicCard from "./PolyclinicCard";
import axios from "axios";
import { useState } from "react";
import HomeDoctor from "../../Home/HomeDoctor/HomeDoctor";
let componentMounted = true;

export default function Polyclinic() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3000/Polyclinic");

      if (componentMounted) {
        setData(await response.data);
        console.log(response.data);
      }
      return () => {
        componentMounted = false;
      };
    };

    getData();
  }, []);
  return (
    <>
      <HeadTitle />
      <section className="polyclinic">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <AboutSidebar />
            </div>
            <div className="col-lg-9">
              <div className="content">
                <h3>Poliklinik</h3>
                <div className="row">
                  {data.map((value, id) => {
                    return (
                      <PolyclinicCard
                        images={value.image}
                        key={id}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="parallax d-flex justify-content-center"
        style={{
          backgroundImage: `url(${`./images/full-equiped-medical-cabinet.jpg`})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mb-2">
              <a href="contact-us.html">
                <i className="fa-solid fa-circle-info"></i> Bize Sorun
              </a>
            </div>
            <div className="col-lg-3 mb-2">
              <a href="appoinment.html">
                <i className="fa-solid fa-calendar-check"></i>Randevu Al
              </a>
            </div>
            <div className="col-lg-3 mb-2">
              <a href="services.html" className="button">
                <i className="fa-solid fa-tooth"></i>Tedavilerimiz
              </a>
            </div>
            <div className="col-lg-3 mb-2">
              <a href="before-after.html">
                <i className="fa-solid fa-face-grin-beam"></i> Öncesi & Sonrası
              </a>
            </div>
          </div>
        </div>
      </section>
      <HomeDoctor />
    </>
  );
}
