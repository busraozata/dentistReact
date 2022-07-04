import React from "react";
import "./HomeBlog.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
let componentMounted = true;

export default function HomeBlog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3000/Blog");

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
    <section className="blog">
      <div className="container position-relative">
        <div className="title d-lg-flex justify-content-between align-items-center">
          <div>
            <h6>Blog</h6>
            <h3>Güncel Blog Yazılarımız</h3>
          </div>
          <div className="button-area">
            <a href="blog.html" className="button">
              Daha Fazlası
            </a>
          </div>
        </div>
        <div className="blog-area">
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
            {data.map((slide) => {
              return (
                <SwiperSlide key={slide.id}>
                  <div className="card">
                    <div className="img-wrapper">
                      <img
                        src={slide.image}
                        className="card-img-top"
                        alt={slide.title}
                      />
                    </div>

                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <h5 className="card-title">
                          <a href="blog-detail.html">{slide.title}</a>
                        </h5>
                        <p className="card-text">{slide.description}</p>
                      </div>
                      <div className="button-area">
                        <Link to="/#" className="button">
                          <span> Daha Fazlası </span>
                          <i className="fa-solid fa-chevron-right"></i>
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
