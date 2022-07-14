import React, { useState } from "react";
import "./Footer.scss";
import ScrollTop from "./ScrollTop/ScrollTop";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

let componentMounted = true;
export default function Footer() {
  const [data, setData] = useState([]); //Get Data
  const [dataContact, setContactData] = useState([]); //Get Data
  useEffect(() => {
    // bu callback fonksiyon bileşen(component) her render edildikten sonra çağrılıyor(invoke) ediliyor.
    const getData = async () => {
      const response = await axios.get("http://localhost:3000/Menu");
      const responseContact = await axios.get("http://localhost:3000/Contact");

      if (componentMounted) {
        setData(await response.data);
        setContactData(await responseContact.data);
        console.log(response.data);
        console.log(responseContact.data);
      }
      return () => {
        componentMounted = false;
      };
    };

    getData();
  }, []); //loop'a dönmesin diye boş bir array tanımladım.
  return (
    <>
      <footer
        style={{
          backgroundImage: `url(${`/images/full-equiped-medical-cabinet.jpg`})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row-area">
            {data.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {item.title === "Kurumsal" && (
                    <div className="col-area">
                      <h3>{item.title}</h3>

                      {item.subLinks ? ( // Menudeki alanın alt menüsü varsa
                        item.title === "Kurumsal" ? ( //title'i Tedavilerimiz ise burası
                          <ul>
                            {item.subLinks?.map((subItem, index) => {
                              return (
                                <li key={index}>
                                  <Link to={`/${subItem.Link}`}>
                                    {subItem.title}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        ) : null
                      ) : null}
                    </div>
                  )}
                  {item.title === "Tedavilerimiz" && (
                    <div className="col-area" key={index}>
                      <h3>{item.title}</h3>

                      {item.subLinks ? ( // Menudeki alanın alt menüsü varsa
                        item.title === "Tedavilerimiz" ? ( //title'i Tedavilerimiz ise burası
                          <ul>
                            {item.subLinks?.map((subItem, index) => {
                              return (
                                index < 7 && (
                                  <li key={index}>
                                    <Link to={`/${subItem.Link}`}>
                                      {subItem.title}
                                    </Link>
                                  </li>
                                )
                              );
                            })}
                          </ul>
                        ) : null
                      ) : null}
                    </div>
                  )}
                </React.Fragment>
              );
            })}
            <div className="col-area">
              <div className="col-area">
                <Link to="/">
                  <img src="/images/logo.png" className="img-fluid" alt="" />
                </Link>
                <p>
                  <i className="fa-solid fa-location-dot"></i>
                  {dataContact.address}
                </p>
                <ul className="contact">
                  <li>
                    <a href={`tel:${dataContact.phone}`}>
                      <i className="fa-solid fa-phone"></i> {dataContact.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${dataContact.email}`}>
                      <i className="fa-solid fa-envelope"></i>
                      {dataContact.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <span>
                Copyright © {new Date().getFullYear()} Smile Design House
              </span>
              <a href="https://www.wucize.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/wucize.png"
                  className="img-fluid"
                  alt="wucize"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <ScrollTop />
    </>
  );
}
