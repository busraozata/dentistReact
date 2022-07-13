import React from "react";
import HeadTitle from "../../../Common/HeadTitle/HeadTitle";
import AboutSidebar from "../../../Layouts/AboutSidebar/AboutSidebar";
import HomeDoctor from "../../Home/HomeDoctor/HomeDoctor";
import FormArea from "./Form/FormArea";
import "./HumanResources.scss";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
let componentMounted = true;

export default function HumanResources() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3000/HumanResources");

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
      <HeadTitle />
      <section className="human-resources">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <AboutSidebar />
            </div>
            <div className="col-lg-9">
              <div className="content">
                <h2>{data.title}</h2>
                <p>{data.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="appoinment d-flex align-items-center justify-content-center"
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
              <div className="title">
                <h6>Bize</h6>
                <h3>Başvurun</h3>
              </div>
              <FormArea />
            </div>
            <div className="col-lg-6 ">
              <div className="img-wrapper">
                <img
                  src="./images/woman-patient-dentist.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomeDoctor />
    </>
  );
}
