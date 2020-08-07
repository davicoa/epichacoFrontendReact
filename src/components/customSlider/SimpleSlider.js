import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

import upGreenArrow from "images/arrowUpGreen.png";
import upRedArrow from "images/arrowUpRed.png";
import downGreenArrow from "images/arrowDownGreen.png";
import downRedArrow from "images/arrowDownRed.png";
import arrowNone from "images/arrowNone.png";

let settings = {
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear"
}

const SimpleSlider = (props) => {

  const [sliderCard, setSliderCard] = useState("");

  useEffect(() => {
    reloadSlider();
  }, []);

  const reloadSlider = () => {
    setSliderCard(
      props.slider.map((element, i) =>
        <div key={i}>
          <div className="sliderCardContainer" style={{ backgroundColor: (element.nacion ? "#e0f5ff" : "#daffd6") }}>
            <div>
              {element.titulo}
            </div>
            <div className="sliderValue">
              <div className="sValue1">
                <img
                  src={
                    element.dirOpuesta !== null ?
                      element.dirflecha < 0
                        ? (element.dirOpuesta) ? upRedArrow : upGreenArrow
                        : element.dirflecha > 0
                          ? (element.dirOpuesta) ? downGreenArrow : downRedArrow
                          : arrowNone
                      : arrowNone
                  }
                  alt=""
                  height="auto"
                  width="20%"
                ></img>
              </div>
              <div className="sValue2">
                <span style={{
                  color:
                    element.dirOpuesta !== null ?
                      element.dirflecha < 0
                        ? element.dirOpuesta ? "red" : "#3bb54c"
                        : element.dirflecha > 0
                          ? element.dirOpuesta ? "#3bb54c" : "red"
                          : "#5F5F5F"
                      : "#5F5F5F"
                }}>
                  {element.valor}
                </span>
              </div>
            </div>
          </div>
        </div>
      )
    )
  }

  return (
    <Slider {...settings}>
      {sliderCard}
    </Slider>
  )
}
export default SimpleSlider