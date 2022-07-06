/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import "./ServiceDetail.scss";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import HeadTitle from "../../../Common/HeadTitle/HeadTitle";
import ImageGallery from "./ImageGallery";
import LastPosts from "../../../Layouts/LastPosts/LastPosts";
import ServiceSidebar from "../../../Layouts/ServiceSidebar/ServiceSidebar";

export default function ServiceDetail() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(`http://localhost:3000/Services/${id}`);
      setData(await response.data);
      console.log(response.data);
    };
    getProduct();
  }, [id]);

  return (
    <>
      <HeadTitle />
      <section className="service-detail">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3">
              <ServiceSidebar />
            </div>
            <div className="col-xl-6 col-lg-9">
              <div className="services-details-image">
                <img
                  src={data.image2}
                  className="img-fluid w-100"
                  alt={data.bigTitle}
                />
              </div>
              <div className="services-details-content">
                <h3 className="mt-4">{data.bigTitle}</h3>
                <p>{data.description}</p>
                <p>{data.description}</p>
              </div>

              <ImageGallery />
              <p>{data.description}</p>
            </div>
            <div className="col-xl-3">
              <LastPosts />

              <div className="populer-tags mt-4">
                <h3 className="mb-3">Popüler Taglar</h3>

                <div className="tagcloud">
                  {data.tags?.map((item) => {
                    return (
                      <Link to="#" key={item.id}>
                        {item.tag}
                      </Link>
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
