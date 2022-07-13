import React from "react";
import HeadTitle from "../../Common/HeadTitle/HeadTitle";
import "./Blog.scss";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
let componentMounted = true;

export default function Blog() {
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
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeadTitle />;
      <section className="blog-page">
        <div className="container">
          <div className="row">
            <h6>Güncel</h6>
            <h3>Haberler</h3>
            {data.map((item) => {
              return (
                <div className="col-xl-4 col-lg-6 col-md-6 mb-5" key={item.id}>
                  <div className="card">
                    <div className="top">
                      <Link to={`/blog-detail/${item.id}`}>
                        <img
                          src={item.image2}
                          className="card-img-top"
                          alt={item.title}
                        />
                      </Link>
                      <span className="tag">{item.date}</span>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between align-items-start">
                      <div>
                        <Link to={`/blog-detail/${item.id}`}>
                          <h5 className="card-title">{item.title}</h5>
                        </Link>
                        <p className="card-text">
                          {item.description.substring(0, 110)}
                        </p>
                      </div>
                      <Link to={`/blog-detail/${item.id}`} className="continue">
                        Devamını Oku<i className="fa-solid fa-angle-right"></i>
                      </Link>
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
