import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      lazyLoad: 'progressive',

    };
    return (
      <Slider {...settings}>
        <div>
          <div className="sliderCardContainer">
            <div>
              dato1
            </div>
            <div>
              valor1
            </div>
          </div>
        </div>
        <div>
          <div className="sliderCardContainer">
            <div>
              dato2
            </div>
            <div>
              valor2
            </div>
          </div>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
        <div>
          <h3>10</h3>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider