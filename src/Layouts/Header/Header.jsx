import React from "react";
import { useState } from "react";
import "./Header.scss";
import TopHeader from "./TopHeader/TopHeader";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
let componentMounted = true;
export default function Header() {
  const [active, setActive] = useState(-1); //Active , Pasive
  const [data, setData] = useState([]); //Get Data

  const [menuOpen, setMenuOpen] = useState(false); //Menu open, close
  const [isScrolled, setIsScrolled] = useState(false); //Header scroll
  const [image, setImage] = useState("/images/woman-patient-dentist-(2).jpg"); //header change image

  const handleClick = (index) => {
    if (index === active) setActive(-1);
    else setActive(index);
  };

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
  }, []); //loop'a dönmesin diye boş bir array tanımladım.

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  //Click open , close menu
  const handleMenuToggle = () => {
    setMenuOpen((p) => !p);
  };

  //Hover change image
  function handleMouseEnter(imagePath) {
    return () => {
      setImage(imagePath);
    };
  }

  return (
    <header>
      <TopHeader />
      <div className={isScrolled ? `header-inner sticky` : `header-inner`}>
        <div className="container">
          <div className="header-area d-flex align-items-center justify-content-between">
            <Link className="navbar-brand" to="/">
              <img src="/images/logo.png" className="img-fluid" alt="logo" />
            </Link>
            <button
              className={`hamburger d-lg-none d-block ${
                menuOpen ? "active" : ""
              }`}
              type="button"
              onClick={handleMenuToggle}
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>
            <div className={`menu-area ${menuOpen ? "active" : ""}`}>
              <Link className="navbar-brand d-lg-none d-block" to="/">
                <img src="/images/logo.png" className="img-fluid" alt="logo" />
              </Link>
              <ul className="menu d-flex align-items-center justify-content-center">
                {data.map((item, index) => {
                  return (
                    <li className="nav-item" key={index}>
                      {/* key verilerek index numaraları tanımlanıyor */}
                      <Link
                        className={`nav-link ${
                          index === active ? "active" : ""
                        }`} 
                        to={`/${item.Link}`} //ilgili linke aktarım sağlanıyor.
                        onClick={() =>{
                          handleClick(index)
                          handleMenuToggle()
                        } }
                      >
                        {item.title}
                      </Link>
                      {item.subLinks ? ( // Menudeki alanın alt menüsü varsa
                        item.title === "Tedavilerimiz" ? ( //title'i Tedavilerimiz ise burası
                          <ul
                            className="dropdown-menu mega-menu"
                            aria-labelledby="defaultDropdown"
                          >
                            <div className="row">
                              <div className="col-lg-6 d-lg-block d-none">
                                <div className="img-wrapper h-100">
                                  <img
                                    src={image}
                                    className="img-fluid"
                                    alt="/"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <ul className="sub-item">
                                  {item.subLinks?.map((subItem, index) => {
                                    return (
                                      <li className="dropdown-item" key={index}>
                                        <Link
                                          to={`/${subItem.Link}`}
                                          onMouseEnter={handleMouseEnter(
                                            `${subItem.image}`
                                          )}
                                        >
                                          {subItem.title}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            </div>
                          </ul>
                        ) : (
                          //Değilse Burası
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="defaultDropdown"
                          >
                            {item.subLinks?.map((subItem, index) => {
                              return (
                                <li className="dropdown-item" key={index}>
                                  <Link to={`/${subItem.Link}`}>
                                    {subItem.title}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )
                      ) : null}
                    </li>
                  );
                })}
              </ul>
              <ul className="language-area-mobil d-flex d-lg-none">
                <li>
                  <Link type="button" to="/#">
                    EN
                  </Link>
                </li>
                <li>
                  <Link type="button" to="/#">
                    TR
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
