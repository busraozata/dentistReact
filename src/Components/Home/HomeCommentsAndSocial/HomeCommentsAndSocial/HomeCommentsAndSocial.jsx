import React from "react";
import CommentArea from "../Comment/Comment";
import "./HomeCommentsAndSocial.scss";
import Social from "../Social/Social";
import "./HomeCommentsAndSocial.scss";
export default function HomeCommentsAndSocial() {
  return (
    <section className="social-and-comments">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 social">
            <h6>Bizi Takip Edin </h6>
            <h3>Sosyal Medya Hesaplarımız</h3>
            <Social />
          </div>
          <div className="col-lg-6 comments">
            <h6>Bizi Takip Edin </h6>
            <h3>Memnuniyet Yorumları</h3>
            <CommentArea />
          </div>
        </div>
      </div>
    </section>
  );
}
