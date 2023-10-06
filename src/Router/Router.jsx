import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from '../pages/home/Home'
import Error from '../pages/Error/Error'
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import Events from "../components/Events/Events";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                loader: () => fetch('/public/eventData.json'),
                element: <Home></Home>
            },
            {
                path: "/events",
                element: <Events></Events>,
                // errorElement: <DonationError></DonationError>,
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/events/:id",
                loader: () => fetch("/public/eventData.json"),
                element: <div>4</div>,
            },

        ],

    },
    // {
    //     path: "/error",
    //     element: <Error></Error>
    // },
]);

export default router;