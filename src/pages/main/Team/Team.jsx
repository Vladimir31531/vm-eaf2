import React from 'react'
import "./Team.scss"

export default function Team() {

    let team = [
        {
            id: 1,
            fio: 'Антон',
            img: 'Anton.JPG',
            position: 'Волонтер',
            social: [
                {
                    id: 1,
                    slug: 'twr',
                    link: 'https://twitter.com/',
                },
                {
                    id: 2,
                    slug: 'inst',
                    link: 'https://www.instagram.com/',
                },
                {
                    id: 3,
                    slug: 'fb',
                    link: 'https://facebook.com/',
                },
            ]
        },
        {
            id: 2,
            fio: 'Лиза',
            img: 'Liza.JPG',
            position: 'Волонтер',
            social: [
                {
                    id: 1,
                    slug: 'twr',
                    link: 'https://twitter.com/',
                },
                {
                    id: 2,
                    slug: 'inst',
                    link: 'https://www.instagram.com/',
                },
                {
                    id: 3,
                    slug: 'fb',
                    link: 'https://facebook.com/',
                },
            ]
        },
        {
            id: 3,
            fio: 'Татьяна',
            img: 'Tatiana.JPG',
            position: 'Волонтер',
            social: [
                {
                    id: 1,
                    slug: 'twr',
                    link: 'https://twitter.com/',
                },
                {
                    id: 2,
                    slug: 'inst',
                    link: 'https://www.instagram.com/',
                },
                {
                    id: 3,
                    slug: 'fb',
                    link: 'https://facebook.com/',
                },
            ]
        },
    ]

    return (
        <div className="Team">
            {/* <div className="Team_bgText">Наша команда</div> */}
            <h4>Команда</h4>
            <h3>Наша команда</h3>
            <div className="Team_content">
                {team.map((member) => {
                    return (
                        <div key={member.id} className="Team_Card">
                            <div className="img">
                                <img src={'./img/' + member.img} alt="" />
                            </div>
                            <h3 className="title">{member.fio}</h3>
                            <p className="position">{member.position}</p>
                            <div className="socials">
                                {member.social.map((link) => {
                                    switch (link.slug) {
                                        case 'twr':
                                            return (
                                                <a key={link.id} href={link.link}>
                                                    <div className="social_link">
                                                        <svg viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M20.5 1.92375C19.7563 2.25 18.9637 2.46625 18.1375 2.57125C18.9875 2.06375 19.6363 1.26625 19.9412 0.305C19.1488 0.7775 18.2738 1.11125 17.3412 1.2975C16.5887 0.49625 15.5162 0 14.3462 0C12.0763 0 10.2487 1.8425 10.2487 4.10125C10.2487 4.42625 10.2762 4.73875 10.3438 5.03625C6.935 4.87 3.91875 3.23625 1.8925 0.7475C1.53875 1.36125 1.33125 2.06375 1.33125 2.82C1.33125 4.24 2.0625 5.49875 3.1525 6.2275C2.49375 6.215 1.8475 6.02375 1.3 5.7225C1.3 5.735 1.3 5.75125 1.3 5.7675C1.3 7.76 2.72125 9.415 4.585 9.79625C4.25125 9.8875 3.8875 9.93125 3.51 9.93125C3.2475 9.93125 2.9825 9.91625 2.73375 9.86125C3.265 11.485 4.7725 12.6788 6.565 12.7175C5.17 13.8088 3.39875 14.4662 1.48125 14.4662C1.145 14.4662 0.8225 14.4513 0.5 14.41C2.31625 15.5813 4.46875 16.25 6.79 16.25C14.335 16.25 18.46 10 18.46 4.5825C18.46 4.40125 18.4538 4.22625 18.445 4.0525C19.2588 3.475 19.9425 2.75375 20.5 1.92375Z" fill="white" />
                                                        </svg>
                                                    </div>
                                                </a>
                                            )
                                        case 'inst':
                                            return (
                                                <a key={link.id} href={link.link}>
                                                    <div className="social_link">
                                                        <svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M14.25 0H6.75C3.29875 0 0.5 2.79875 0.5 6.25V13.75C0.5 17.2013 3.29875 20 6.75 20H14.25C17.7013 20 20.5 17.2013 20.5 13.75V6.25C20.5 2.79875 17.7013 0 14.25 0ZM18.625 13.75C18.625 16.1625 16.6625 18.125 14.25 18.125H6.75C4.3375 18.125 2.375 16.1625 2.375 13.75V6.25C2.375 3.8375 4.3375 1.875 6.75 1.875H14.25C16.6625 1.875 18.625 3.8375 18.625 6.25V13.75Z" fill="white" />
                                                            <path d="M10.5 5C7.73875 5 5.5 7.23875 5.5 10C5.5 12.7613 7.73875 15 10.5 15C13.2613 15 15.5 12.7613 15.5 10C15.5 7.23875 13.2613 5 10.5 5ZM10.5 13.125C8.7775 13.125 7.375 11.7225 7.375 10C7.375 8.27625 8.7775 6.875 10.5 6.875C12.2225 6.875 13.625 8.27625 13.625 10C13.625 11.7225 12.2225 13.125 10.5 13.125Z" fill="white" />
                                                            <path d="M15.875 5.29124C16.2429 5.29124 16.5412 4.99295 16.5412 4.62499C16.5412 4.25703 16.2429 3.95874 15.875 3.95874C15.507 3.95874 15.2087 4.25703 15.2087 4.62499C15.2087 4.99295 15.507 5.29124 15.875 5.29124Z" fill="white" />
                                                        </svg>
                                                    </div>
                                                </a>
                                            )
                                        case 'fb':
                                            return (
                                                <a key={link.id} href={link.link}>
                                                    <div className="social_link">
                                                        <svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M18 0H3C1.62125 0 0.5 1.12125 0.5 2.5V17.5C0.5 18.8787 1.62125 20 3 20H10.5V13.125H8V10H10.5V7.5C10.5 5.42875 12.1788 3.75 14.25 3.75H16.75V6.875H15.5C14.81 6.875 14.25 6.81 14.25 7.5V10H17.375L16.125 13.125H14.25V20H18C19.3787 20 20.5 18.8787 20.5 17.5V2.5C20.5 1.12125 19.3787 0 18 0Z" fill="white" />
                                                        </svg>
                                                    </div>
                                                </a>
                                            )
                                            break;

                                        default:
                                            break;
                                    }
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}