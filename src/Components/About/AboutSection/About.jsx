import React from "react";
import "./About.scss";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import HeadTitle from "../../../Common/HeadTitle/HeadTitle";
import AboutSidebar from "../../../Layouts/AboutSidebar/AboutSidebar";
import HomeDoctor from "../../Home/HomeDoctor/HomeDoctor";
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
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content d-flex justify-content-between flex-column h-100">
                <div>
                  <h3>
                    Üst düzey hasta memnuniyeti ve kişiselleştirilmiş tedaviler
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit, rerum, commodi nemo maiores non earum velit suscipit
                    id quas ducimus maxime veritatis est? Ut, facere
                    exercitationem sapiente ducimus esse a voluptatem magnam.
                    Provident recusandae doloremque veniam aliquid incidunt
                    maiores. Tempore repellendus alias deserunt reiciendis error
                    minus facere pariatur, voluptate illum.
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
