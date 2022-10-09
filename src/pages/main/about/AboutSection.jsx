import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Btn2 from '../../../components/ui/btn2/Btn2'
import { getCuttedString } from '../../../functions/helpers'
import "./AboutSection.scss"

export default function AboutSection() {

    let aboutSection = []
    aboutSection[0] = useSelector((state) => state.globalReducer.aboutPage.mission[0])

    return (
        <div className="AboutSection">
            <div className="AboutSection_bgText">Про нас</div>
            <div className="AboutSection_images">
                {aboutSection[0].images.map((img, i) => (<img key={i} src={'./img/' + img} alt="" className={"img" + (i + 1)} />))}
            </div>
            <div className="AboutSection_content">
                <h4>Про нас</h4>
                <h3>{aboutSection[0].bigTitle}</h3>
                <div className="text">
                    <p>{getCuttedString(aboutSection[0].text, 95)}</p>
                </div>
                <Link to={'/about'}>
                    <Btn2 text={'Читати далі'} func={() => { }} />
                </Link>
            </div>
        </div>
    )
}