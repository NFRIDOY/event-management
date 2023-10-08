import { Link, Navigate, useLoaderData } from "react-router-dom";
import EventOrderdCard from "../EventOrderdCard/EventOrderdCard";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useState } from "react";


export default function Orders() {

    const eventData = useLoaderData()

    const { wishlist, setWishlist, order, setOrder, yourOrders, setYourOrders } = useContext(AuthContext)

    let [totalPrice, setTotalPrice] = useState(0)

    // console.log(order);
    // console.log(wishlist);

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

    const handleConfirmOrder = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'


        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Order Placed!',
                    'Our Admin Will Contact You Soon',
                    'success',
                    setYourOrders(order),
                    setOrder([]),
                )
            }
            else {
                Swal.fire(
                    'Cancelled',
                    'Your Haven\'t Orderd',
                    'error',
                )
            }
        })
    }

    // let totalPrice1 = 0;
    // order.forEach(element => {
    //     console.log(element?.price);
    //     totalPrice1 = totalPrice1 +  parseInt(element?.price.split("$").[1]);
    // })
    // setTotalPrice(totalPrice)
    // console.log(totalPrice1);

    return (
        <div>
            {/* {totalPrice1} */}
            <div className="flex">
                <h1 className="text-3xl mx-auto w-fit font-bold">Total Order: {order.length}</h1>
                <button className="btn bg-red-500 mr-4 " onClick={handleDelete}>Delete All</button>
            </div>

            <div className="grid grid-cols-2 gap-4 mx-4">
                {
                    order.map(event => <EventOrderdCard key={event.id} event={event}></EventOrderdCard>)
                }
            </div>
            <div className="mx-auto w-fit my-11">
                <div>
                    {

                    }
                </div>
                {
                    order.length ? <button className="btn btn-success" onClick={handleConfirmOrder}>Confirm Your Order</button> : <Link to={'/events'} className="btn btn-info" >Explore</Link>
                }
            </div>
        </div>
    )
}
