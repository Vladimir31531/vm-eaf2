import React from 'react'
import { Link } from 'react-router-dom'
import "./breadcrumbs.scss"

export default function Breadcrumbs({ items }) {
    return (
        <div className="breadcrumbs">
            {items.map((item, i) => {
                return (<Link key={item.slug} to={item.slug}><span className={"crumb " + ((i == items.length - 1) ? "crumb_curr" : "")}>{item.title}{(i !== items.length - 1) && ' / '}</span></Link>)
            })}
        </div>
    )
}