
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './App.css'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'

function App() {

  const myRoutes = createBrowserRouter([
    { path: '', Component: Signup },
    { path: '/signup', Component: Signup },
    { path: '/login', Component: Login },
  ]);

  return (
    <>
      <RouterProvider router={myRoutes}/>
    </>
  )
}

export default App
