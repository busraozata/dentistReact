import React, { useState, useEffect } from "react";
import HeadTitle from "../../../Common/HeadTitle/HeadTitle";
import "./DoctorDetail.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import HomeServices from "../../Home/HomeServices/HomeServices";
import HomeDoctor from "../../Home/HomeDoctor/HomeDoctor";
import DetailCard from "./DetailCard";
export default function DoctorDetail() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(`http://localhost:3000/Doctors/${id}`);
      setData(await response.data);
      console.log(response.data);
    };
    getProduct();
  }, [id]);
  return (
    <>
      <HeadTitle />
      <section className="doctors-detail">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <h3> {data.name} </h3>
                <p>{data.description}</p>
                <p>{data.description}</p>
                {data.images?.map((value, id) => {
                  return <DetailCard images={value.imageItem} key={id} />;
                })}
              </div>
            </div>
            <div className="col-lg-4">
              <h6>Hekim Bilgileri</h6>
              <div className="img-wrapper mb-3">
                <img src={data.image} className="img-fluid" alt={data.title} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomeServices />
      <HomeDoctor />
    </>
  );
}
