import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home/Home";

const route = createBrowserRouter([
    {
        path: '/',
        Component:Home
    }
])


export default route;