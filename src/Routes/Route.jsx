import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home/Home";
import Homepage from "../Pages/Homepage";
import CatagoryNews from "../Pages/CatagoryNews";
import { Suspense } from "react";
import Auth from "../Layouts/Auth/Auth";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import Loading from "../components/Loading";

const route = createBrowserRouter([
    {
        path: '/',
        Component:Home,
        children: [
           {
            index: true,
            Component: Homepage,
           },
           {
            path: 'category/:id',
            loader: () => fetch('/news.json'),
            Component: CatagoryNews,
            hydrateFallbackElement: <Loading></Loading>
           }
        ]
    },
    {
        path: 'auth',
        Component: Auth,
        children: [
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register,
            }
        ]
    },
    {
        path: '/news-details/:id',
        element: 
        <PrivateRoute>
            <NewsDetails></NewsDetails>
        </PrivateRoute>,
        loader: () => fetch('/news.json'),
        hydrateFallbackElement: <Loading></Loading>
    }
])


export default route;