import React, { useState } from "react";
import "./Faq.scss";
import axios from "axios";
import { useEffect } from "react";
let componentMounted = true;

export default function Faq() {
  const [active, setActive] = useState(-1);

  const handleClick = (index) => {
    if (index === active) setActive(-1);
    else setActive(index);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3000/Faq");

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
    <>
      {data.map((item, index) => {
        return (
          <div className="faq" key={index}>
            <button
              className={`accordion d-flex justify-content-between align-items-center ${
                index === active ? "active" : ""
              }`}
              onClick={() => handleClick(index)}
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span id="tab-title-dimensions_tab">{item.question}</span>
              <div className="circle-animation closed">
                <div className="horizontal"></div>
                <div className="vertical"></div>
              </div>
            </button>
            <div
              className={`panel ${
                index === active
                  ? "open"
                  : "" 
              } `}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
