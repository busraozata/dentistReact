import React from "react";
import DoctorBox from "../../Doctors/DoctorBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
// Import Swiper styles
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./HomeDoctor.scss";
let componentMounted = true;

export default function HomeDoctor() {
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
  }, []);
  return (
    <section className="doctors">
      <div className="container">
        <div className="row">
          <div className="title d-lg-flex justify-content-between align-items-center">
            <div>
              <h6>Doktorlarımız </h6>
              <h3>Tasarım Ekibimiz</h3>
            </div>
            <div className="button-area">
              <a href="doctors.html" className="button">
                Devamını Gör
              </a>
            </div>
          </div>
          <div className="col-lg-12">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Autoplay]}
              className="Swiper"
            >
              {data.map((value, index) => {
                return (
                  <SwiperSlide key={index}>
                    <DoctorBox {...value} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
