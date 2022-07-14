import React from "react";
import "./BeforeAfterHome.scss";
import { ComparisonSlider } from "react-comparison-slider";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
let componentMounted = true;
export default function BeforeAfterHome() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3000/BeforeAfter");

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
    <section className="before-after">
      <div className="container">
        <div className="row">
          <div className="title d-lg-flex justify-content-between align-items-center">
            <div>
              <h6>Öncesi - Sonrası </h6>
              <h3>Gülüşünüzde Fark Yaratın</h3>
            </div>
            <div className="button-area">
              <Link to="/before-after" className="button">
                Devamını Gör
              </Link>
            </div>
          </div>

          {data.map((item, index) => {
            return (
              index < 2 && (
                <div className="col-lg-6 col-md-6 mb-3" key={index}>
                  <ComparisonSlider
                    defaultValue={50} //Çizginin ortada olmasını sağlıyor
                    itemOne={
                      <div
                        style={{
                          backgroundImage: `url(${item.beforeImage})`,
                          backgroundPosition: "center",
                          backgroundSize: "100%100%",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                    }
                    itemTwo={
                      <div
                        style={{
                          backgroundImage: `url(${item.afterImage})`,
                          backgroundPosition: "center",
                          backgroundSize: "100%100%",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                    }
                    aspectRatio={16 / 9}
                    orientation="horizontal"
                  />
                </div>
              )
            );
          })}
        </div>
      </div>
    </section>
  );
}
