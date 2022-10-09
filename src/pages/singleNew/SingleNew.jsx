import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import ShareLinks from '../../components/ShareLinks/ShareLinks'
import Sidebar from '../../components/sidebar/Sidebar'
import Breadcrumbs from '../../components/ui/breadcrumbs/Breadcrumbs'
import Btn2 from '../../components/ui/btn2/Btn2'
import { getDateByTimeStamp, getPopularNews, getPostByID, getShareLink } from '../../functions/helpers'
import "./singleNew.scss"

export default function SingleNew({ setsearchQuery }) {
    
    let params = useParams()

    let news = useSelector((state) => state.globalReducer.news)
    let newsCategs = useSelector((state) => state.globalReducer.newsCategories)

    let [currNew, setcurrNew] = useState(getPostByID(params.id, news))

    let [breadcrumbsItems, setbreadcrumbsItems] = useState([
        {
            slug: '/',
            title: 'Home',
        },
        {
            slug: '/news',
            title: 'News',
        },
        {
            slug: '/news/' + currNew.id,
            title: currNew.title,
        },
    ])

    useEffect(() => {
        let post = getPostByID(params.id, news)
        setcurrNew(post)
        setbreadcrumbsItems([
            {
                slug: '/',
                title: 'Home',
            },
            {
                slug: '/news',
                title: 'News',
            },
            {
                slug: '/news/' + post.id,
                title: post.title,
            },
        ])
    }, [params.id])

    let [openSidebar, setopenSidebar] = useState(false);

    return (
        <main className="main">
            <div className="openSidebarBtn singleNewOpenSidebar" onClick={() => setopenSidebar(true)}>
                <svg viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="10" width="6" height="2" rx="1" fill="#323232" />
                    <rect x="2" y="5" width="10" height="2" rx="1" fill="#323232" />
                    <rect width="14" height="2" rx="1" fill="#323232" />
                </svg>
            </div>
            <Breadcrumbs items={breadcrumbsItems} />
            
            <div className="SingleNew_w">
                <div className="SingleNew_content">
                    <div className="SingleNew_content_img">
                        <img src={'../img/' + currNew.img} alt="" />
                    </div>
                    <h1>{currNew.title}</h1>
                    <div className="SingleNew_content_details">
                        <div className="item">
                            <div className="icon">
                                <svg viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.00857 0C5.70723 0 5.46317 0.244264 5.46317 0.545402V5.18168C5.46317 5.48283 5.70743 5.72708 6.00857 5.72708C6.30991 5.72708 6.55397 5.48282 6.55397 5.18168V0.545402C6.55397 0.244065 6.30971 0 6.00857 0ZM18.0085 0C17.7071 0 17.4631 0.244264 17.4631 0.545402V5.18168C17.4631 5.48283 17.7073 5.72708 18.0085 5.72708C18.3098 5.72708 18.5539 5.48282 18.5539 5.18168V0.545402C18.5539 0.244065 18.3096 0 18.0085 0ZM2.19042 1.63645C0.978012 1.63645 0 2.61426 0 3.82687V8.72715H23.9998V3.82687C23.9998 2.61431 23.022 1.63645 21.8094 1.63645H19.0991V3.96304C19.4335 4.26266 19.6445 4.69735 19.6445 5.18168C19.6445 6.08552 18.9119 6.81813 18.008 6.81813C17.1042 6.81813 16.3716 6.08552 16.3716 5.18168C16.3716 4.69733 16.5826 4.26264 16.917 3.96304V1.63645H7.09061V3.95471C7.43038 4.25452 7.64458 4.69321 7.64458 5.18192C7.64458 6.08576 6.91197 6.81837 6.00813 6.81837C5.10429 6.81837 4.37169 6.08576 4.37169 5.18192C4.37169 4.70176 4.57923 4.27107 4.90852 3.97161V1.63645H2.19042ZM0 9.8182V20.173C0 21.3854 0.977817 22.3634 2.19042 22.3634H21.8096C23.022 22.3634 24 21.3856 24 20.173V9.8182H0Z" fill="#cc9955" />
                                </svg>
                            </div>
                            <span className="text">{getDateByTimeStamp(currNew.newDate, '.')}</span>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <svg viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.7388 10.7829C14.2633 9.75922 15.294 7.92917 15.294 5.82361C15.294 2.61288 12.9186 0 9.9999 0C7.08115 0 4.70578 2.61271 4.70578 5.82361C4.70578 7.92917 5.73629 9.75899 7.26103 10.7827C3.07637 12.0977 0 16.3333 0 21.353V22H20V21.353C19.9998 16.333 16.9234 12.0976 12.739 10.7827L12.7388 10.7829Z" fill="#cc9955" />
                                </svg>
                            </div>
                            <span className="text">{currNew.author.Name}</span>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <svg viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14 1.25006C14 0.918583 13.8686 0.600514 13.634 0.366129C13.3995 0.131584 13.0816 0 12.7501 0H1.24988C0.918411 0 0.600515 0.131584 0.365959 0.366129C0.131416 0.600506 0 0.9186 0 1.25006V20.7501C0 21.1766 0.216963 21.573 0.576383 21.8031C0.935477 22.0326 1.38698 22.0636 1.77385 21.8851C3.28738 21.1865 5.98034 19.9436 6.89482 19.5211C6.96129 19.4906 7.0383 19.4906 7.10475 19.5211L12.2257 21.8851C12.6126 22.0636 13.0641 22.0326 13.4232 21.8031C13.7826 21.573 13.9996 21.1766 13.9996 20.7501L14 1.25006Z" fill="#cc9955" />
                                </svg>
                            </div>
                            {currNew.categories.map((cat, i) => {
                                return <span key={cat} className="text">{cat}{(i < currNew.categories.length - 1) && ', '}</span>
                            })}
                        </div>
                    </div>

                    <div className="SingleNew_content_content">
                        {currNew.content.map((item, i) => {
                            if (item.type == 'text') {
                                return (
                                    <div key={i} className="text">
                                        {item.text}
                                    </div>
                                )
                            } else if (item.type == 'img') {
                                return (
                                    <div key={i} className="imgs">
                                        {item.imgs.map((img, i) => {
                                            return <img key={i} src={'../img/' + img}/>
                                        })}
                                    </div>
                                )
                            }
                        })}
                    </div>

                    <ShareLinks title={currNew.title}/>
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

                {/* <Sidebar
                    news={news}
                    categs={newsCategs}
                    page={'news'}
                /> */}
            </div>
        </main>
    )
}