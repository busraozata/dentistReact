import React from "react";
import HeadTitle from "../../../Common/HeadTitle/HeadTitle";
import AboutSidebar from "../../../Layouts/AboutSidebar/AboutSidebar";
import "./Polyclinic.scss";
import { useEffect } from "react";
import PolyclinicCard from "./PolyclinicCard";
import axios from "axios";
import { useState } from "react";
import HomeDoctor from "../../Home/HomeDoctor/HomeDoctor";
import Parallax from "../Parallax/Parallax";
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
    window.scrollTo(0, 0);
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
                    return <PolyclinicCard images={value.image} key={id} />;
                  })}
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
