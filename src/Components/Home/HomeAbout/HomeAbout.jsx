import React from "react";
import AboutBox from "../../About/AboutBox/AboutBox";
import "./HomeAbout.scss";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
let componentMounted = true;
export default function HomeAbout() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3000/AboutBox");

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
    <section className="about-us">
      <div className="container">
        <div className="row">
          <h6>Uzmanlığımız</h6>
          <h3>Sizin İçin Varız</h3>
          {data.map((value, index) => {
            return (
              <div className="col-lg-3 col-md-6" key={index}>
                <AboutBox {...value} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
