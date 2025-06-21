import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
//import Home from './pages/Signup.jsx'
//import Profile from './pages/Signup.jsx'
//import Signup from './pages/Signup.jsx'
import ErrorPage from './pages/Error.jsx'


const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    /*{
      path:'*',
      element:<ErrorPage/>
    },*/

  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
  </StrictMode>,
)
