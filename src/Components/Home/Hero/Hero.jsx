import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "./Hero.scss";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
let componentMounted = true;

export default function Hero() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3000/bannerSlider");

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
    <section className="banner d-flex align-items-center justify-content-center">
      <Swiper
        className="mySwiper"
        modules={[Autoplay, EffectFade]}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {data.map((slide) => {
          return (
            <SwiperSlide
              key={slide.id}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="content">
                      <div className="text">
                        <h6>{slide.subTitle}</h6>
                        <h1>{slide.title}</h1>
                        <p>{slide.description}</p>
                        <div className="button-area">
                          <Link to={slide.linkAddress} className="button">
                            {slide.linkName}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
