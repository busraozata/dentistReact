import React from "react";
import "./LastPost.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
let componentMounted = true;
export default function LastPosts() {
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
    <div className="last-posts">
      <h3 className="mb-3">Son Gönderiler</h3>
      <div className="content">
        <Swiper
          direction={"vertical"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {data.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Link
                  to={`/blog-detail/${item.id}`}
                  className="d-flex align-items-center"
                >
                  <img
                    className="card-img-top"
                    src={item.image2}
                    alt={item.title}
                  />
                  <span>{item.title}</span>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
