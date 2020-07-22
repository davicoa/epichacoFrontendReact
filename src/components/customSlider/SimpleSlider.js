import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

let settings = {
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  lazyLoad: 'progressive',
  arrows: false,
  centerMode: true
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
          <div className="sliderCardContainer">
            <div>
              {element.titulo}
            </div>
            <div>
              <span style={{
                color: element.valor.replace(/,/g, ".").replace(/[&/\\#+()$~%:*?<>{}]/g, "")<0? "red" : "#3bb54c"
              }}>
                {element.valor}
              </span>
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