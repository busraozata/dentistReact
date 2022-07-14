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
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <>
      <HeadTitle
        title="Blog"
        image="/images/interior-empty-modern-stomatology-orthodontic-hospital-bright-office.jpg"
      />
      <section className="blog-detail">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-9">
              <div className="blog-details-image">
                <img
                  src={data.image2}
                  className="img-fluid w-100"
                  alt={data.title}
                />
              </div>
              <div className="blog-details-content">
                <h3 className="mt-4">{data.title}</h3>
                <p>{data.description}</p>
                <p>{data.description}</p>
                <p>{data.description}</p>
              </div>
            </div>
            <div className="col-xl-4">
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
