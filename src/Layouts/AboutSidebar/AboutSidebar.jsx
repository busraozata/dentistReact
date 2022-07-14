import React, { useState } from "react";
import "./AboutSidebar.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
let componentMounted = true;
export default function AboutSidebar() {
  const [data, setData] = useState([]); //Get Data
  useEffect(() => {
    // bu callback fonksiyon bileşen(component) her render edildikten sonra çağrılıyor(invoke) ediliyor.
    const getData = async () => {
      const response = await axios.get("http://localhost:3000/Menu");

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
    <div className="sidebar">
      <ul>
        {data.map((item, index) => {
          return (
            item.title === "Kurumsal" && (
              <React.Fragment key={index}>
                {item.subLinks
                  ? item.title === "Kurumsal"
                    ? item.subLinks?.map((subItem, index) => {
                        return (
                          <li key={index}>
                            <Link to={`/${subItem.Link}`}>{subItem.title}</Link>
                          </li>
                        );
                      })
                    : null
                  : null}
              </React.Fragment>
            )
          );
        })}
      </ul>
    </div>
  );
}
