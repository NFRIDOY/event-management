import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


export default function EventCard({ event }) {
    const { id, name, image, price, description } = event;
    const {wishlist, setWishlist, order, setOrder} = useContext(AuthContext)

    const handleSetOrder = () => {
        setOrder([...order, id])
    }
    
    return (
        <div>

            <div className="card card-compact lg:w-96 h-[400px] bg-base-100 shadow-xl rounded-3xl text-black">
                <figure><img src={image} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p className="text-slate-600 italic">
                        {description}
                    </p>
                    <div className="card-actions flex justify-evenly mt-4">
                        <button className="btn btn-ghost btn-outline rounded-2xl  hover:bg-neutral hover:text-white">
                            <Link to={`/eventDetailsCard/${id}`}>
                                View Details
                            </Link>
                        </button>
                        <button className="btn btn-neutral rounded-2xl text-white hover:bg-white hover:text-black" onClick={handleSetOrder}>
                            Book Now {price}
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
