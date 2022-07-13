import React, { useState } from "react";
import "./ScrollTop.scss";
export default function ScrollTop() {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  window.addEventListener("scroll", checkScrollTop);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <i
      className="fa-solid fa-chevron-up scrollTop"
      onClick={scrollTop}
      style={{ display: showScroll ? "flex" : "none" }}
    ></i>
  );
}
