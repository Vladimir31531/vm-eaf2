import React, { useState } from 'react'
import { copyToClipboard } from '../../../functions/helpers'
import "./Copy.scss"

export default function Copy({ copyValue }) {

    let [showAlertCopied, setshowAlertCopied] = useState(false)

    return (
        <div className="copyBtn" onClick={() => {
            copyToClipboard(copyValue)
            setshowAlertCopied(true)
            setTimeout(() => {
                setshowAlertCopied(false)
            }, 2000);
        }}>
            <svg viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_354_1611)">
                    <path d="M10.14 20.8125C7.69939 20.8125 5.71289 18.826 5.71289 16.3853V5.70837H3.89004C2.3098 5.70837 1.02539 6.99259 1.02539 8.57283V22.6353C1.02539 24.2156 2.3098 25.5 3.89004 25.5H16.9107C18.491 25.5 19.7754 24.2156 19.7754 22.6353V20.8125H10.14Z" fill="black" />
                    <path d="M23.942 3.36465C23.942 1.78231 22.6597 0.5 21.0775 0.5H10.14C8.5577 0.5 7.27539 1.78231 7.27539 3.36465V16.3854C7.27539 17.9677 8.5577 19.25 10.14 19.25H21.0775C22.6597 19.25 23.942 17.9677 23.942 16.3854V3.36465Z" fill="black" />
                </g>
                <defs>
                    <clipPath id="clip0_354_1611">
                        <rect width="25" height="25" fill="white" transform="translate(0 0.5)" />
                    </clipPath>
                </defs>
            </svg>

            <div className={"my_alert " + ((showAlertCopied) && "show")}>скопійовано</div>
        </div>
    )
}