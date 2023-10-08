import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

export default function EventDetailsCard() {
    const eventsData = useLoaderData();

    const [event, setEvent] = useState(null)

    const { id } = useParams();

    useEffect(() => {
        const findEvent = eventsData.find(evn => evn.id == id)

        setEvent(findEvent)

        console.log(findEvent);


    },[])

    
    return (
        <div>

            <div className="card  bg-base-100 shadow-xl">
                <figure><img className='h-screen' src={event?.image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{event?.name}</h2>
                    <p>{event?.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book Now {event?.price}</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
