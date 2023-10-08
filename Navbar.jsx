import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./src/Providers/AuthProvider";


export default function Navbar() {

    const { handleSignOut, user } = useContext(AuthContext)
    return (
        <div>

            <div className="navbar bg-base-100">
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
                    <Link to={"/"} className=" normal-case text-2xl font-black">NF EVENT MANAGMENT</Link>
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
                <div className="navbar-end">
                    {
                        user && <span>Welcome &nbsp;</span>
                    }
                    {
                        user && (user.displayName ? user?.displayName : user?.email)
                    }
                    <div className="btn btn-ghost" >
                        {/* Log Out */}
                        {
                            user ? <span onClick={handleSignOut}>Log Out </span> : <Link to={'/login'} >Log In</Link>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}
