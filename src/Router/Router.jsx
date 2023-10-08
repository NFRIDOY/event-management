import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from '../pages/home/Home'
import Error from '../pages/Error/Error'
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import Events from "../components/Events/Events";
import Orders from "../components/Orders/Orders";
import PrivateRoutes from "./PrivateRoutes";
import EventDetailsCard from "../components/EventDetailsCard/EventDetailsCard";
import Wishlist from "../components/Wishlist/Wishlist";
import Profile from "../components/Profile/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                loader: () => fetch('/eventData.json'),
                element: <Home></Home>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/events",
                loader: () => fetch('/eventData.json'),
                element: <Events></Events>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/registration",
                element: <Registration></Registration>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/login",
                element: <Login></Login>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/wishlist",
                element: <PrivateRoutes><Wishlist></Wishlist></PrivateRoutes>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/orders",
                element: <PrivateRoutes><Orders></Orders></PrivateRoutes>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/profile",
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/eventDetailsCard/:id",
                loader: () => fetch("/eventData.json"),
                element: <PrivateRoutes><EventDetailsCard></EventDetailsCard></PrivateRoutes>,
                // errorElement: <Error></Error>,
            },

        ],

    },
    // {
    //     path: "/error",
    //     element: <Error></Error>
    // },
]);

export default router;