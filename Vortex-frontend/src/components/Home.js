import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import EmpleadoList from "./Empleados/EmpleadoList";
import Footer from "./Footer";


const Home = (props) => {
  
    const verifica=()=>{
        if (props.lista.length ===0) {
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
const mapStateToProps = state => {
    return { lista : state.listaEmpleados}
  };
export default connect( mapStateToProps)(Home);
//export default Home;
