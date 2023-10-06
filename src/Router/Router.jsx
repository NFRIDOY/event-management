import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from '../pages/home/Home'
import Error from '../pages/Error/Error'

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                loader: () => fetch('/data.json'),
                element: <Home></Home>
            },
            {
                path: "/donation",
                element: <div>2</div>,
                // errorElement: <DonationError></DonationError>,
            },
            {
                path: "/statistics",
                element: <div>3</div>
            },
            {
                path: "/donationDetails/:id",
                loader: () => fetch("/donation.json"),
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