import React from "react";
import "./Doctors.scss";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import HeadTitle from "../../../Common/HeadTitle/HeadTitle";
import DoctorBox from "../DoctorBox/DoctorBox";

let componentMounted = true;

export default function Doctors() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3000/Doctors");

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
      <section className="doctors-page">
        <div className="container">
          <div className="row">
            <h6>Tasarım</h6>
            <h3>Ekibimiz</h3>
            {data.map((value, index) => {
              return (
                <div className="col-xl-4 col-lg-6 col-md-6 mb-5" key={index}>
                  <DoctorBox {...value} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
