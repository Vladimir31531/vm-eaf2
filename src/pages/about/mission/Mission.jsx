import React from 'react'
import "./mission.scss"

export default function Mission({ mission }) {
    return (
        <div className="Mission">
            {mission.map((row) => {
                return (
                    <div key={row.id} className="Mission_row">
                        <div className="item text">
                            <h4>{row.smallTitle}</h4>
                            <h3>{row.bigTitle}</h3>
                            <div className="Mission_row_text">
                                {(typeof row.text == 'string')
                                    ?
                                    <p>{row.text}</p>
                                    : (typeof row.text == 'object') &&
                                    row.text
                                }
                                
                            </div>
                        </div>
                        <div className="item img">
                            {(row.images)
                                ?
                                <>
                                    {row.images.map((img, i) => {
                                        if (i < 2) {
                                            return <img key={img} src={'./img/' + img} alt="" />
                                        }
                                    })}
                                </>
                                :
                             (row.video)
                                &&
                                <video controls="controls">
                                    <source src={'./img/' + row.video} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'></source>
                                </video>
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}