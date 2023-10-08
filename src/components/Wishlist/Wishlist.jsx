import { useContext } from "react"
import { useLoaderData } from "react-router-dom"
import { AuthContext } from "../../Providers/AuthProvider"
import { useState } from "react"
import EventWishListCard from "../../EventWishListCard/EventWishListCard"


export default function Wishlist() {
  
  const eventsData = useLoaderData()

  const { wishlist, setWishlist, order, setOrder } = useContext(AuthContext)
  const [ wishlistShowId, setWishlistShowId] = useState([])

  const  wishlistShowListId = wishlist.filter(wl => wl === eventsData.id)
  console.log(wishlistShowId);
  setWishlistShowId(wishlistShowListId);
  return (
    <div>
      Wishlist: {wishlist}
      <div className="gird grid-cols-3 gap-4">
        {
          wishlistShowId.map(wl => <EventWishListCard key={wl} wl={wishlistShowId}></EventWishListCard>)

        }
      </div>
      {

      }
    </div>
  )
}
