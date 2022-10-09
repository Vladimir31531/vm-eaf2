import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import Btn2 from '../../../../components/ui/btn2/Btn2'
import { getCuttedString, getDayMonth, getTimePeriod } from '../../../../functions/helpers';
import "./eventsCard.scss"

export default function EventsCard({small, event}) {

    let location = useLocation()

    return (
        <>
            {(small)
                ?
                <div className="Events_card">
                    <div className="Events_card_date">
                        <span className="num">{getDayMonth(event.eventStart, 'num', false)}</span>
                        <span className="month">{getDayMonth(event.eventStart, 'month', false)}</span>
                    </div>
                    <div className="Events_card_content">
                        <div className="time">
                            <span className="icon">
                                <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.4984 0C4.70904 0.0030654 0 4.71197 0 10.5016C0 16.2912 4.70894 21 10.4984 21C16.2879 21 20.9969 16.288 20.9969 10.5016C20.9969 4.71218 16.2879 0.00313901 10.4984 0ZM10.4984 19.7821C5.38362 19.7821 1.22108 15.6194 1.22108 10.5047C1.22108 5.39 5.38372 1.22735 10.4984 1.22422C15.6132 1.22422 19.7758 5.38686 19.7758 10.5016C19.7758 15.6163 15.6131 19.7789 10.4984 19.7821Z" fill="#0AABC1" />
                                    <path d="M11.109 3.28381H9.88831V10.1473C9.88831 10.5836 10.1203 10.9866 10.4987 11.2032L16.4435 14.6365L17.0539 13.5806L11.1086 10.1473L11.109 3.28381Z" fill="#0AABC1" />
                                </svg>
                            </span>
                            <span className="text">{getTimePeriod(event.eventStart, event.eventEnd)}</span>
                        </div>
                        <h5>{(window.innerWidth > 500) ? getCuttedString(event.title, 73) : getCuttedString(event.title, 35)}</h5>
                        <div className="text">
                            <p>{getCuttedString(event.excerpt, 42)}</p>
                        </div>
                    </div>
                </div>
                :
                <div className="Events_card Events_card_big">
                    <div className="Events_card_date">
                        <span className="num">{getDayMonth(event.eventStart, 'num', true)}</span>
                        <span className="month">{getDayMonth(event.eventStart, 'month', true)}</span>
                    </div>
                    <div className="Events_card_img">
                        <img src={'./img/' + event.img} alt="" />
                    </div>
                    <div className="Events_card_content">
                        <div className="time">
                            <span className="icon">
                                <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.4984 0C4.70904 0.0030654 0 4.71197 0 10.5016C0 16.2912 4.70894 21 10.4984 21C16.2879 21 20.9969 16.288 20.9969 10.5016C20.9969 4.71218 16.2879 0.00313901 10.4984 0ZM10.4984 19.7821C5.38362 19.7821 1.22108 15.6194 1.22108 10.5047C1.22108 5.39 5.38372 1.22735 10.4984 1.22422C15.6132 1.22422 19.7758 5.38686 19.7758 10.5016C19.7758 15.6163 15.6131 19.7789 10.4984 19.7821Z" fill="#cc9955" />
                                    <path d="M11.109 3.28381H9.88831V10.1473C9.88831 10.5836 10.1203 10.9866 10.4987 11.2032L16.4435 14.6365L17.0539 13.5806L11.1086 10.1473L11.109 3.28381Z" fill="#cc9955" />
                                </svg>
                            </span>
                            <span className="text">{getTimePeriod(event.eventStart, event.eventEnd)}</span>
                        </div>
                        <h5>{(window.innerWidth > 500) ? getCuttedString(event.title, 55) : getCuttedString(event.title, 35)}</h5>
                        <div className="text">
                            <p>{getCuttedString(event.mainText, ((location.pathname == '/events' && window.innerWidth <= 500) ? 68 : 190))}</p>
                        </div>
                    </div>
                    <div className="Events_card_btn">
                        <Link to={'/events/' + event.id}>
                            <Btn2 text={'Читать далі'} func={() => {}} />
                        </Link>
                    </div>
                </div>
            }
        </>
    )
}