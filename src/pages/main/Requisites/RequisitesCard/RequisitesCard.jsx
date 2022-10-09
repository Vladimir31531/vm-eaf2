import React from 'react'
import Copy from '../../../../components/ui/copy/Copy'
import "./RequisitesCard.scss"

export default function RequisitesCard({ item }) {

    return (
        <div className="RequisitesCard">
            {item.map((row) => {
                if (row.title) {
                    return (
                        <div key={row.id} className="RequisitesCard_row">
                            <div className="left">
                                <h4 className="title">{row.title}:</h4>
                                <p>{row.value}</p>
                            </div>

                            <Copy copyValue={row.value}/>
                        </div>
                    )
                }
            })}
        </div>
    )
}