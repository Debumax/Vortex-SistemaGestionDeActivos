import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./components/Home";
import EmpleadoList from "./components/Empleados/EmpleadoList";
import EmpleadoShow from "./components/Empleados/EmpleadoShow";
import EmpleadoCreate from "./components/Empleados/EmpleadoCreate";
import EmpleadoDelete from "./components/Empleados/EmpleadoDelete";
import Login from "./components/Empleados/Login";
import Error from "./components/Error";



const router = createBrowserRouter([

  {
    path: '/',
    element: <Home/>  
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path :'/empleado/new' ,
    element: <EmpleadoCreate/>,

  },
  {
    path :'/empleado/delete/:empId' ,
    element: <EmpleadoDelete/>
  },
  {
    path :'/empleado/show/:empId' ,
    element: <EmpleadoShow/>
  },
  {
    path: '/empleado/list',
    element:<EmpleadoList/>
  },
  {
    path: '*',
    element: <Error/>
  }

]);

function App() {
  return (
    <div >
      <RouterProvider router={router}>  
      </RouterProvider >
    </div>
  );
}

export default App;
