import React from "react";
import { useState } from "react";
import "./Header.scss";
import TopHeader from "./TopHeader/TopHeader";
import { Link } from "react-router-dom";

export default function Header() {
  const [image, setImage] = useState("/images/woman-patient-dentist-(2).jpg");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
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
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Ana Sayfa
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#" id="defaultDropdown">
                    Kurumsal
                  </Link>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="defaultDropdown"
                  >
                    <li className="dropdown-item">
                      <Link to="/about">Hakkımızda</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/why-us">Neden Biz</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/polyclinic">Polikliniğimiz</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/human-resources">İnsan Kaynakları</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/kvkk">KVKK</Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/services"
                    id="defaultDropdown"
                  >
                    Tedavilerimiz
                  </Link>
                  <div
                    className="dropdown-menu mega-menu"
                    aria-labelledby="defaultDropdown"
                  >
                    <div className="row">
                      <div className="col-lg-6 d-lg-block d-none">
                        <div className="img-wrapper h-100">
                          <img src={image} className="img-fluid" alt="" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <ul className="sub-item">
                          <li
                            className="dropdown-item"
                            onMouseEnter={handleMouseEnter(
                              "/images/woman-patient-dentist.jpg"
                            )}
                          >
                            <Link to="/">Öncesi & Sonrası</Link>
                          </li>
                          <li
                            className="dropdown-item"
                            onMouseEnter={handleMouseEnter(
                              "/images/revealing-shot-empty-orthodontic-office.jpg"
                            )}
                          >
                            <Link to="/">İmplant Diş</Link>
                          </li>
                          <li
                            className="dropdown-item"
                            onMouseEnter={handleMouseEnter(
                              "/images/woman-patient-dentist-(2).jpg"
                            )}
                          >
                            <Link to="/#">Ortodonti</Link>
                          </li>
                          <li
                            className="dropdown-item"
                            onMouseEnter={handleMouseEnter(
                              "/images/interior-empty-modern-stomatology-orthodontic-hospital-bright-office.jpg"
                            )}
                          >
                            <Link to="/#">Diş Temizliği </Link>
                          </li>
                          <li
                            className="dropdown-item"
                            onMouseEnter={handleMouseEnter(
                              "/images/interior-empty-modern-stomatology-orthodontic-hospital-bright-office.jpg"
                            )}
                          >
                            <Link to="/#">Diş Temizliği </Link>
                          </li>
                          <li
                            className="dropdown-item"
                            onMouseEnter={handleMouseEnter(
                              "/images/revealing-shot-empty-orthodontic-office.jpg"
                            )}
                          >
                            <Link to="/#">Sterilizasyon </Link>
                          </li>
                          <li
                            className="dropdown-item"
                            onMouseEnter={handleMouseEnter(
                              "/images/woman-patient-dentist-(2).jpg"
                            )}
                          >
                            <Link to="/#">Porcelen Diş Teli </Link>
                          </li>
                          <li
                            className="dropdown-item"
                            onMouseEnter={handleMouseEnter(
                              "/images/woman-patient-dentist.jpg"
                            )}
                          >
                            <Link to="/">Öncesi & Sonrası</Link>
                          </li>
                          <li
                            className="dropdown-item"
                            onMouseEnter={handleMouseEnter(
                              "/images/revealing-shot-empty-orthodontic-office.jpg"
                            )}
                          >
                            <Link to="/">İmplant Diş</Link>
                          </li>
                          <li
                            className="dropdown-item"
                            onMouseEnter={handleMouseEnter(
                              "/images/interior-empty-modern-stomatology-orthodontic-hospital-bright-office.jpg"
                            )}
                          >
                            <Link to="/#">Ortodonti</Link>
                          </li>
                          <li
                            className="dropdown-item"
                            onMouseEnter={handleMouseEnter(
                              "/images/woman-patient-dentist.jpg"
                            )}
                          >
                            <Link to="/#">Diş Beyazlatma </Link>
                          </li>

                          <li
                            className="dropdown-item"
                            onMouseEnter={handleMouseEnter(
                              "/images/woman-patient-dentist-(2).jpg"
                            )}
                          >
                            <Link to="/#">Diş Temizliği </Link>
                          </li>
                          <li
                            className="dropdown-item"
                            onMouseEnter={handleMouseEnter(
                              "/images/revealing-shot-empty-orthodontic-office.jpg"
                            )}
                          >
                            <Link to="/#">Sterilizasyon </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/doctors">
                    Hekimlerimiz
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">
                    Blog
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    İletişim
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/appoinment">
                    Randevu Al
                  </Link>
                </li>
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
