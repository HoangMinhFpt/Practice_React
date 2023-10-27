import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import CardProductList from "../card/product/CardProductList";
import "./Carousel.scss";

const Carousel = (props) => {
  const option = {
    animateOut: "slideOutTop",
    nav: true,
    dots: true,
    dotsEach: true,
    responsive: {
      1000: {
        items: 2,
      },
      725: { items: 1 },
      550: { items: 1 },
      350: {
        items: 1,
        innerWidth: "100%",
        outerWidth: "100%",
      },
    },
  };
  return (
    <div className="owl-carousel-container">
      <OwlCarousel {...option} className="owl-carousel-content">
        {props.data.map((product, index) => {
          return (
            <CardProductList
              data={product}
              className="card-list-carousel"
              key={index}
            />
          );
        })}
      </OwlCarousel>
    </div>
  );
};

export default Carousel;
