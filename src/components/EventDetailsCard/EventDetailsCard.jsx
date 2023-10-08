import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

export default function EventDetailsCard() {

    const eventsData = useLoaderData();

    // const [events, setEvents] = useState([])

    // setEvents(eventsData)

    const [event, setEvent] = useState(null)

    const { id } = useParams();

    useEffect(() => {

        const findEvent = eventsData.find(evn => evn.id == id)

        setEvent(findEvent)

        console.log(findEvent);


    }, [eventsData])

    const { wishlist, setWishlist, order, setOrder } = useContext(AuthContext)

    const handleSetWishlist = () => {
        setWishlist([...wishlist, event.id])
    }
    const handleSetOrder = () => {
        setOrder([...order, event.id])
    }


    return (
        <div>

            <div className="card  bg-base-100 shadow-xl ">
                <figure><img className='object-cover h-[450px] w-11/12 rounded-3xl' src={event?.image} alt="Album" /></figure>
                <div className="card-body mx-10 ">
                    <div className='flex justify-between items-baseline'>
                        <h2 className="card-title text-6xl font-black">{event?.name}</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-info text-white" onClick={handleSetWishlist}>Add To Wishlist</button>
                            <button className="btn btn-primary text-white" onClick={handleSetOrder}>Book Now {event?.price}</button>
                        </div>
                    </div>
                    <p className='text-xl text-gray-500 mt-3'>{event?.description}</p>
                </div>
            </div>

        </div>
    )
}
