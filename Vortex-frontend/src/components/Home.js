import React, {useEffect } from "react";
import Header from "./Header";
import EmpleadoList from "./Empleados/EmpleadoList";
import Footer from "./Footer";
import { getEmpleados } from "../api-backend/api";
import { setEmpleados } from "../actios/index";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  
    const empleadosApi = useSelector(state => state.listaEmpleados );

    const dispatch= useDispatch();
    
    //console.log(empleadosApi.empleados);
    

    useEffect(() => {

        const fetchGetEmpleados =  async () => {
            const listaEmpleados = await getEmpleados();
            
            const list=listaEmpleados.data;
            const pagina=listaEmpleados.totalRow;
         
           
           dispatch(setEmpleados(list, pagina)); 
        };
        fetchGetEmpleados(); 
    },[] ); 


    const verifica=()=>{
        if (empleadosApi.empleados===0) {
            return <div>
                <h1 style={{display:'flex',justifyContent:'center'}}>No hay empleados</h1>
            </div>
        } else {
             return <EmpleadoList/>
            
        }
    }

    return (
        <>
            <Header/>
            {verifica()}
            <Footer/>

        </> 
    );
};

export default Home;
