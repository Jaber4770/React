import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import About from './components/About/About.jsx';
import Users from './components/Users/Users.jsx';
import Home from './components/Home/Home.jsx';
import Root from './components/Root/Root.jsx';
import Users2 from './components/Users2/Users2.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';


const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());


const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: 'users2',
        element:
        <Suspense fallback={<span>Loading...</span>}>
            <Users2 usersPromise={usersPromise}></Users2>
        </Suspense>
      },
      {
        path: 'users/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      },
      {
        path: '*',
        element: <img src={`https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg`} alt="" />
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
