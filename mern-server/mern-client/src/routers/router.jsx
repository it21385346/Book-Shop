import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../home/Home";
import App from "../App";
import Shop from "../shop/shop";
import About from "../components/About";
import Blog from "../components/Blog";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path:'/',
          element: <Home/>
        },
        {
          path:'/shop',
          element:<Shop/>

        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/blog",
          element:<Blog/>
        }
        
      ]
    },
  ]);

  export default router;

  