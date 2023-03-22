import { Link } from "react-router-dom";

const Nav = ()=>{
    return (
        <div className="container ">
            <nav className="navbar bg-body-tertiary bg-cuerpo-terciario">
                <div className="container-fluid">
                    <Link to={`/empleado/new`} className="btn btn-lg btn-outline-primary" >Agregar</Link>  
                    <form className="d-flex" >
                        <input className="form-control me-2" type="search" placeholder="Search" />
                        <button className="btn btn-outline-success btn-lg" type="submit">Search</button>   
                    </form>
                    
                </div>
            </nav>
        </div>
    );
};
export default Nav;