import { useContext } from "react"
import { AuthContext } from "../../Providers/AuthProvider"
import EventOrderdCard from "../EventOrderdCard/EventOrderdCard";


export default function Profile() {

    const { user, yourOrders } = useContext(AuthContext)

    console.log(user);

    return (
        <div className="flex flex-col justify-center items-center" >
            <div className="flex  justify-center gap-10 my-12 mx-12 bg-clip-border rounded-xl border-2 w-fit p-10" data-aos="flip-right">

                <div className="relative flex w-48 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative w-fit mx-auto overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg flex justify-center">
                        <img className="object-contain " src={user?.photoURL} alt="profile-picture" />
                    </div>
                    <div className="p-6 text-center">
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {
                                user && user.displayName
                            }
                        </h4>
                        <p className="block bg-gradient-to-tr from-blue-400 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                            Super User
                        </p>
                        <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                            {user?.email}
                        </p>
                    </div>
                    <div className="flex justify-center gap-7 p-6 pt-2">
                        <a
                            href="#facebook"
                            className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                        >
                            <i className="fab fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a
                            href="#twitter"
                            className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                        >
                            <i className="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a
                            href="#instagram"
                            className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                        >
                            <i className="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-7">
                    <div className="text-xl">
                        Name: {user && user.displayName}
                    </div>
                    <div className="text-xl">
                        Email: {user && user.email}
                    </div>

                    <div className="text-xl">
                        Email Verified: {user && user?.emailVerified ? <span className="text-green-500"> Verified</span> : <span className="text-red-500">Not Verified</span>}
                    </div>

                </div>
            </div>
            <div>
                <h1 className="text-center text-5xl mb-16 underline font-bold">
                    {
                        yourOrders.length ? (<span>Your Orders</span>) : ""
                        
                    }
                </h1>
                <div className="grid grid-cols-2 gap-4 mx-4 mb-5" data-aos="flip-left">
                    {
                        yourOrders.map(event => <EventOrderdCard key={event.id} event={event}></EventOrderdCard>)
                    }
                </div>
                
            </div>
        </div>
    )
}
