import { useContext } from "react"
import { useLoaderData } from "react-router-dom"
import { AuthContext } from "../../Providers/AuthProvider"
import { useState } from "react"
import EventWishListCard from "../../EventWishListCard/EventWishListCard"
import Swal from 'sweetalert2'


export default function Wishlist() {

  const eventData = useLoaderData()


  const { wishlist, setWishlist, order, setOrder } = useContext(AuthContext)
  // const [ wishlistShowId, setWishlistShowId] = useState([])

  // console.log(wishlist[0].id);
  // let  wishlistShowListObj = eventData.filter(wishlistObj => wishlistObj.id === eventData.id)
  // console.log(wishlistShowListObj);
  // setWishlistShowId(wishlistShowListObj);
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
        setWishlist([])
        Swal.fire('Deleted!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Canceled', '', '!')
      }
    })

    

  }

  return (
    <div>
      <div className="flex">
        <h1 className="text-3xl mx-auto w-fit font-bold">Total Components: {wishlist.length}</h1>
        <button className="btn bg-red-500 mr-4 " onClick={handleDelete}>Delete All</button>
      </div>
      <div className="grid grid-cols-2 gap-4 mx-24">
        {
          wishlist.map(event => <EventWishListCard key={event.id} event={event}></EventWishListCard>)
        }
      </div>
    </div>
  )
}
