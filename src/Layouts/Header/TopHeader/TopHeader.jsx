import React, { useState } from "react";
import "./TopHeader.css";
import axios from "axios";
import { useEffect } from "react";

let componentMounted = true;
export default function TopHeader() {
  const [dataContact, setContactData] = useState([]); //Get Data
  useEffect(() => {
    // bu callback fonksiyon bileşen(component) her render edildikten sonra çağrılıyor(invoke) ediliyor.
    const getData = async () => {
      const responseContact = await axios.get("http://localhost:3000/Contact");

      if (componentMounted) {
        setContactData(await responseContact.data);
        console.log(responseContact.data);
      }
      return () => {
        componentMounted = false;
      };
    };

    getData();
  }, []); //loop'a dönmesin diye boş bir array tanımladım.
  return (
    <div className="top-line d-lg-block d-none">
      <div className="container">
        <div className="contact-area d-flex justify-content-between align-items-center">
          <ul className="contact d-flex align-items-center justify-content-start">
            <li className="nav-item">
              <a href={`tel:${dataContact.phone}`} className="nav-link">
                <i className="fa-solid fa-phone"></i>
                {dataContact.phone}
              </a>
            </li>
            <li className="nav-item">
              <a href={`mailto:${dataContact.email}`} className="nav-link">
                <i className="fa-solid fa-envelope"></i>
                {dataContact.email}
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <ul className="social-media d-flex">
              {dataContact.socialMedia?.map((item,index) => {
                return (
                  <li className="nav-item" key={index}>
                    <a
                      href={`${item.link}`}
                      target="_blank"
                      className="nav-link"
                      rel="noopener noreferrer"
                    >
                      <i className={`fa-brands ${item.icon}`}></i>
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                TR
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="/#">
                    EN
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    DE
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
