import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home/Home";
import Homepage from "../Pages/Homepage";
import CatagoryNews from "../Pages/CatagoryNews";
import { Suspense } from "react";

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
            Component: CatagoryNews
           }
        ]
    }
])


export default route;