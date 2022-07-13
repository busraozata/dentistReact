import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
let componentMounted = true;
export default function ServiceSidebar() {
  const [sidebarData, setSidebarData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3000/Services");

      if (componentMounted) {
        setSidebarData(await response.data);
        console.log(response.data);
      }
      return () => {
        componentMounted = false;
      };
    };

    getData();
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="sidebar">
        <ul>
          {sidebarData.map((item, index) => {
            return (
              <li key={index}>
                <Link to={`/service-detail/${item.id}`}>{item.bigTitle}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
