import React from 'react'
import { Link } from 'react-router-dom'
import Btn2 from '../../../../components/ui/btn2/Btn2'
import { getCuttedString, getDayMonth } from '../../../../functions/helpers'
import "./NewsCard.scss"

export default function NewsCard({ item }) {
    return (
        <div className="NewsCard">
            <div className="News_card_img">
                <img src={'./img/' + item.img} alt="" />
                <div className="dark"></div>
            </div>
            <div className="News_card_authorCircle"></div>
            <div className="News_card_content">
                <div className="News_card_author">
                    <div className="News_card_authorImg">
                        <img src={'./img/' + item.author.avatar} alt="" />
                    </div>
                    <span className="News_card_authorName">{item.author.Name}</span>
                </div>
                <h4 className="title">{getCuttedString(item.title, 70)}</h4>
                <Link to={'/news/' + item.id}>
                    <Btn2 text={'Read More'} func={() => { }} />
                </Link>
            </div>
            <div className="News_card_bottom">
                <div className="left">
                    <div className="icon">
                        <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.503152 21.2906C0.503152 23.3374 2.1657 25 4.21257 25H19.6623C21.7092 25 23.3717 23.3374 23.3717 21.2906L23.3715 8.46249C23.3715 8.45943 23.3746 8.45311 23.3746 8.45006C23.3746 8.44701 23.3715 8.44069 23.3715 8.43764V5.82816C23.3715 3.87503 21.8496 2.28441 19.9278 2.14385V0.437488C19.9278 0.193783 19.731 0 19.4903 0H17.084C16.8403 0 16.6466 0.196835 16.6466 0.437488V2.11879H13.5778V0.437488C13.5778 0.193783 13.381 0 13.1403 0H10.734C10.4903 0 10.2965 0.196835 10.2965 0.437488V2.11879H7.22779L7.22801 0.437488C7.22801 0.193783 7.03118 0 6.79052 0H4.38422C4.14052 0 3.94674 0.196835 3.94674 0.437488V2.14691C2.02805 2.28751 0.503052 3.87509 0.503052 5.83122V8.43741C0.503052 8.44046 0.5 8.44679 0.5 8.44984C0.5 8.45289 0.503052 8.45921 0.503052 8.46226L0.503152 21.2906ZM17.5249 0.878241H19.0529V2.54386C19.0529 2.55018 19.0499 2.55629 19.0499 2.55956C19.0499 2.56588 19.0529 2.57198 19.0529 2.57525V4.24718H17.5249V0.878241ZM11.175 2.56284V2.55978V2.55673V0.878722H12.7031V2.55673V2.55978V2.56284V4.24721H11.175V2.56284ZM4.82178 2.57526C4.82178 2.56894 4.82483 2.56283 4.82483 2.55957C4.82483 2.55324 4.82178 2.54714 4.82178 2.54387V0.87825H6.34984V4.24694H4.82178V2.57526ZM1.37809 5.82843C1.37809 4.35662 2.5094 3.15969 3.94377 3.02213V4.68469C3.94377 4.92839 4.1406 5.12217 4.38126 5.12217H6.78756C7.03126 5.12217 7.22504 4.92534 7.22504 4.68469V2.9973H10.2938V4.68469C10.2938 4.92839 10.4906 5.12217 10.7313 5.12217H13.1376C13.3813 5.12217 13.5751 4.92534 13.5751 4.68469V2.9973H16.6438V4.68469C16.6438 4.92839 16.8406 5.12217 17.0813 5.12217H19.4876C19.7313 5.12217 19.9251 4.92534 19.9251 4.68469V3.02213C21.3594 3.15968 22.4908 4.35639 22.4908 5.82843V8.00979L1.37808 8.00957L1.37809 5.82843ZM1.37809 8.8878H22.4969V21.2912C22.4969 22.8537 21.225 24.1224 19.6625 24.1224H4.21218C2.64969 24.1224 1.37776 22.8504 1.37776 21.2912L1.37809 8.8878Z" fill="#cc9955" />
                            <path d="M4.38094 14.6031H6.78724C7.03094 14.6031 7.22473 14.4062 7.22473 14.1656V11.7593C7.22473 11.5156 7.02789 11.3218 6.78724 11.3218H4.38094C4.13723 11.3218 3.94345 11.5186 3.94345 11.7593V14.1656C3.94345 14.4062 4.14029 14.6031 4.38094 14.6031ZM4.82148 12.1937H6.35278V13.725H4.82148V12.1937Z" fill="#cc9955" />
                            <path d="M10.7342 14.6031H13.1435C13.3872 14.6031 13.581 14.4062 13.581 14.1656V11.7593C13.581 11.5156 13.3842 11.3218 13.1435 11.3218H10.7342C10.4905 11.3218 10.2967 11.5186 10.2967 11.7593V14.1656C10.2934 14.4062 10.4902 14.6031 10.7342 14.6031ZM11.1716 12.1937H12.7029V13.725H11.1716V12.1937Z" fill="#cc9955" />
                            <path d="M17.084 14.6031H19.4903C19.734 14.6031 19.9278 14.4062 19.9278 14.1656V11.7593C19.9278 11.5156 19.731 11.3218 19.4903 11.3218H17.084C16.8403 11.3218 16.6465 11.5186 16.6465 11.7593V14.1656C16.6465 14.4062 16.8436 14.6031 17.084 14.6031ZM17.5248 12.1937H19.0561V13.725H17.5248V12.1937Z" fill="#cc9955" />
                            <path d="M4.38094 20.3152H6.78724C7.03094 20.3152 7.22473 20.1184 7.22473 19.8777V17.4714C7.22473 17.2277 7.02789 17.0339 6.78724 17.0339H4.38094C4.13723 17.0339 3.94345 17.2308 3.94345 17.4714V19.8777C3.94345 20.1216 4.14029 20.3152 4.38094 20.3152ZM4.82148 17.9091H6.35278V19.4404H4.82148V17.9091Z" fill="#cc9955" />
                            <path d="M10.7342 20.3152H13.1435C13.3872 20.3152 13.581 20.1184 13.581 19.8777V17.4714C13.581 17.2277 13.3842 17.0339 13.1435 17.0339H10.7342C10.4905 17.0339 10.2967 17.2308 10.2967 17.4714V19.8777C10.2934 20.1216 10.4902 20.3152 10.7342 20.3152ZM11.1716 17.9091H12.7029V19.4404H11.1716V17.9091Z" fill="#cc9955" />
                            <path d="M17.084 20.3152H19.4903C19.734 20.3152 19.9278 20.1184 19.9278 19.8777V17.4714C19.9278 17.2277 19.731 17.0339 19.4903 17.0339H17.084C16.8403 17.0339 16.6465 17.2308 16.6465 17.4714V19.8777C16.6465 20.1216 16.8436 20.3152 17.084 20.3152ZM17.5248 17.9091H19.0561V19.4404H17.5248V17.9091Z" fill="#cc9955" />
                        </svg>
                    </div>
                    <span>{getDayMonth(item.newDate, 'num', false) + ' ' + getDayMonth(item.newDate, 'month', true)}</span>
                </div>
                <div className="right">
                    <div className="icon">
                        <svg viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9981 0C6.106 0.00364929 0.5 5.60949 0.5 12.5019C0.5 19.3942 6.10588 25 12.9981 25C19.8904 25 25.4963 19.3905 25.4963 12.5019C25.4963 5.60974 19.8904 0.00373692 12.9981 0ZM12.9981 23.5501C6.90907 23.5501 1.95366 18.5945 1.95366 12.5056C1.95366 6.41667 6.90919 1.46114 12.9981 1.4574C19.0872 1.4574 24.0426 6.41293 24.0426 12.5019C24.0426 18.5908 19.0871 23.5463 12.9981 23.5501Z" fill="#cc9955" />
                            <path d="M13.725 3.9093H12.2718V12.0801C12.2718 12.5995 12.5479 13.0793 12.9985 13.3372L20.0756 17.4244L20.8023 16.1673L13.7246 12.0801L13.725 3.9093Z" fill="#cc9955" />
                        </svg>
                    </div>
                    <span>{new Date(item.newDate).getHours() + ':' + new Date(item.newDate).getMinutes()}</span>
                </div>
            </div>
        </div>
    )
}