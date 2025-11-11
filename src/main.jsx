import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from 'react-router';
import { RouterProvider } from "react-router/dom";
import App from './App';
import Error404 from './pages/Error404';
import Login from './pages/Login';
import Signup from './pages/Signup';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    errorElement:<Error404></Error404>,
    children:[
      {
        path:"/login",
        Component:Login
      },
      {
        path:"/signup",
        Component:Signup,
      },
      
    ]
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
