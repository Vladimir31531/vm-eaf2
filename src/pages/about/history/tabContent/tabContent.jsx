import React from 'react'
import "./tabContent.scss"

export default function TabContent({ content }) {
    return (
        <div className="tabContent">
            <div className="tabContent_img">
                <img src={'./img/' + content.img} alt="" />
            </div>
            <div className="tabContent_text">
                <h4 className="title">{content.title}</h4>
                <div className="text">
                    {content.text} 
                </div>
            </div>
        </div>
    )
}