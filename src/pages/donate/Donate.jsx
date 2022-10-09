import React, { useEffect, useState } from 'react'
import "./donate.scss"
import Breadcrumbs from '../../components/ui/breadcrumbs/Breadcrumbs'
import MySelect from '../../components/ui/MySelect/MySelect'
import { useSelector } from 'react-redux'
import { getCuttedString } from '../../functions/helpers'
import Btn1 from '../../components/ui/btn1/Btn1'
import Requisites from '../main/Requisites/Requisites'

export default function Donate() {

    let breadcrumbsItems = [
        {
            slug: '/',
            title: 'Головна',
        },
        {
            slug: '/donate',
            title: 'Підтримати',
        },
    ]

    let amounts = [10, 20, 50, 100, 200]
    let [selectedAmount, setselectedAmount] = useState(1)

    let causes = useSelector((state) => state.globalReducer.causes)


    // Форма для данных донатера
    let [donateForm, setdonateForm] = useState({
        donateAmount: 0,
        selectedCause: null, // Выбранный донат
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    })


    // Принимаем данные из формы
    let handleSubmit = (e) => {
        e.preventDefault()
        let form = e.target
        let obj = {}
        for (let i = 0; i < form.length; i++) {
            obj[form[i].name] = form[i].value
        }
        setdonateForm({ ...donateForm, ...obj })
        for (let i = 0; i < form.length; i++) {
            form[i].value = ''
        }
    }

    useEffect(() => {
        window.onload = () => {
            let iframe = document.getElementById("donateIframe");
            let iframeContent = iframe.contentDocument;
            iframeContent.body.innerHTML = iframeContent.body.innerHTML +
            `<style>
                .donation-widget {
                    margin: 0;
                }
                .basic-color-background {
                    background-color: #000;
                }
            </style>`;
        }
    })







    

    return (
        <main className="main">
            <Breadcrumbs items={breadcrumbsItems} />

            <div className="Donate_w">
                <div className="Causes_bgText">Підтримати</div>
                <h4>Підтримати</h4>
                <h3>Підтримати нас фінансово</h3>
                {/* <div className="Donate_content">

                    <form id="donate_form" onSubmit={(e) => handleSubmit(e)}></form>

                    <div className="row">
                        <h4 className="title">How much would you like to donate?</h4>
                        <div className="row_content">
                            <div className="donate_amount">
                                {amounts.map((item, i) => {
                                    return <div key={i} className={"donate_item " + ((selectedAmount == i + 1) && "donate_item_selected")} onClick={() => {
                                        setselectedAmount(i + 1)
                                        setdonateForm({ ...donateForm, donateAmount: item })
                                    }} >${item}</div>
                                })}
                                <input type="text" placeholder="or Give a Custom Amount" name="amount" value={donateForm.donateAmount} onChange={(e) => {
                                    setselectedAmount(null)
                                    setdonateForm({ ...donateForm, donateAmount: e.target.value })
                                }} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <h4 className="title">Сhoose cause</h4>
                        <div className="row_content">
                            <MySelect
                                items={causes}
                                setSelectedItem={setdonateForm}
                                SelectedItem={donateForm}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <h4 className="title">Personal Information</h4>
                        <div className="row_content donate_form_row">
                            <div className="donator_info">
                                <input form="donate_form" name="firstName" type="text" placeholder="First Name" />
                                <input form="donate_form" name="lastName" type="text" placeholder="Last Name" />
                                <input form="donate_form" name="email" type="text" placeholder="Email" />
                                <input form="donate_form" name="phone" type="text" placeholder="Phone" />
                                <textarea form="donate_form" name="message" placeholder="Your Message"></textarea>
                            </div>
                            <button form="donate_form" className="donate_form_btn">donate</button>
                        </div>
                    </div>
                </div> */}

                <div className="donate_inner">
                    <iframe id="donateIframe" src="https://donorbox.org/embed/europeanassistancefund?default_interval=o&enable_auto_scroll=false" name="donorbox" allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameBorder="0" scrolling="no" width="100%" style={{ maxWidth: '423px', minHeight: '600px', minWidth: '250px', maxHeight: 'none!important' }}></iframe>

                    <div className="forms_btns">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdhIYUK98aMXCa6xzi46Oy-DYqBERT4rFjv8R9GEGFxgjBxtQ/viewform" target="_blank">
                            <div className="form_link">
                                <h3 className="title">Заявка на допомгу</h3>
                                <div className="text">Ми будемо дуже раді бачити кожного в нашій дружній команді, тому натиснувши кнопку - ви можете заповнити форму для волонтерів та стати одним із нас</div>
                                <div className="arrow">
                                    <svg viewBox="0 0 77 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M76.0607 13.0607C76.6464 12.4749 76.6464 11.5251 76.0607 10.9393L66.5147 1.3934C65.9289 0.807611 64.9792 0.807611 64.3934 1.3934C63.8076 1.97919 63.8076 2.92893 64.3934 3.51472L72.8787 12L64.3934 20.4853C63.8076 21.0711 63.8076 22.0208 64.3934 22.6066C64.9792 23.1924 65.9289 23.1924 66.5147 22.6066L76.0607 13.0607ZM0 13.5H75V10.5H0V13.5Z" fill="black" />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSezukLw9XSyfp9ifIWBUrk10chm5wtIWNb_TBKsnh1B1LbK5g/viewform" target="_blank">
                            <div className="form_link">
                                <h3 className="title">АНКЕТА ДЛЯ ВОЛОНТЕРОВ</h3>
                                <div className="text">Ми будемо дуже раді бачити кожного в нашій дружній команді, тому натиснувши кнопку - ви можете заповнити форму для волонтерів та стати одним із нас</div>
                                <div className="arrow">
                                    <svg viewBox="0 0 77 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M76.0607 13.0607C76.6464 12.4749 76.6464 11.5251 76.0607 10.9393L66.5147 1.3934C65.9289 0.807611 64.9792 0.807611 64.3934 1.3934C63.8076 1.97919 63.8076 2.92893 64.3934 3.51472L72.8787 12L64.3934 20.4853C63.8076 21.0711 63.8076 22.0208 64.3934 22.6066C64.9792 23.1924 65.9289 23.1924 66.5147 22.6066L76.0607 13.0607ZM0 13.5H75V10.5H0V13.5Z" fill="black" />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc3bTiVd-YpjddOXzETX4HtaqmrQYdPk4It_xhRrrj6bBXL4Q/viewform" target="_blank">
                            <div className="form_link">
                                <h3 className="title">Заявка на допомогу від дитячого психолога</h3>
                                <div className="text">Якщо Ваша дитина потребує психологічної консультації, натиснувши сюди, ви можете заповнити форму для її отримання.</div>
                                <div className="arrow">
                                    <svg viewBox="0 0 77 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M76.0607 13.0607C76.6464 12.4749 76.6464 11.5251 76.0607 10.9393L66.5147 1.3934C65.9289 0.807611 64.9792 0.807611 64.3934 1.3934C63.8076 1.97919 63.8076 2.92893 64.3934 3.51472L72.8787 12L64.3934 20.4853C63.8076 21.0711 63.8076 22.0208 64.3934 22.6066C64.9792 23.1924 65.9289 23.1924 66.5147 22.6066L76.0607 13.0607ZM0 13.5H75V10.5H0V13.5Z" fill="black" />
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>

                <Requisites />
                
            </div>

            
        </main>
    )
}