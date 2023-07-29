import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Home from './components/Home/Home.jsx';
import Users from './components/Users/Users';
import UserDetails from './components/UserDetails/UserDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'users',
        element: <Users></Users>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'user/:userId',
        element: <UserDetails></UserDetails>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
