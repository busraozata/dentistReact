import React, { useState, useEffect } from "react";
import "./ServiceDetail.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import HeadTitle from "../../../Common/HeadTitle/HeadTitle";
import ImageGallery from "./ImageGallery";

export default function ServiceDetail() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(`http://localhost:3000/Services/${id}`);
      setData(await response.data);
      console.log(response.data);
    };
    getProduct();
  }, [id]);

  return (
    <>
      <HeadTitle />
      <section class="service-detail">
        <div class="container">
          <div class="row">
            <div class="col-xl-3 col-lg-3">
              <div class="sidebar">
                <ul>
                  <li>
                    <a href="before-after.html">Öncesi & Sonrası </a>
                  </li>
                  <li>
                    <a href="service-detail.html" class="active">
                      Ortodonti
                    </a>
                  </li>
                  <li>
                    <a href="service-detail.html">Diş Beyazlatma </a>
                  </li>
                  <li>
                    <a href="service-detail.html">Dental Implants</a>
                  </li>
                  <li>
                    <a href="service-detail.html">Diş Temizliği</a>
                  </li>
                  <li>
                    <a href="service-detail.html">Sterilizasyon</a>
                  </li>
                  <li>
                    <a href="service-detail.html">Porcelen Diş Teli</a>
                  </li>
                  <li>
                    <a href="service-detail.html">Ortodonti</a>
                  </li>
                  <li>
                    <a href="service-detail.html">Diş Beyazlatma </a>
                  </li>
                  <li>
                    <a href="service-detail.html">Dental Implants</a>
                  </li>
                  <li>
                    <a href="service-detail.html">Diş Temizliği</a>
                  </li>
                  <li>
                    <a href="service-detail.html">Sterilizasyon</a>
                  </li>
                  <li>
                    <a href="service-detail.html">Porcelen Diş Teli</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-6 col-lg-9">
              <div class="services-details-image">
                <img
                  src={data.image2}
                  class="img-fluid w-100"
                  alt={data.bigTitle}
                />
              </div>
              <div class="services-details-content">
                <h3 class="mt-4">{data.bigTitle}</h3>
                <p>{data.description}</p>
                <p>{data.description}</p>
              </div>

              <ImageGallery />
              <p>{data.description}</p>
            </div>
            <div class="col-xl-3">
              <div class="last-posts">
                <h3 class="mb-3">Son Gönderiler</h3>
                <div class="content">
                  <div class="swiper mySwiperLastPosts">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <a
                          href="blog-detail.html"
                          class="d-flex align-items-center"
                        >
                          <img
                            class="card-img-top"
                            src="./img/blog.jpeg"
                            alt=""
                          />
                          <span>Diş Operasyonu için Yeni Teknoloji</span>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a
                          href="blog-detail.html"
                          class="d-flex align-items-center"
                        >
                          <img
                            class="card-img-top"
                            src="./img/blog-2.jpeg"
                            alt=""
                          />
                          <span>
                            Düzenli Diş Bakımı, Gülümsemenizi Daha Parlak Hale
                            Getirir
                          </span>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a
                          href="blog-detail.html"
                          class="d-flex align-items-center"
                        >
                          <img
                            class="card-img-top"
                            src="./img/blog-3.jpeg"
                            alt=""
                          />
                          <span>Gülümseme İçin Her Yaşta Diş Hijyeni</span>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a
                          href="blog-detail.html"
                          class="d-flex align-items-center"
                        >
                          <img
                            class="card-img-top"
                            src="./img/blog.jpeg"
                            alt=""
                          />
                          <span>Diş Operasyonu için Yeni Teknoloji</span>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a
                          href="blog-detail.html"
                          class="d-flex align-items-center"
                        >
                          <img
                            class="card-img-top"
                            src="./img/blog-2.jpeg"
                            alt=""
                          />
                          <span>
                            Düzenli Diş Bakımı, Gülümsemenizi Daha Parlak Hale
                            Getirir
                          </span>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a
                          href="blog-detail.html"
                          class="d-flex align-items-center"
                        >
                          <img
                            class="card-img-top"
                            src="./img/blog-3.jpeg"
                            alt=""
                          />
                          <span>Gülümseme İçin Her Yaşta Diş Hijyeni</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="populer-tags mt-4">
                <h3 class="mb-3">Popüler Taglar</h3>

                <div class="tagcloud">
                  <a href="index.html">Business</a>
                  <a href="index.html">Privacy</a>
                  <a href="index.html">Technology</a>
                  <a href="index.html">Tips</a>
                  <a href="index.html">Uncategorized</a>
                  <a href="index.html">Business</a>
                  <a href="index.html">Privacy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
