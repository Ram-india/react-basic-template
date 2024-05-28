import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter ([
   { path: "/",
    element: <h1>Hello!</h1>
    },
    {
        path:"/about",
        element: <h1>about</h1>
    },
    {
        path:"/products",
        element:<h1>Products</h1>
    },
    {
        path:"/services",
        element:<h1>Services</h1>
    },
    {
        path:"/contact",
        element:<h1>Contact us</h1>
    }
])

const App = () => {
    //warp the app with the router
  return (<RouterProvider router={router}/>

  )
}

export default App;