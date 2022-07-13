import React from "react";

export default function MapArea() {
  return (
    <section className="map">
      <iframe
        title="Wucize"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.0864253127293!2d28.870207015661308!3d40.97958832913813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabd671f7391b7%3A0x9f90d1a19c5df6d2!2zV3VjaXplIHwgV2ViIFRhc2FyxLFtICwgw5xyw7xuIEZvdG_En3JhZiDDh2VraW1pLCBUYW7EsXTEsW0gRmlsbWk!5e0!3m2!1str!2str!4v1654152514006!5m2!1str!2str"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
    </section>
  );
}
