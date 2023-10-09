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
                        {
                            user?.photoURL ? <img className="object-contain " src={user?.photoURL} alt="profile-picture" /> : <span className="w-10 h-10 relative left-2 top-2"> <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg></span>

                        }
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
