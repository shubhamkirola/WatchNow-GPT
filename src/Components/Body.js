import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import Home from './Home'


const Body = () => {


    const appRouter = createBrowserRouter([
      {
          path: "/",
          element: <Home/>
      }, 
      {
            path: "/Login",
            element: <Login/>
        },
        {
            path: "/Browse",
            element: <Browse/>
        }
    ])

  return (
    <>
   <RouterProvider router={appRouter}/> 
    </>
  )
}

export default Body