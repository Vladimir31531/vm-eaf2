import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Breadcrumbs from '../../components/ui/breadcrumbs/Breadcrumbs'
import MuiPagination from '../../components/ui/pagination/Pagination'
import { getPastEvents, getUpcomingEvents, useCurrentPagePosts } from '../../functions/helpers'
import EventsCard from '../main/events/eventsCard/EventsCard'
import "./events.scss"

export default function Events({ selectedEvents }) {

    let breadcrumbsItems = [
        {
            slug: '/',
            title: 'Головна',
        },
        {
            slug: '/events',
            title: 'Події',
        },
    ]

    let events = useSelector((state) => state.globalReducer.events)

    let [sortedEvents, setsortedEvents] = useState((selectedEvents == 'future') ? [...getUpcomingEvents(events, 'eventStart')] : (selectedEvents == 'past') ? [...getPastEvents(events, 'eventStart')] : events)

    useEffect(() => {
        let arr = (selectedEvents == 'future') ? [...getUpcomingEvents(events, 'eventStart')] : (selectedEvents == 'past') ? [...getPastEvents(events, 'eventStart')] : events
        setsortedEvents([...arr])
    }, [selectedEvents])

    // Индекс текущей страницы
    let [currentPage, setcurrentPage] = useState(1)
    // Количество элементов на страницу
    let [ItemsPerPage, setItemsPerPage] = useState(6)
    // Количество страниц
    let [pagesCount, setpagesCount] = useState(0)

    // Рассчитывает количество страниц
    useEffect(() => {
        let arr = (selectedEvents == 'future') ? [...getUpcomingEvents(events, 'eventStart')] : (selectedEvents == 'past') ? [...getPastEvents(events, 'eventStart')] : events
        setpagesCount(Math.ceil(arr.length / ItemsPerPage))
    }, [events])

    let [paginationItems] = useCurrentPagePosts(currentPage, ItemsPerPage, sortedEvents)

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

    return (
        <main className="main">
            <Breadcrumbs items={breadcrumbsItems} />
            <div className="Events_w">
                <div className="Events_bgText">Наші події</div>
                <h4>Майбутні події</h4>
                <h3>Наші події</h3>
                <div className="EventsPage_content">
                    {(paginationItems.length > 0) ?
                        paginationItems.map((event) => {
                            return <EventsCard key={event.id} small={false} event={event} />
                        })
                        :
                        <div className="CausesPage_content_noPosts">Подій немає</div>
                    }
                </div>
                {(sortedEvents.length > ItemsPerPage) &&
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