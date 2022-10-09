import React, { useEffect, useState, componentDidmount } from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../../components/sidebar/Sidebar'
import Breadcrumbs from '../../components/ui/breadcrumbs/Breadcrumbs'
import MuiPagination from '../../components/ui/pagination/Pagination'
import { getLatestNews, getNewsByCategory, getSearchedNews, useCurrentPagePosts } from '../../functions/helpers'
import NewsCard from '../main/news/NewsCard/NewsCard'
import "./news.scss"

export default function News({ searchQuery, setsearchQuery }) {

    let breadcrumbsItems = [
        {
            slug: '/',
            title: 'Головна',
        },
        {
            slug: '/news',
            title: 'Новини',
        },
    ]

    let filter = useSelector((state) => state.globalReducer.selectedNewsCategs)

    // let [searchQuery, setsearchQuery] = useState('')

    let news = useSelector((state) => state.globalReducer.news)
    let newsCategs = useSelector((state) => state.globalReducer.newsCategories)

    let [sortedFilteredNews, setsortedFilteredNews] = useState([])

    useEffect(() => {
        setsortedFilteredNews([...getLatestNews(getNewsByCategory(getSearchedNews(news, searchQuery), filter), 'newDate')])
    }, [filter, searchQuery, news])

    // Индекс текущей страницы
    let [currentPage, setcurrentPage] = useState(1)
    // Количество элементов на страницу
    let [ItemsPerPage, setItemsPerPage] = useState(6)
    // Количество страниц
    let [pagesCount, setpagesCount] = useState(0)

    // Рассчитывает количество страниц
    useEffect(() => {
        setpagesCount(Math.ceil(getLatestNews(getNewsByCategory(getSearchedNews(news, searchQuery), filter), 'newDate').length / ItemsPerPage))
        setsearchQuery('')
    }, [news])

    let [paginationItems] = useCurrentPagePosts(currentPage, ItemsPerPage, sortedFilteredNews)

    let customPagesStyles = (window.innerWidth > 500)
        ?
        {
            '& .MuiPagination-ul': {
                gap: '0.9375vw'
            },
            '& .MuiPaginationItem-root.MuiPaginationItem-page': {
                width: '2.0833333333vw',
                height: '2.0833333333vw',
                backgroundColor: '#fff',
                borderRadius: '50%',
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '1.0416666667vw',
                lineHeight: '1.25vw',
                textAlign: 'center',
                color: '#323232',
                /* margin: '0 0.27778vw', */
                cursor: 'pointer',
                transition: '0.3s',
            },

            '& .MuiPaginationItem-root.MuiPaginationItem-page.Mui-selected': {
                backgroundColor: '#cc9955',
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
                backgroundColor: '#fff',
                borderRadius: '50%',
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '3.0416666667vw',
                lineHeight: '3.25vw',
                textAlign: 'center',
                color: '#323232',
                /* margin: '0 0.27778vw', */
                cursor: 'pointer',
                transition: '0.3s',
            },

            '& .MuiPaginationItem-root.MuiPaginationItem-page.Mui-selected': {
                backgroundColor: '#cc9955',
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
    
    let [openSidebar, setopenSidebar] = useState(false);

    return (
        <main className="main">
            <Breadcrumbs items={breadcrumbsItems} />
            <div className="News_w">
                {/* <div className="News_bgText">Последние Новости</div> */}
                <h4>Наш блог</h4>
                <h3>Останні новини</h3>
                <div className="openSidebarBtn" onClick={() => setopenSidebar(true)}>
                    <svg viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4" y="10" width="6" height="2" rx="1" fill="#323232" />
                        <rect x="2" y="5" width="10" height="2" rx="1" fill="#323232" />
                        <rect width="14" height="2" rx="1" fill="#323232" />
                    </svg>
                </div>
                <div className="NewsPage_2cols">
                    <div className="NewsPage_content">
                        {(paginationItems.length > 0) ?
                            paginationItems.map((item) => {
                                return <NewsCard key={item.id} item={item} />
                            })
                            :
                            <div className="NewsPage_content_noPosts">Нема новин</div>
                        }
                    </div>

                    {(window.innerWidth > 500) ?
                        <Sidebar
                            news={news}
                            categs={newsCategs}
                            setsearchQuery={setsearchQuery}
                            page={'news'}
                            openSidebar={openSidebar}
                            setopenSidebar={setopenSidebar}
                        />
                        : (openSidebar) &&
                        <Sidebar
                            news={news}
                            categs={newsCategs}
                            setsearchQuery={setsearchQuery}
                            page={'news'}
                            openSidebar={openSidebar}
                            setopenSidebar={setopenSidebar}
                        />
                    }
                </div>
                {(sortedFilteredNews.length > ItemsPerPage) &&
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