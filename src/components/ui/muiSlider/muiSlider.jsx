import React, { Component } from "react";
import Slider from "react-slick";

export default class MuiSlider extends Component {

    constructor(props) {
        super(props)
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    

    render() {
        const settings = {
            focusOnSelect: true,
            arrows: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            speed: 500,
            className: 'partners_slider_inner',
            responsive: this.props.responsive,
        };
        return (
            <div className="partners_slider">
                <Slider ref={c => (this.slider = c)} {...settings}>
                    {this.props.slides.map((item) => {
                        return item
                    })}
                </Slider>
                <button className="prev" onClick={this.previous}>
                    <svg viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.17447 0.829023C9.10292 0.525415 8.87274 0.250008 8.57541 0.11229C8.42586 0.043035 8.36177 0.0308566 8.1499 0.0314729C7.68064 0.0328228 7.99757 -0.248864 4.21209 3.53124C1.92905 5.81109 0.823136 6.93522 0.773777 7.02625C0.658537 7.2388 0.618041 7.48982 0.663379 7.71065C0.684097 7.81154 0.733779 7.95445 0.773777 8.02822C0.823136 8.11925 1.92905 9.24339 4.21209 11.5232C7.99789 15.3037 7.68084 15.0219 8.1499 15.0227C8.36233 15.0231 8.42648 15.0108 8.58228 14.9396C9.12129 14.6933 9.34931 14.0368 9.08264 13.499C9.04476 13.4226 8.00464 12.3607 6.1005 10.4544L3.17652 7.52724L6.1005 4.60003C8.01209 2.68633 9.04452 1.63218 9.08244 1.55544C9.19278 1.33206 9.22782 1.05536 9.17447 0.829023Z" fill="white" />
                    </svg>
                </button>
                <button className="next" onClick={this.next}>
                    <svg viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.17447 0.829023C9.10292 0.525415 8.87274 0.250008 8.57541 0.11229C8.42586 0.043035 8.36177 0.0308566 8.1499 0.0314729C7.68064 0.0328228 7.99757 -0.248864 4.21209 3.53124C1.92905 5.81109 0.823136 6.93522 0.773777 7.02625C0.658537 7.2388 0.618041 7.48982 0.663379 7.71065C0.684097 7.81154 0.733779 7.95445 0.773777 8.02822C0.823136 8.11925 1.92905 9.24339 4.21209 11.5232C7.99789 15.3037 7.68084 15.0219 8.1499 15.0227C8.36233 15.0231 8.42648 15.0108 8.58228 14.9396C9.12129 14.6933 9.34931 14.0368 9.08264 13.499C9.04476 13.4226 8.00464 12.3607 6.1005 10.4544L3.17652 7.52724L6.1005 4.60003C8.01209 2.68633 9.04452 1.63218 9.08244 1.55544C9.19278 1.33206 9.22782 1.05536 9.17447 0.829023Z" fill="white" />
                    </svg>
                </button>
            </div>
        );
    }
}