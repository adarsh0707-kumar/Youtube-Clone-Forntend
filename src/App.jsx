
import { ToastContainer } from 'react-toastify';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './App.css'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup';
import Dashboard from './Components/Dashboard/Dash/Dashboard';
import Home from './Components/Dashboard/Home/Home';
import UploadVideo from './Components/Dashboard/Upload Video/UploadVideo';
import MyVideo from './Components/Dashboard/My Video/MyVideo';


function App() {

  const myRoutes = createBrowserRouter([
    { path: '', Component: Signup },
    { path: '/signup', Component: Signup },
    { path: '/login', Component: Login },
    {
      path: '/dashboard', Component: Dashboard, children: [
        { path: 'home', Component: Home },
        { path: 'upload', Component: UploadVideo },
        { path: 'my-videos', Component: MyVideo },
        
    ]},
  ]);

  return (
    <>
      <RouterProvider router={myRoutes} />
      <ToastContainer/>
    </>
  )
}

export default App
