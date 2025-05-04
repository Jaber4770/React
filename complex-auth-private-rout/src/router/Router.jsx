import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Profile from "../Pages/Profile/Profile";
import PrivateRoute from "./privateRoute";
import Post from "../Pages/Post/Post";

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
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'signup',
                Component: SignUp
            },
            {
                path: 'dashboard',
                // Component: Dashboard
                element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: 'profile',
                // Component: Profile
                element:<PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: 'post',
                element:<PrivateRoute><Post></Post></PrivateRoute>
            }
        ]
    },
]);