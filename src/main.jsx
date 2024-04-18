import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import Schedule from './Schedule.jsx'
import Signup from './Signup.jsx'
import Booking from './Booking.jsx'
import About from './About.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/schedule",
    element: <Schedule />
  },
  {
    path: "/login",
    element: <Signup />
  },
  {
    path: "/booking",
    element: <Booking />
  },
  {
    path: "/about",
    element: <About />
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
