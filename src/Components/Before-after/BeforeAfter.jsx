import React from "react";
import ServiceSidebar from "../../Layouts/ServiceSidebar/ServiceSidebar";
import "./BeforeAfter.scss";
import { ComparisonSlider } from "react-comparison-slider";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import HeadTitle from "../../Common/HeadTitle/HeadTitle";
let componentMounted = true;
export default function BeforeAfter() {
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
    <>
      <HeadTitle />
      <section class="before-after-page">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <ServiceSidebar />
            </div>
            <div class="col-lg-9">
              <div class="content">
                <h3>Yeni Bir Başlangıç</h3>
                <div class="row">
                  {data.map((item, index) => {
                    return (
                      <div className="col-lg-6 col-md-6 mb-3" key={index}>
                        <ComparisonSlider
                          defaultValue={50}
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
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
