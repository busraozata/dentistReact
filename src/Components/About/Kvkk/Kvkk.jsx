import React from "react";
import AboutSidebar from "../../../Layouts/AboutSidebar/AboutSidebar";
import "./Kvkk.scss";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import HeadTitle from "../../../Common/HeadTitle/HeadTitle";
let componentMounted = true;
export default function Kvkk() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3000/Kvkk");

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
        title="KVKK"
        image="/images/interior-empty-modern-stomatology-orthodontic-hospital-bright-office.jpg"
      />
      <section className="kvkk">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <AboutSidebar />
            </div>
            <div className="col-lg-9">
              <div className="content">
                <h2>{data.title}</h2>
                <p>{data.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
