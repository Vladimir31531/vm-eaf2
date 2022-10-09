import React, { useState } from 'react'
import "./stats.scss"

import StatsBg from "../../../assets/img/StatsBg.jpg"
import { useSelector } from 'react-redux'
import MuiModal from '../../../components/ui/mui_modal/MuiModal'
import VolunteerModal from '../../../components/VolunteerModal/VolunteerModal'
import { Link } from 'react-router-dom'

export default function Stats() {

    let stats = useSelector((stats) => stats.globalReducer.stats)

    let [showModal, setshowModal] = useState(false)

    let sx = (window.innerWidth > 500)
        ?
        {
            '& .MuiPaper-root': {
                maxWidth: 'fit-content',
                borderRadius: '2.2395833333vw',

                '&::-webkit-scrollbar': {
                    display: 'none'
                }
            }
        }
        :
        {
            '& .MuiPaper-root': {
                maxWidth: '85%',
                maxHeight: '85%',
                margin: 0,
                marginRight: 'auto',
                borderRadius: '3.2395833333vw',

                '&::-webkit-scrollbar': {
                    display: 'none'
                }
            }
        }

    
    if (stats.length > 0) {
        return (
            <div className="Stats">
                <div className="Stats_header">
                    <h4>Допомога</h4>
                    <h3>Ми надаємо допомогу</h3>
                    <p className="Stats_header_text">Нижче Ви можете побачити кнопки, натиснув на які зможете допомогти, тим хто цього потребує. Допомога важлива різна. Ви можете допомогти коштами, можете зробити репост, можете стати частиної нашої команди чи стати нашим партнером.</p>
                </div>
                <div className="Stats_w">
                    <div className="inner">
                        {stats.map((stat) => {
                            return (
                                <Link to={stat.link}>
                                    <div key={stat.link} className="Stats_item">
                                        <span className="num">
                                            <img src={'./img/' + stat.icon} alt="" />
                                        </span>
                                        <span className="text">{stat.title}</span>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <button className="Stats_volunteer_btn" onClick={() => setshowModal(true)}>
                    <div className="plus">
                        <svg viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="14" y1="1" x2="14" y2="27" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            <line x1="28" y1="14" x2="1" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <span>Become a Volunteer</span>
                </button>
                <MuiModal
                    content={<VolunteerModal setshowModal={setshowModal} />}
                    show={showModal}
                    setshowModal={setshowModal}
                    sx={sx}
                />
            </div>
        )
    } else {
        return ('')
    }
}