import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
   {
      path:"/",
      element:<h1>Hello world!</h1>
   }
]);

 const App = () => {
  return <RouterProvider router={router}/>;
 }
 export default App;