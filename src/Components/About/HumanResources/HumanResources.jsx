import React from "react";
import HeadTitle from "../../../Common/HeadTitle/HeadTitle";
import AboutSidebar from "../../../Layouts/AboutSidebar/AboutSidebar";
import HomeDoctor from "../../Home/HomeDoctor/HomeDoctor";
import FormArea from "./Form/FormArea";
import "./HumanResources.scss";
export default function HumanResources() {
  return (
    <>
      <HeadTitle />
      <section className="human-resources">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <AboutSidebar />
            </div>
            <div className="col-lg-9">
              <div className="content">
                <h2>İnsan Kaynakları</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                  pariatur architecto iure, ipsa expedita hic tenetur iusto
                  tempore optio, rerum dolor eos quo sunt! Amet officia animi
                  harum error sit similique libero labore saepe ut eligendi qui
                  itaque distinctio cum nobis hic culpa ad quas totam rem,
                  fugiat numquam. Eius! Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Eaque neque tempore maiores reiciendis
                  alias. Assumenda, doloribus cum. Exercitationem, adipisci
                  porro. Soluta exercitationem sapiente ad quisquam odio,
                  aspernatur ipsum fugit tempore? Culpa libero consequatur
                  praesentium perferendis ullam nam amet voluptate dignissimos
                  laudantium et sapiente, iusto tenetur maiores consequuntur
                  eius mollitia molestias nemo? Magni, quos adipisci id
                  explicabo excepturi quod a et minima cumque similique mollitia
                  quaerat debitis error ex, quasi ratione culpa nihil amet
                  dolore enim optio. Repudiandae blanditiis in aliquam dolor
                  molestiae praesentium, nihil deleniti. Aliquam temporibus
                  explicabo, doloribus natus veritatis, sit doloremque excepturi
                  facilis eaque, nobis aperiam non recusandae?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="appoinment d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${`./images/full-equiped-medical-cabinet.jpg`})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="title">
                <h6>Bize</h6>
                <h3>Başvurun</h3>
              </div>
              <FormArea />
            </div>
            <div className="col-lg-6 ">
              <div className="img-wrapper">
                <img
                  src="./images/woman-patient-dentist.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomeDoctor />
    </>
  );
}
