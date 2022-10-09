import React, { useState } from 'react'
import CausesCard from '../../../components/CausesCard/CausesCard'
import "./causes.scss"
import bgImg from "../../../assets/img/europe_2_1.png"
import { useSelector } from 'react-redux'

export default function Causes() {

    let causes = useSelector((stats) => stats.globalReducer.causes)

    return (
        <div className="Causes">
            <div className="Causes_bgImg">
                <img src={bgImg} alt="" />
            </div>
            <h4>Програми фонду</h4>
            <h3>Поточні програми</h3>
            <div className="sectionCauses_w">
                <div className="inner">
                    {causes.map((cause, i) => {
                        if (i < 3) {
                            return <CausesCard key={cause.id} cause={cause} />
                        }
                    })}
                </div>
                
            </div>
        </div>
    )
}