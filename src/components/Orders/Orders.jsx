import { useLoaderData } from "react-router-dom";
import EventOrderdCard from "../EventOrderdCard/EventOrderdCard";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


export default function Orders() {

    const eventData = useLoaderData()

    const { wishlist, setWishlist, order, setOrder } = useContext(AuthContext)

    console.log(order);
    console.log(wishlist); 

    const handleDelete = () => {

        Swal.fire({
            title: 'Do you want to Deleted All?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Delete All',
            denyButtonText: `Cancel`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                setOrder([])
                Swal.fire('Deleted!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Canceled', '', '!')
            }
        })



    }

    return (
        <div>
            <div className="flex">
                <h1 className="text-3xl mx-auto w-fit font-bold">Total Order: {order.length}</h1>
                <button className="btn bg-red-500 mr-4 " onClick={handleDelete}>Delete All</button>
            </div>

            <div className="grid grid-cols-2 gap-4 mx-4">
                {
                    order.map(event => <EventOrderdCard key={event.id} event={event}></EventOrderdCard>)
                }
            </div>
        </div>
    )
}
