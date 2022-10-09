/* import React from 'react'

export default function Search() {
    return (
        <main className="main">Search</main>
    )
} */
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CausesCard from '../../components/CausesCard/CausesCard'
import Breadcrumbs from '../../components/ui/breadcrumbs/Breadcrumbs'
import MuiPagination from '../../components/ui/pagination/Pagination'
import { getRandomStr, useCurrentPagePosts } from '../../functions/helpers'
import EventsCard from '../main/events/eventsCard/EventsCard'
import NewsCard from '../main/news/NewsCard/NewsCard'
import "./Search.scss"

export default function Search() {

    let globalSearchQuery = useSelector((state) => state.globalReducer.globalSearchQuery)

    let [searchedItems, setsearchedItems] = useState([])

    let breadcrumbsItems = [
        {
            slug: '/',
            title: 'Главная',
        },
        {
            slug: '',
            title: 'Поисковой запрос: ' + '"' + globalSearchQuery + '"',
        },
    ]

    let news = [...useSelector((state) => state.globalReducer.news)]
    let events = [...useSelector((state) => state.globalReducer.events)]
    let causes = [...useSelector((state) => state.globalReducer.causes)]

    useEffect(() => {
        let searchedItems = []

        news.forEach(e => {
            let Str = e.author.Name.toLowerCase() + ' ' + e.title.toLowerCase() + ' '
            e.content.forEach(item => {
                if (item.type === 'text' && typeof item.text !== 'object') {
                    Str = Str + item.text.toLowerCase() + ' '
                }
            });
            if (Str.includes(globalSearchQuery.toLowerCase())) {
                let obj = { ...e }
                obj['posttype'] = 'new'
                searchedItems.push(obj)
            }
        })
        events.forEach(e => {
            let Str = e.title.toLowerCase() + ' ' + e.excerpt.toLowerCase() + ' ' + e.mainText.toLowerCase()
            if (Str.includes(globalSearchQuery.toLowerCase())) {
                let obj = { ...e }
                obj['posttype'] = 'event'
                searchedItems.push(obj)
            }
        })
        causes.forEach(e => {
            let Str = e.title.toLowerCase() + ' ' + e.text.toLowerCase() + ' '
            e.content.forEach(item => {
                if (item.type === 'text' && typeof item.text !== 'object') {
                    Str = Str + item.text.toLowerCase() + ' '
                } else if (item.type === 'question') {
                    Str = Str + item.text.toLowerCase() + ' ' + item.question.toLowerCase() + ' '
                }
            });
            if (Str.includes(globalSearchQuery.toLowerCase())) {
                let obj = {...e}
                obj['posttype'] = 'cause'
                searchedItems.push(obj)
            }
        })

        setsearchedItems(searchedItems)

    }, [globalSearchQuery])

    

    // Индекс текущей страницы
    let [currentPage, setcurrentPage] = useState(1)
    // Количество элементов на страницу
    let [ItemsPerPage, setItemsPerPage] = useState(6)
    // Количество страниц
    let [pagesCount, setpagesCount] = useState(0)

    // Рассчитывает количество страниц
    useEffect(() => {
        setpagesCount(Math.ceil(searchedItems.length / ItemsPerPage))
    }, [searchedItems])

    let [paginationItems] = useCurrentPagePosts(currentPage, ItemsPerPage, searchedItems)

    let customPagesStyles = (window.innerWidth > 500)
        ?
        {
            '& .MuiPagination-ul': {
                gap: '0.9375vw'
            },
            '& .MuiPaginationItem-root.MuiPaginationItem-page': {
                width: '2.0833333333vw',
                height: '2.0833333333vw',
                backgroundColor: '#B1B2B3',
                borderRadius: '50%',
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '1.0416666667vw',
                lineHeight: '1.25vw',
                textAlign: 'center',
                color: '#FFFFFF',
                /* margin: '0 0.27778vw', */
                cursor: 'pointer',
                transition: '0.3s',
            },

            '& .MuiPaginationItem-root.MuiPaginationItem-page.Mui-selected': {
                backgroundColor: '#0AABC1',
                color: '#fff',
            },
            '& .MuiPaginationItem-root.MuiPaginationItem-previousNext': {

                width: '2.0833333333vw',
                height: '2.0833333333vw',
                backgroundColor: '#b1b2b36e',
                borderRadius: '50%',

                '& .MuiSvgIcon-root': {
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    fill: '#fff',
                }
            }
        }
        :
        {
            '& .MuiPagination-ul': {
                gap: '0.9375vw'
            },
            '& .MuiPaginationItem-root.MuiPaginationItem-page': {
                width: '8.0833333333vw',
                height: '8.0833333333vw',
                backgroundColor: '#B1B2B3',
                borderRadius: '50%',
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '3.0416666667vw',
                lineHeight: '3.25vw',
                textAlign: 'center',
                color: '#FFFFFF',
                /* margin: '0 0.27778vw', */
                cursor: 'pointer',
                transition: '0.3s',
            },

            '& .MuiPaginationItem-root.MuiPaginationItem-page.Mui-selected': {
                backgroundColor: '#0AABC1',
                color: '#fff',
            },
            '& .MuiPaginationItem-root.MuiPaginationItem-previousNext': {

                width: '8.0833333333vw',
                height: '8.0833333333vw',
                backgroundColor: '#b1b2b36e',
                borderRadius: '50%',

                '& .MuiSvgIcon-root': {
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    fill: '#fff',
                }
            }
        }

    return (
        <main className="main">
            <Breadcrumbs items={breadcrumbsItems} />
            <div className="Events_w">
                {/* <div className="Events_bgText">Поисковой запрос</div> */}
                <h4>Результаты поиска</h4>
                {/* <h3>Our Events</h3> */}
                <div className="EventsPage_content search_wrapper">
                    {(paginationItems.length > 0) ?
                        paginationItems.map((item) => {
                            if (item.posttype == 'new') {
                                return <NewsCard key={getRandomStr(15)} item={item} />
                            } else if (item.posttype == 'event') {
                                return <EventsCard key={getRandomStr(15)} small={false} event={item} />
                            } else if (item.posttype == 'cause') {
                                return <CausesCard key={getRandomStr(15)} cause={item} />
                            }
                        })
                        :
                        <div className="CausesPage_content_noPosts">Ничего не найдено</div>
                    }
                </div>
                {(searchedItems.length > ItemsPerPage) &&
                    <MuiPagination
                        pagesCount={pagesCount}
                        setPage={setcurrentPage}
                        sx={customPagesStyles}
                    />
                }
            </div>
        </main>
    )
}