import React from 'react'
import "./causesCard.scss"

import Btn1 from '../../components/ui/btn1/Btn1'
import Btn2 from '../../components/ui/btn2/Btn2'
import { getCuttedString, getRaisedIndex } from '../../functions/helpers'
import { Link } from 'react-router-dom'

export default function CausesCard({ cause }) {

    return (
        <div className="Causes_card">
            <div className="Causes_card_img">
                <img src={'./img/' + cause.img} alt="" />
            </div>
            <div className="Causes_card_donateBtn">
                <Link to={'/donate'}>
                    <Btn1
                        text={'ПІДТРИМАТИ НАС'}
                        func={() => { }}
                    />
                </Link>
            </div>
            <div className="Causes_card_content">
                <h4>{(window.innerWidth > 500) ? getCuttedString(cause.title, 73) : getCuttedString(cause.title, 35)}</h4>
                <div className="text">
                    <p>{getCuttedString(cause.text, 130)}</p>
                </div>
                <div className="slider">
                    <span className="range">
                        <span className="raised" style={{ width: (getRaisedIndex(cause.goal, cause.raised) * 100) + '%' }}></span>
                        <div className="thumb"><span>{(getRaisedIndex(cause.goal, cause.raised) * 100).toFixed()}%</span></div>
                    </span>
                </div>
                <Link to={'/causes/' + cause.id}>
                    <Btn2 text={'Читати далі'} func={() => { }} />
                </Link>
            </div>
            <div className="Causes_card_bottom">
                <div className="item">
                    <span className="left">Зібрано:</span>
                    <span className="right">${cause.raised}</span>
                </div>
                <div className="item">
                    <span className="left">Ціль:</span>
                    <span className="right">${cause.goal}</span>
                </div>
            </div>
        </div>
    )
}