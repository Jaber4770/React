import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Profile from "../Pages/Profile/Profile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                index: true,
                Component:Home,
            },
            {path:'login',Component:Login},
            {path:'signup',Component:SignUp},
            {path:'dashboard',Component:Dashboard},
            {path:'profile',Component:Profile}
        ]
    },
]);