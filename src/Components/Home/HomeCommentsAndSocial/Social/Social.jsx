import React, { useState } from "react";
import "./Social.scss";
import axios from "axios";
import { useEffect } from "react";
let componentMounted = true;
export default function Social() {
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
    <ul className="d-flex social-media">
      {dataContact.socialMedia?.map((item) => {
        return (
          <li>
            <a href={`${item.link}`} target="_blank" rel="noopener noreferrer">
              <i className={`fa-brands ${item.icon}`}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
