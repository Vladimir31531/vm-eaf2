import React, { useState } from 'react'
import Breadcrumbs from '../../components/ui/breadcrumbs/Breadcrumbs'
import Btn1 from '../../components/ui/btn1/Btn1'
import { useSelector } from 'react-redux'
import "./contacts.scss"
import { getClearPhone } from '../../functions/helpers'
import Socials from '../../components/ui/socials/Socials'

export default function Contacts() {

    let [breadcrumbsItems, setbreadcrumbsItems] = useState([
        {
            slug: '/',
            title: 'Головна',
        },
        {
            slug: '/contacts',
            title: 'Контакти',
        },
    ])

    let mainInfo = useSelector((state) => state.globalReducer.mainInfo)

    return (
        <main className="main">
            <Breadcrumbs items={breadcrumbsItems} />
            <div className="Contacts_w">
                <div className="Contacts_bgText">Зв'язатись</div>
                <h4>Контакти</h4>
                <h3>Зв'язатись</h3>
                <div className="ContactsPage_content">

                    <div className="contacts_text">
                        {mainInfo.contactsText}
                    </div>

                    <div className="contacts_infoAndForm">
                        <div className="contacts_info">
                            <div className="item">
                                <div className="title">
                                    <div className="icon">
                                        <svg viewBox="0 0 35 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M7.97389 27.2033C5.89674 28.7462 3.81833 30.2896 1.74132 31.8326C0.847269 32.4962 0.574494 33.6893 1.09176 34.676C3.7188 39.6906 9.73698 41.724 14.796 39.0798C25.1553 33.6649 32.1554 24.5271 34.6873 13.1153C35.9236 7.54236 32.3935 2.26089 26.8679 1.02985C25.7806 0.787249 24.6996 1.36116 24.2903 2.39739C23.3425 4.80441 22.3934 7.21294 21.4444 9.61999C20.9996 10.7492 21.3022 11.9795 22.2206 12.7719C23.4236 13.8113 24.6263 14.8505 25.8291 15.8887C24.3151 21.6268 20.3141 26.8494 15.168 29.8049C13.8525 28.9139 12.536 28.0231 11.2192 27.1322C10.2139 26.4519 8.94819 26.4798 7.97397 27.2032L7.97389 27.2033Z" fill="#cc9955" />
                                        </svg>
                                    </div>
                                    <span>Телефон</span>
                                </div>
                                <a href={"tel:" + getClearPhone(mainInfo.phone)}><span>{mainInfo.phone}</span></a>
                            </div>
                            <div className="item">
                                <div className="title">
                                    <div className="icon">
                                        <svg viewBox="0 0 37 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M36.9999 4.62502L18.4999 13.8753L0 4.62502V0H36.9999V4.62502Z" fill="#cc9955" />
                                            <path d="M0 6.93799V27.7503H36.9999V6.93799L18.4999 16.1883L0 6.93799Z" fill="#cc9955" />
                                        </svg>
                                    </div>
                                    <span>Email</span>
                                </div>
                                <a href={"mailto:" + mainInfo.email}><span>{mainInfo.email}</span></a>
                            </div>
                            <div className="item">
                                <div className="title">
                                    <div className="icon">
                                        <svg viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.5956 0.188477C5.24306 0.188477 0.09375 5.31145 0.09375 11.6296C0.09375 14.3074 1.00322 16.3742 3.10004 19.499C5.19516 22.6237 11.5956 31.1885 11.5956 31.1885C11.5956 31.1885 17.9963 22.6257 20.0875 19.499C22.186 16.3759 23.0938 14.3074 23.0938 11.6296C23.094 5.31145 17.9446 0.188477 11.5956 0.188477ZM11.5956 15.9554C9.1944 15.9554 7.24787 14.0188 7.24787 11.6298C7.24787 9.24434 9.1944 7.3043 11.5956 7.3043C13.9969 7.3043 15.9434 9.24427 15.9434 11.6298C15.9434 14.0188 13.9969 15.9554 11.5956 15.9554Z" fill="#cc9955" />
                                        </svg>
                                    </div>
                                    <span>Адреса</span>
                                </div>
                                {mainInfo.address.map((address) => {
                                    return <span key={address}>{address}</span>
                                })}
                            </div>

                            <div className="contacts_socials">
                                <Socials />
                            </div>
                        </div>
                        <div className="form">
                            <form>
                                <div className="row">
                                    <span className="label">Ім'я</span>
                                    <input type="text" placeholder="ex. “John”" />
                                </div>
                                <div className="row">
                                    <span className="label">Прізвище</span>
                                    <input type="text" placeholder="ex. “Wik”" />
                                </div>
                                <div className="row">
                                    <span className="label">Телефон</span>
                                    <input type="text" placeholder="ex. “+90 300 156652”" />
                                </div>
                                <div className="row">
                                    <span className="label">Email</span>
                                    <input type="text" placeholder="ex. “design@example.com”" />
                                </div>
                                <div className="row">
                                    <span className="label">Повідомлення</span>
                                    <textarea placeholder="Введіть ваше повідомлення"></textarea>
                                </div>
                                <div className="btn">
                                    <Btn1 text={'Надіслати повідомлення'} func={() => { }} />
                                </div>
                            </form>
                        </div>
                    </div>

                    

                    {/* <div className="map">
                        {mainInfo.map}
                    </div> */}  
                </div>
            </div>
        </main>
    )
}