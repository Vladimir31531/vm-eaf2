import React from 'react'
import "./btn1.scss"

export default function Btn1({ text, func }) {
    return (
        <button className="btn1" onClick={() => func()}>{text}</button>
    )
}