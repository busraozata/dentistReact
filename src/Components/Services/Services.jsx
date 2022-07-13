import React from "react";
import HeadTitle from "../../Common/HeadTitle/HeadTitle";
import "./Services.scss";
import { Link } from "react-router-dom";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
let componentMounted = true;
export default function Services() {
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
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeadTitle />
      <section className="services-page">
        <div className="container">
          <div className="row">
            <h6>Tedavi</h6>
            <h3>Yöntemlerimiz</h3>
            {data.map((item) => {
              return (
                <div className="col-xl-4 col-lg-6 col-md-6 mb-5" key={item.id}>
                  <div className="card">
                    <div className="top">
                      <Link to={`/service-detail/${item.id}`}>
                        <img
                          src={item.image2}
                          className="card-img-top"
                          alt={item.bigTitle}
                        />
                      </Link>
                      <div className="icon">
                        <Link to={`/service-detail/${item.id}`}>
                          <img src={item.icon} alt="" />
                        </Link>
                      </div>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between align-items-start">
                      <div>
                        <Link to={`/service-detail/${item.id}`}>
                          <h5 className="card-title">{item.bigTitle}</h5>
                        </Link>
                        <p className="card-text">
                          {item.shortDescription.substring(0, 180)}...
                        </p>
                      </div>
                      <div className="button-area">
                        <Link
                          to={`/service-detail/${item.id}`}
                          className="button"
                        >
                          Detaya Git <i className="fa-solid fa-angle-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
