import React from "react";
import "./About.scss";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import HeadTitle from "../../../Common/HeadTitle/HeadTitle";
import AboutSidebar from "../../../Layouts/AboutSidebar/AboutSidebar";
import HomeDoctor from "../../Home/HomeDoctor/HomeDoctor";
import { Link } from "react-router-dom";
let componentMounted = true;

export default function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3000/About");

      if (componentMounted) {
        setData(await response.data);
        console.log(response.data);
      }
      return () => {
        componentMounted = false;
      };
    };

    getData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeadTitle
        title="Hakkımızda"
        image="/images/interior-empty-modern-stomatology-orthodontic-hospital-bright-office.jpg"
      />
      <section className="about-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <AboutSidebar />
            </div>
            <div className="col-lg-9">
              <div className="content">
                <>
                  <h2>{data.aboutTitle}</h2>
                  <p>{data.desc}</p>
                  <h3>{data.missionTitle}</h3>
                  <p>{data.desc2}</p>
                </>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="parallax"
        style={{
          backgroundImage: `url(${`./images/full-equiped-medical-cabinet.jpg`})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="img-wrapper">
                <img
                  src="./images/woman-patient-dentist.jpg"
                  className="img-fluid"
                  alt="about"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content d-flex justify-content-between flex-column h-100">
                <div>
                  <h3>{data.subTitle}</h3>
                  <p>{data.subDescription}</p>
                </div>
                <div className="button-area">
                  <Link to="/appoinment" className="button">
                    Randevu Al
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomeDoctor />
    </>
  );
}
