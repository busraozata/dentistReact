import React from "react";
import "./Comment.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
let componentMounted = true;

export default function CommentArea() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3000/Comments");

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
    <Swiper
      className="mySwiper"
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {data.map((comment) => {
        return (
          <SwiperSlide key={comment.id}>
            <div className="comment-box h-100 w-100">
              <div className="icon-box">
                <i className="fa-solid fa-quote-left"></i>
              </div>
              <div className="d-flex flex-column justify-content-between h-100">
                <div>
                  <div className="d-flex align-items-start justify-content-start">
                    <img
                      src={comment.image}
                      className="img-fluid"
                      alt={comment.name}
                    />
                    <div className="mt-1 user-info">
                      <h4>{comment.name}</h4>
                      <span>{comment.title}</span>
                    </div>
                  </div>
                  <p>{comment.desc}</p>
                </div>
                {/*  <a href="/">
                  Devamını Oku <i className="fa-solid fa-chevron-right"></i>
                </a> */}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
