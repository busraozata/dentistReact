import React from "react";
import HeadTitle from "../../Common/HeadTitle/HeadTitle";
import AboutSidebar from "../../Layouts/AboutSidebar/AboutSidebar";
import HomeDoctor from "../Home/HomeDoctor/HomeDoctor";
import "./About.scss";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
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
  }, []);

  return (
    <>
      <HeadTitle />
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
          backgroundImage: `url(${data.background})`,
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
                  src={data.image}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content d-flex justify-content-between flex-column h-100">
                <div>
                  <h3>
                    {data.subTitle}
                  </h3>
                  <p>
                    {data.desc3}
                  </p>
                </div>
                <div className="button-area">
                  <a href="appoinment.html" className="button">
                    Randevu Al
                  </a>
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
