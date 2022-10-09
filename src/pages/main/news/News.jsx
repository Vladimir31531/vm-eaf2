import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getLatestNews } from '../../../functions/helpers'
import "./news.scss"
import NewsCard from './NewsCard/NewsCard'

export default function News() {

    let news = useSelector((state) => state.globalReducer.news)

    if (news.length > 0) {
        return (
            <div className="News">
                <div className="News_bgText">Latest news</div>
                <h4>our blog</h4>
                <h3>Latest news</h3>
                <div className="News_content">
                    <div className="inner">
                        {getLatestNews(news, 'newDate').map((item, i) => {
                            if (i < 3) {
                                return <NewsCard key={item.id} item={item} />
                            }
                        })}
                    </div>
                </div>
            </div>
        )
    } else {
        return ('')
    }

    
}