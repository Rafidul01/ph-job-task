import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import AuthProvider from './provider/AuthProvider';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PrivateRoute from './routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <PrivateRoute><Home></Home></PrivateRoute>
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
   
  </StrictMode>,
)
