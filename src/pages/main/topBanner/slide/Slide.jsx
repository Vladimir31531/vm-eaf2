import React from 'react'
import { Link } from 'react-router-dom'
import Btn1 from '../../../../components/ui/btn1/Btn1'
import "./slide.scss"

export default function Slide({slide}) {

    return (
        <div className="topBanner_slide">
            <img src={'./img/' + slide.bgImg } alt="" />
            <div className="topBanner_slide_dark"></div>
            <div className="topBanner_slide_content">
                <h1>{slide.title}</h1>
                {(slide.smallText) && <h4>{slide.smallText}</h4>}
                {(slide.action) && <Link to={slide.action}><Btn1 text={'ПІДТРИМАТИ НАС'} func={() => { }} /></Link>}
            </div>
        </div>
    )
}