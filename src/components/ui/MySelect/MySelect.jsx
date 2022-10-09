import React, { useState } from 'react'
import { getCuttedString } from '../../../functions/helpers'
import "./MySelect.scss"

export default function MySelect({ items, SelectedItem, setSelectedItem }) {

    let [SelectedRow, setSelectedRow] = useState(items[0])

    let [dropOpen, setdropOpen] = useState(false)

    return (
        <div className="MySelect">
            <div className="MySelect_btn" onClick={() => setdropOpen(!dropOpen)}>
                <div className="MySelect_selected">
                    <div className="donateSelect">
                        <div className="img">
                            <img src={'./img/' + SelectedRow.img} alt="" />
                        </div>
                        <div className="content">
                            <h5 className="title">{SelectedRow.title}</h5>
                            <div className="item">
                                <div className="left">Goal:</div>
                                <div className="right">${SelectedRow.goal}</div>
                            </div>
                            <div className="item">
                                <div className="left">Raised:</div>
                                <div className="right">${SelectedRow.raised}</div>
                            </div>
                            <div className="text">{getCuttedString(SelectedRow.text, 230)}</div>
                        </div>
                    </div>
                </div>
                <div className="MySelect_arrow">
                    <svg viewBox="0 0 32 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L16 16L30 2" stroke="white" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                </div>
            </div>
            <div className={"MySelect_dropdown " + ((dropOpen) && "showDrop")}>
                {items.map((item) => {
                    return (
                        <div key={item.id} className="MySelect_dropRow" onClick={() => { setdropOpen(false); setSelectedRow(item); setSelectedItem({ ...SelectedItem, selectedCause: item.id })}}>
                            <div className="donateSelect">
                                <div className="img">
                                    <img src={'./img/' + item.img} alt="" />
                                </div>
                                <div className="content">
                                    <h5 className="title">{item.title}</h5>
                                    <div className="item">
                                        <div className="left">Goal:</div>
                                        <div className="right">${item.goal}</div>
                                    </div>
                                    <div className="item">
                                        <div className="left">Raised:</div>
                                        <div className="right">${item.raised}</div>
                                    </div>
                                    <div className="text">{getCuttedString(item.text, 230)}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}