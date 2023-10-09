import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


export default function Navbar() {


    const { handleSignOut, user } = useContext(AuthContext)

    const { wishlist, setWishlist, order, setOrder } = useContext(AuthContext)

    // console.log(wishlist);
    // console.log(order);

    const isEmpty = (list) => {
        if (list.length == 0) return true;
        else return false;
    }
    return (
        <div>

            <div className="navbar bg-base-100 fixed top-0 z-10">
                {/* <div className="navbar bg-base-100"> */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/events"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Events
                                </NavLink>
                            </li>
                            {
                                user && <li>
                                    <NavLink
                                        to="/wishlist"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        Wishlist
                                    </NavLink>
                                </li>
                            }
                            {
                                user && <li>
                                    <NavLink
                                        to="/orders"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        Orders
                                    </NavLink>
                                </li>
                            }
                            {
                                user && <li>
                                    <NavLink
                                        to="/profile"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        Profile
                                    </NavLink>
                                </li>
                            }
                            <li>
                                <NavLink
                                    to="/registration"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Registration
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/login"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Login
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link to={"/"} className=" normal-case text-xs md:text-2xl font-black">NF <span className="text-yellow-400">EVENT</span> MANAGMENT</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/events"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                Events
                            </NavLink>
                        </li>
                        {
                            user && <li className="relative">
                                {
                                    !isEmpty(wishlist) && (<span className="absolute -right-2 -top-1 bg-warning w-px h-px text-[10px] text-black"><span className="absolute left-3 ">{wishlist.length}</span></span>)
                                }
                                <NavLink
                                    to="/wishlist"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Wishlist
                                </NavLink>
                            </li>
                        }
                        {
                            user && <li className="relative">
                                {
                                    !isEmpty(order) && (<span className="absolute -right-2 -top-1 bg-warning w-px h-px text-[10px] text-black"><span className="absolute left-3 ">{order.length}</span></span>)
                                }
                                <NavLink
                                    to="/orders"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Orders
                                </NavLink>
                            </li>
                        }
                        {
                            user && <li>
                                <NavLink
                                    to="/profile"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Profile
                                </NavLink>
                            </li>
                        }
                        <li>
                            <NavLink
                                to="/registration"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                Registration
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/login"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end ">
                    <div className="flex flex-row">
                        <div className="flex justify-center items-center mx-1 space-x-3">
                            <span className="text-xs hidden lg:block">
                                {
                                    user && <Link to="/profile" className="font-bold text-success text-sm md:text-xl" >{(user.displayName ? user?.displayName : user?.email)}</Link>
                                }
                            </span>
                            <span className="text-xs">
                                {
                                    user && <div className="avatar">
                                        <div className="w-10 mask mask-squircle">
                                            {
                                                user?.photoURL ? <Link to="/profile"  > <img src={(user?.photoURL)} /> </Link> : <span className="w-10 h-10 relative left-2 top-2"> <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg></span>
                                            }

                                        </div>
                                    </div>
                                }
                            </span>
                        </div>
                        <div className="btn btn-ghost hover:text-red-600 hover:bg-black " >
                            {
                                user ? <span onClick={handleSignOut} className="text-red-500 font-extrabold text-sm">Log Out </span> : <Link to={'/login'} className="text-accent font-extrabold text-sm">Log In</Link>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
