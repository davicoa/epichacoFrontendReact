import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

import upGreenArrow from "images/arrow/arrowUpGreen.png";
import upRedArrow from "images/arrow/arrowUpRed.png";
import downGreenArrow from "images/arrow/arrowDownGreen.png";
import downRedArrow from "images/arrow/arrowDownRed.png";
import arrowNone from "images/arrowNone.png";

import arrowDownGray from "images/arrow/arrowDownGray.png"
import arrowUpGray from "images/arrow/arrowUpGray.png"

const SimpleSlider = (props) => {
  
  //console.log(props.slider);

  const [sliderCard, setSliderCard] = useState("");
  const [toShow, setToShow] = useState(window.innerWidth <= 600 ? 2 : 6);

  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: toShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: "linear"
  }

  useEffect(() => {
    reloadSlider()

    function handleResize() {
      setToShow(
        window.innerWidth > 1150 ? 6 :
          window.innerWidth > 1000 ? 5 :
            window.innerWidth > 800 ? 4 :
              window.innerWidth > 600 ? 3 :
                window.innerWidth > 400 ? 2 : 1
      )

    }

    window.addEventListener('resize', handleResize)

    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);

  const reloadSlider = () => {
    setSliderCard(
      props.slider.map((element, i) =>
        <div key={i}>
          <div className="sliderCardContainer"
            style={{
              backgroundColor: (element.nacion ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 1)"),
            }}>
            <div className="titleSider" style={{
              borderBottom: '5px solid',
              borderBottomColor: (element.nacion ? "rgba(178, 227, 251, 1)" : "rgba(187, 252, 178, 1)"),
              borderBottomWidth: '4px',
            }}>
              {element.titulo}
            </div>
            <div className="sliderValue">
              <div className="sValue1">
                <img
                  src={
                    element.dirOpuesta !== null ?
                      element.dirOpuesta ?
                        element.arrowAndColor > 0 ? //flecha abajo
                          element.arrowColor > 0 ? downRedArrow : downGreenArrow :
                          element.arrowAndColor < 0 ? //flecha arriba
                            element.arrowColor > 0 ? upRedArrow : upGreenArrow
                            : arrowNone
                        :
                        element.arrowAndColor < 0 ? //flecha abajo
                          element.arrowColor < 0 ? downRedArrow : downGreenArrow :
                          element.arrowAndColor > 0 ? //flecha arriba
                            element.arrowColor < 0 ? upRedArrow : upGreenArrow
                            : arrowNone
                      : element.arrowColor < 0 ? arrowDownGray : arrowUpGray
                  }
                  /* src={
                    element.dirOpuesta !== null ?
                      element.dirflecha < 0
                        ? (element.dirOpuesta) ? upRedArrow : upGreenArrow
                        : element.dirflecha > 0
                          ? (element.dirOpuesta) ? downGreenArrow : downRedArrow
                          : arrowNone
                      : 
                      element.dirflecha < 0
                        ? (element.dirOpuesta) ? arrowUpGray : arrowUpGray
                        : element.dirflecha > 0
                          ? (element.dirOpuesta) ? arrowDownGray : arrowDownGray
                          : arrowNone
                  } */
                  alt=""
                  height="auto"
                  width="40%"
                ></img>
              </div>
              <div className="sValue2">
                <span style={{
                  color:
                    element.dirOpuesta !== null ?
                      element.dirOpuesta ? element.arrowColor < 0 ? "#3bb54c" : "red" : element.arrowColor > 0 ? "#3bb54c" : "red"
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
    <Slider {...settings} style={{ maxHeight: '10vh', width: '100%' }}>
      {sliderCard}
    </Slider>
  )
}
export default SimpleSlider