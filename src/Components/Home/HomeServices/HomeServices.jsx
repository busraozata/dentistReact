import React from "react";
import "./HomeServices.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
let componentMounted = true;
export default function HomeServices() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3000/Services");

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
    <section className="services">
      <div className="container-fluid">
        <div className="services-area">
          <Swiper
            className="swiper"
            modules={[Autoplay]}
            effect={"fade"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            
          >
            {data.map((slide) => {
              return (
                <SwiperSlide key={slide.id}>
                  <div className="row w-100">
                    <div className="col-lg-6 p-0">
                      <picture>
                        <img
                          src={slide.image}
                          className="img-fluid"
                          alt={slide.title}
                        />
                      </picture>
                    </div>
                    <div className="col-lg-6 service-content d-flex flex-column align-items-start justify-content-start">
                      <h6>{slide.serviceTitle}</h6>
                      <h4 className="d-flex align-items-center">
                        <strong>{slide.bigTitle}</strong>
                        <span className="d-lg-block d-none">
                          {slide.subTitle}
                        </span>
                      </h4>
                      <p>{slide.shortDescription}</p>
                      <div className="d-lg-flex align-items-center justify-content-start">
                        <div className="expert d-flex align-items-center justify-content-between">
                          <div className="cicon-area">
                            <i className="fa-solid fa-user-doctor"></i>
                          </div>
                          <div className="expert-detail">
                            <h5>{slide.doctorTitle}</h5>
                            <span>{slide.doctorSize}</span>
                          </div>
                        </div>
                        <div className="time d-flex align-items-center">
                          <i className="fa-solid fa-clock-rotate-left"></i>
                          <div className="time-detail">
                            <h5>{slide.days}</h5>
                            <span>{slide.time}</span>
                          </div>
                        </div>
                      </div>
                      <div className="button-area">
                        <Link to={`/service-detail/${slide.id}`} className="button">
                          Randevu Al
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
