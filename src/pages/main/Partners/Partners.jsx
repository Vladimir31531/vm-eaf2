import React, { useEffect, useState } from 'react'
import "./Partners.scss"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MuiSlider from '../../../components/ui/muiSlider/muiSlider';

export default function Partners() {

    let PartnersArr = [
        {
            id: 1,
            img: 'partner1.jpg',
        },
        {
            id: 2,
            img: 'partner2.jpg',
        },
        {
            id: 3,
            img: 'partner3.jpg',
        },
        {
            id: 4,
            img: 'partner4.jpg',
        },
        {
            id: 5,
            img: 'partner5.jpg',
        },
        {
            id: 6,
            img: 'partner6.jpg',
        },
    ]

    let [prtnrs, setPrtnrs] = useState([])
    

    useEffect(() => {
        let Partners = []
        PartnersArr.map((partner) => {
            Partners.push(
                <div key={partner.id} className="Partners_card">
                    <img src={'./img/' + partner.img} alt="" />
                </div>
            )
        })
        setPrtnrs(Partners)
    }, [])

    const responsive = [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]

    return (
        <div className="Partners">
            <h4>партнери</h4>
            <h3>Наші партнери</h3>
            <div className="Partners_content">
                <MuiSlider
                    slides={prtnrs}
                    responsive={responsive}
                />
            </div>
        </div>
    )
}