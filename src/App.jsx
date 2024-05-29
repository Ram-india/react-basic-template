
//create a router
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {Link} from "react-router-dom";
const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
        children:[
            {
                path:"/",
                element:<div><Link to="/register">Register</Link>&nbsp;|&nbsp;<Link to="/login">Login</Link></div>
            
            },
            {
                path:"register",
                element:<Register/>
            },
            {
                path:"login",
                element:<Login/>
            }
        ]
    }
])


function App() {
  return<RouterProvider router={router}/>
}

export default App;