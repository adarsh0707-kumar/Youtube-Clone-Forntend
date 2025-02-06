
import { ToastContainer } from 'react-toastify';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './App.css'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup';
import Dashboard from './Components/Dashboard/Dash/Dashboard';


function App() {

  const myRoutes = createBrowserRouter([
    { path: '', Component: Signup },
    { path: '/signup', Component: Signup },
    { path: '/login', Component: Login },
    {path: '/dashboard', Component: Dashboard},
  ]);

  return (
    <>
      <RouterProvider router={myRoutes} />
      <ToastContainer/>
    </>
  )
}

export default App
