import React, { useState, useEffect } from "react";
import HeadTitle from "../../../Common/HeadTitle/HeadTitle";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import LastPosts from "../../../Layouts/LastPosts/LastPosts";
import "./BlogDetail.scss";
export default function BlogDetail() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(`http://localhost:3000/Blog/${id}`);
      setData(await response.data);
      console.log(response.data);
    };
    getProduct();
  }, [id]);
  return (
    <>
      <HeadTitle />
      <section class="blog-detail">
        <div class="container">
          <div class="row">
            <div class="col-xl-8 col-lg-9">
              <div class="blog-details-image">
                <img
                  src={data.image2}
                  class="img-fluid w-100"
                  alt={data.title}
                />
              </div>
              <div class="blog-details-content">
                <h3 class="mt-4">{data.title}</h3>
                <p>{data.description}</p>
                <p>{data.description}</p>
                <p>{data.description}</p>
              </div>
            </div>
            <div class="col-xl-4">
              <LastPosts />

              <div class="populer-tags mt-4">
                <h3 class="mb-3">Popüler Taglar</h3>
                <div class="tagcloud">
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
