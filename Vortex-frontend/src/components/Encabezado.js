import { Link } from 'react-router-dom';

const Encabezado= ()=>{
    return (
        <div>
            <div className='container-fluid position-relative'>
                <img className='img-fluid ' src={require('../../src/img/vortex.png')} alt="fondo vortex"/>
                <Link to={'/'}><img className='rounded float-start position-absolute bottom-0 start-0' src={require('../../src/img/icono.png')} alt="logo vortex" title='Home'/></Link>
            </div> 
            <h1 className="display-2 navbar-text text-center">Gestion De Empleados</h1>   
        </div>    
    );
};
export default Encabezado;