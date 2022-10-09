import React from 'react'
import "./btn2.scss"

export default function Btn2({ text, func }) {
    return (
        <button className="btn2" onClick={() => func()}>{text}</button>
    )
}