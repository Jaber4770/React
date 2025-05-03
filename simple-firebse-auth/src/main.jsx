import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './laybout/Root.jsx';
import Home from './Page/Home/Home.jsx';
import Login from './Login/Login.jsx';
import EmailPassLogin from './Page/EmailPassLogin/EmailPassLogin.jsx';
import EPLogin from './component/EPLogin/EPLogin.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        index:true,
        Component: Home
      },
      {
        path: '/login',
        Component:Login
      },
      {
        path: '/emailPassLogin',
        Component:EmailPassLogin
      },
      {
        path: '/EPLogin',
        Component:EPLogin
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
