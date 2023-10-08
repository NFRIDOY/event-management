import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import toast from 'react-hot-toast';

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

    // const isExist = (array) => {
    //     const aaff = array.find(evn => evn.id === id)
    //     console.log(aaff);
    //     if (aaff) {
    //         alert("Found")
    //         return true;
    //     }
    //     else {
    //         alert("Not Found")
    //         return false;
    //     }

    // }

    const handleSetWishlist = () => {
        // alert("wishlist", wishlist)
        const isFound = wishlist.find(evnId => evnId.id == id)
        // if (wishlist.find(evn => evn.id === id)) {
        // alert(id, isFound)
        if (!isFound) {
            setWishlist([...wishlist, event])
            toast.success("Wish List")
        }
        else {
            // alert("duplicate wishlist")
            toast.error("Duplicate")
            return;
        }
    }
    const handleSetOrder = () => {
        const isFound = order.find(evnId => evnId.id == id)
        // if (wishlist.find(evn => evn.id === id)) {
        // alert(id, isFound)
        if (!isFound) {
            setOrder([...order, event])
            toast.success("Booked")
        }
        else {
            // alert("duplicate wishlist")
            toast.error("Duplicate")
            return;
        }
    }


    return (
        <div>

            {/* PC Device */}
            <div className="card  bg-base-100 shadow-xl hidden lg:block">
                <figure><img className='object-cover h-[450px] w-11/12 rounded-3xl' src={event?.image} alt="Album" /></figure>
                <div className="card-body mx-10 ">
                    <div className='flex flex-row justify-between items-baseline'>
                        <h2 className="card-title lg:text-6xl font-black">{event?.name}</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-info text-white" onClick={handleSetWishlist}>Add To Wishlist</button>
                            <button className="btn btn-primary text-white" onClick={handleSetOrder}>Book Now {event?.price}</button>
                        </div>
                    </div>
                    <p className='text-xl text-gray-500 mt-3'>{event?.description}</p>
                </div>
            </div>

            {/* Mobile Device */}
            <div className="card  bg-base-100 shadow-xl block lg:hidden">
                <figure><img className='object-cover h-[450px] w-11/12 rounded-3xl' src={event?.image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{event?.name}</h2>
                    <p>{event?.description}</p>
                    <div className=" flex flex-row justify-between gap-4" >
                        <button className="btn btn-info text-white" onClick={handleSetWishlist}>Add To Wishlist</button>
                        <button className="btn btn-primary text-white" onClick={handleSetOrder}>Book Now {event?.price}</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
