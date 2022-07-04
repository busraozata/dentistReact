import React from "react";
import HeadTitle from "../../../Common/HeadTitle/HeadTitle";
import AboutSidebar from "../../../Layouts/AboutSidebar/AboutSidebar";
import "./WhyUs.scss";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import AboutBox from "../AboutBox";
import HomeDoctor from "../../Home/HomeDoctor/HomeDoctor";
let componentMounted = true;
export default function WhyUs() {
  const [data, setData] = useState([]);
  const [aboutData, aboutsetData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3000/WhyUs");

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

  /*   useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3000/AboutBox");

      if (componentMounted) {
        aboutsetData(await response.aboutData);
        console.log(response.aboutData);
      }
      return () => {
        componentMounted = false;
      };
    };

    getData();
  }, []); */

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
                  {aboutData.map((value, index) => {
                    return (
                      <div className="col-lg-3 col-md-6" key={index}>
                        <AboutBox {...value} />
                      </div>
                    );
                  })}
                  <div class="col-md-6">
                    <div class="box">
                      <div class="icon-box">
                        <img
                          src="./images/icon/friend.png"
                          class="img-fluid"
                          alt=""
                        />
                      </div>
                      <div class="content">
                        <h3>Danışmanlık</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dolore ipsum autem aperiam corporis in optio ex
                          voluptates deleniti asperiores aliquam.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="box">
                      <div class="icon-box">
                        <img
                          src="./images/icon/medal.png"
                          class="img-fluid"
                          alt=""
                        />
                      </div>
                      <div class="content">
                        <h3>Prototip</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Mollitia dicta maxime architecto incidunt? Sit
                          ex unde iste corrupti, aliquam asperiores!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="box">
                      <div class="icon-box">
                        <img
                          src="./images/icon/tooth.png"
                          class="img-fluid"
                          alt=""
                        />
                      </div>
                      <div class="content">
                        <h3>Uygulama</h3>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Labore recusandae maxime provident ab dolorem!
                          Unde ex quas explicabo. Rerum, unde.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="box">
                      <div class="icon-box">
                        <img
                          src="./images/icon/smile.png"
                          class="img-fluid"
                          alt=""
                        />
                      </div>
                      <div class="content">
                        <h3>Mutlu Gülüşler</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Non minus quis eligendi iure architecto eum
                          labore porro maiores! Debitis, voluptas?
                        </p>
                      </div>
                    </div>
                  </div>
                  <p>{data.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="parallax d-flex justify-content-center"
        style={{
          backgroundImage: `url(${`./images/full-equiped-medical-cabinet.jpg`})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-3 mb-2">
              <a href="contact-us.html">
                <i class="fa-solid fa-circle-info"></i> Bize Sorun
              </a>
            </div>
            <div class="col-lg-3 mb-2">
              <a href="appoinment.html">
                <i class="fa-solid fa-calendar-check"></i>Randevu Al
              </a>
            </div>
            <div class="col-lg-3 mb-2">
              <a href="services.html" class="button">
                <i class="fa-solid fa-tooth"></i>Tedavilerimiz
              </a>
            </div>
            <div class="col-lg-3 mb-2">
              <a href="before-after.html">
                <i class="fa-solid fa-face-grin-beam"></i> Öncesi & Sonrası
              </a>
            </div>
          </div>
        </div>
      </section>
      <HomeDoctor />
    </>
  );
}
