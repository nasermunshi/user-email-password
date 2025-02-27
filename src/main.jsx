import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Loging from './components/Loging/Loging.jsx';
import Register from './components/Register/Register.jsx';
import HeroRegister from './components/HeroRegister/HeroRegister.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path: "/",
        element:<Home></Home> 
      },
      {
        path: "/login",
        element:<Loging></Loging>
      },
      {
        path: "/Register",
        element:<Register></Register>
      },
      {
        path: "/heroRegister",
        element: <HeroRegister></HeroRegister> 
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
