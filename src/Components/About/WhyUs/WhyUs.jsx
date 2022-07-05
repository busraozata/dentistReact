import React from "react";
import HeadTitle from "../../../Common/HeadTitle/HeadTitle";
import AboutSidebar from "../../../Layouts/AboutSidebar/AboutSidebar";
import "./WhyUs.scss";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import AboutBox from "../AboutBox/AboutBox";
import HomeDoctor from "../../Home/HomeDoctor/HomeDoctor";
let componentMounted = true;
export default function WhyUs() {
  const [data, setData] = useState([]);
  const [Aboutdata, setAboutData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3000/WhyUs");
      /* ------------------------------------------------------------------ */
      const responseAbout = await axios.get("http://localhost:3000/AboutBox");
      if (componentMounted) {
        setData(await response.data);
        console.log(response.data);
        /* ------------------------------------------------------------------ */
        setAboutData(await responseAbout.data);
        console.log(responseAbout.data);
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
      <section class="why-us">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <AboutSidebar />
            </div>
            <div class="col-lg-9">
              <div class="content">
                <h3>{data.title} </h3>
                <div class="row">
                  {Aboutdata.map((value, index) => {
                    return (
                      <div className="col-lg-6 col-md-6" key={index}>
                        <AboutBox {...value} />
                      </div>
                    );
                  })}
                  <p>{data.desc}</p>
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
              <a href="services.html" class="button">
                <i class="fa-solid fa-tooth"></i>Tedavilerimiz
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
