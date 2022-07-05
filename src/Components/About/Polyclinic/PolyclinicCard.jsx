import React from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";
import { useEffect } from "react";
export default function PolyclinicCard(props) {
  const delegate = props.delegate || "[data-fancybox]";

  useEffect(() => {
    const opts = props.options || {};

    NativeFancybox.bind(delegate, opts);

    return () => {
      NativeFancybox.destroy();
    };
  }, [delegate, props.options]);
  return (
    <>
      <div
        className="col-lg-6 col-md-6 my-3"
        options={{ infinite: false }}
        data-fancybox="gallery"
        data-src={props.images}
      >
        <div className="img-wrapper">
          <img src={props.images} alt="" />
        </div>
      </div>
    </>
  );
}
