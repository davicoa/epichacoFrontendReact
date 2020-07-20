import React from 'react';
import Slider from 'infinite-react-carousel';
import "./style.css"

const CustomSlider = () => {

    const settings = {
        arrows: false,
        arrowsBlock: false,
        autoplay: true,
        autoplaySpeed: 0.1,
        centerMode: false,
        centerPadding: 30,
        className: 'customSlider',
        duration: 2500,
        gutter: 1,
        initialSlide: true,
        overScan: 1,
        shift: 10,
        slidesToShow: 5,
        virtualList: true,
        wheel: true,
        pauseOnHover:true
    }
    return (
        <div>
            <Slider {...settings}>
                <div className="sliderData">
                    <h3>1</h3>
                </div>
                <div className="sliderData">
                    <h3>2</h3>
                </div>
                <div className="sliderData">
                    <h3>3</h3>
                </div>
                <div className="sliderData">
                    <h3>4</h3>
                </div>
                <div className="sliderData">
                    <h3>5</h3>
                </div>
                <div className="sliderData">
                    <h3>6</h3>
                </div>
                <div className="sliderData">
                    <h3>7</h3>
                </div>
                <div className="sliderData">
                    <h3>8</h3>
                </div>
                <div className="sliderData">
                    <h3>9</h3>
                </div>
                <div className="sliderData">
                    <h3>10</h3>
                </div>
            </Slider>
        </div>
    )
}
export default CustomSlider