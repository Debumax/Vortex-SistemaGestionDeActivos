import React from "react";
import Encabezado from "./Encabezado";
import Nav from "./Nav";

const Header= ()=>{
    return (
        <>
            <header >
                <Encabezado/>
                <Nav/>
            </header>
        </>
    );
};
export default Header;