import React from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
let componentMounted = true;
export default function ImageGallery() {
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
    <div className="img-gallery">
      <div className="row">
        {data.map((item, index) => {
          return (
            index < 2 && (
              <div className="col-lg-6 col-md-6 mb-4" key={index}>
                <div className="single-gallery">
                  <img src={item.image2} className="img-fluid" alt="" />
                  <div className="content">
                    <h3>
                      <Link to={`/service-detail/${item.id}`}>
                        {item.bigTitle}
                      </Link>
                    </h3>
                    <span>{item.subTitle}</span>
                    <div className="icon">
                      <Link to={`/service-detail/${item.id}`}>
                        <i className="fa-solid fa-right-long"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}
