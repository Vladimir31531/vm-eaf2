import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUpcomingEvents } from '../../../functions/helpers'
import "./events.scss"
import EventsCard from './eventsCard/EventsCard'

export default function Events() {

    let events = useSelector((state) => state.globalReducer.events)

    if (events.length > 0) {
        return (
            <div className="Events">
                <div className="Causes_bgText">Наші події</div>
                <h4>Майбутні події</h4>
                <h3>Наші події</h3>
                <div className="Events_content">
                    <div className="Events_content_left">
                        {getUpcomingEvents(events, 'eventStart').map((event, i) => {
                            if (i !== 0 && i < 5) {
                                return (
                                    <Link key={event.id} to={'/events/' + event.id}>
                                        <EventsCard small={true} event={event} />
                                    </Link>
                                )
                            }
                        })}

                    </div>
                    <EventsCard small={false} event={events[0]} />
                </div>
            </div>
        )
    } else {
        return ('')
    }
}