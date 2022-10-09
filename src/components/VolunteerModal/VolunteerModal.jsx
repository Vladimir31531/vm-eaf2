import React, { useState } from 'react'
import "./VolunteerModal.scss"

import bg from "../../assets/img/modalBgImg.png"

export default function VolunteerModal({ setshowModal }) {

    let [volunteerModal, setvolunteerModal] = useState({})

    let [showAlert, setshowAlert] = useState(false)


    // Прининмаем данные из формы
    let handleSubmit = (e) => {
        e.preventDefault()
        let form = e.target
        let obj = {}
        for (let i = 0; i < form.length; i++) {
            if (form[i].type !== 'submit') {
                obj[form[i].name] = form[i].value
                form[i].value = ''
            }
        }

        // obj - это готовый объект с данными из формы

        setvolunteerModal({...obj})
        setshowAlert(true)
        setTimeout(() => {
            setshowModal(false)
        }, 2000);
    }

    return (
        <div className="VolunteerModal">
            <div className="VolunteerModal_bgImg">
                <img src={bg} alt="" />
            </div>
            <div className="VolunteerModal_content">
                <h3 className="title">Become a Volunteer</h3>

                {(showAlert)
                    ?
                    <div className="alert">your message has been successfully sent</div>
                    :
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input type="text" name="name" placeholder="Name" />
                        <input type="text" name="phone" placeholder="Phone" />
                        <input type="text" name="email" placeholder="E-mail" />
                        <textarea name="message" placeholder="Message"></textarea>
                        <button type="submit">Send</button>
                    </form>
                }
            </div>
        </div>
    )
}