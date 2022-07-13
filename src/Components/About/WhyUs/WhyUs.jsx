import React from "react";
import HeadTitle from "../../../Common/HeadTitle/HeadTitle";
import AboutSidebar from "../../../Layouts/AboutSidebar/AboutSidebar";
import "./WhyUs.scss";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import AboutBox from "../AboutBox/AboutBox";
import HomeDoctor from "../../Home/HomeDoctor/HomeDoctor";
import Parallax from "../Parallax/Parallax";
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
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeadTitle />
      <section className="why-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <AboutSidebar />
            </div>
            <div className="col-lg-9">
              <div className="content">
                <h3>{data.title} </h3>
                <div className="row">
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
      <Parallax />
      <HomeDoctor />
    </>
  );
}
