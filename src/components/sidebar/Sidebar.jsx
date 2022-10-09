import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedNewsCategs } from "../../redux_store/globalReducer"
import { Link, useLocation } from 'react-router-dom'
import { getCuttedString, getPopularNews } from '../../functions/helpers'
import Btn2 from '../ui/btn2/Btn2'
import "./Sidebar.scss"

export default function Sidebar({ news, categs, setsearchQuery, page, openSidebar, setopenSidebar }) {

    let filter = useSelector((state) => state.globalReducer.selectedNewsCategs)

    let dispatch = useDispatch()

    let location = useLocation()
    let slug = location.pathname.split('/')

    // let [openSidebar, setopenSidebar] = useState(false);

    return (
        <div className="SingleNew_sidebar">
            <div
                className={"sidebar_close"}
                onClick={() => setopenSidebar(false)}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="sidebar_block">
                <h4 className="title">Пошук</h4>
                <div className="sidebar_block_content">
                    <form className="sidebar_searchForm" onSubmit={(e) => { e.preventDefault(); setsearchQuery(e.target[0].value); setopenSidebar(false) }}>
                        <input type="text" placeholder="Пошук ..." />
                        <button type="submit">
                            <svg viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.72 8.88316C15.72 13.295 12.3685 16.7663 8.36 16.7663C4.3515 16.7663 1 13.295 1 8.88316C1 4.47136 4.3515 1 8.36 1C12.3685 1 15.72 4.47136 15.72 8.88316Z" strokeWidth="2" />
                                <line y1="-1" x2="10.2723" y2="-1" transform="matrix(0.685338 0.728225 -0.685338 0.728225 13.2002 15.8962)" strokeWidth="2" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
            {(Object.entries(categs).length > 0)
                &&
                <div className="sidebar_block">
                    <h4 className="title">Категорії</h4>
                    <div className="sidebar_block_content">
                        <ul className="sidebar_categs">
                            {Object.entries(categs).map((categ) => {
                                if (page == 'news') {
                                    return (
                                        <Link key={categ[1].slug} to={'/news'}>
                                            <li
                                                style={{
                                                    fontWeight: (filter.includes(categ[1].slug)) ? 700 : 500,
                                                    color: ((window.innerWidth > 500) ? '#fff' : (filter.includes(categ[1].slug)) ? '#cc9955' : '#fff')
                                                }}
                                                onClick={() => {
                                                    setopenSidebar(false);
                                                    dispatch(setSelectedNewsCategs(categ[1].slug));
                                                }}>
                                                {categ[1].title}
                                            </li>
                                        </Link>
                                    )
                                } else if (page == 'causes') {
                                    return (
                                        <Link key={categ[1].slug} to={'/causes'}>
                                            <li
                                                style={{
                                                    fontWeight: (filter.includes(categ[1].slug)) ? 700 : 500,
                                                    color: ((window.innerWidth > 500) ? '#fff' : (filter.includes(categ[1].slug)) ? '#cc9955' : '#fff')
                                                }}
                                                onClick={() => {
                                                    setopenSidebar(false);
                                                    dispatch(setSelectedNewsCategs(categ[1].slug));
                                                }}>
                                                {categ[1].title}
                                            </li>
                                        </Link>
                                    )
                                }
                            })}
                        </ul>
                    </div>
                </div>
            }
            <div className="sidebar_block">
                <h4 className="title">Популярні пости</h4>
                <div className="sidebar_block_content">
                    {
                        (slug[1] == 'news') ?
                            getPopularNews(news, ((page == 'news') ? 'views' : (page == 'causes') && 'donators')).map((item, i) => {
                                if (i < 3) {
                                    return (
                                        <div key={item.id} className="small_newCard">
                                            <div className="img">
                                                <img src={'../img/' + item.img} alt="" />
                                            </div>
                                            <div className="content">
                                                <h5 className="title">{getCuttedString(item.title, 30)}</h5>
                                                <Link to={'/news/' + item.id} className="button">
                                                    <Btn2 text={'Читати далі'} func={() => { }} />
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        :(slug[1] == 'causes') &&
                            getPopularNews(news, ((page == 'causes') ? 'views' : (page == 'causes') && 'donators')).map((item, i) => {
                                if (i < 3) {
                                    return (
                                        <div key={item.id} className="small_newCard">
                                            <div className="img">
                                                <img src={'../img/' + item.img} alt="" />
                                            </div>
                                            <div className="content">
                                                <h5 className="title">{getCuttedString(item.title, 30)}</h5>
                                                <Link to={'/causes/' + item.id} className="button">
                                                    <Btn2 text={'Читати далі'} func={() => { }} />
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                    }
                </div>
            </div>
        </div>
    )
}