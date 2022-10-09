import React, { Component } from "react";
import Slider from "react-slick";

export default class MuiSimpleSlider extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const settings = {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            customPaging: function (i) {
                return (
                    <button className="topBanner_dot">
                        <span>{(i < 9) ? '0' + (i + 1) : i + 1}</span>
                    </button>
                )
            },
            dotsClass: "TopBanner_slider_dots slick-thumb",
        };
        return (
            <Slider {...settings} className={this.props.myclass} >
                {this.props.slides.map((slide) => {
                    return slide
                })}
            </Slider>
        );
    }
}