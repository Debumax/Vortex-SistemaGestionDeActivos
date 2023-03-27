import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editarEmpleado, getEmpleadoByID, patchEmpleado, setEmpleados } from "../actios";
import Encabezado from "./Encabezado";
import Footer from "./Footer";
import { getEmpleados } from "../api-backend/api";
import moment from "moment/moment";

const Formulario = (props) => {
    const navegar = useNavigate();
    const [boton, setBoton] = useState('Editar');//editar /guardar
    const [botonVC, setBotonVC] = useState('Home');//home / cancelar
    const [isDisabled, setIsDisabled] = useState(true);//habilita/deshabilita los input
    //estados iniciales
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [cuit, setCuit] = useState('');
    const [joinDate, setjoinDate] = useState('');
    const [rol, setRol] = useState('');
    const [teamID, setTeamID] = useState('');
    const [titulo, setTitulo] = useState('Ver');


    const dispatch = useDispatch();
    const parametro = useParams();

    const empleadosApi = useSelector(state => state.listaEmpleados);
    const emp = empleadosApi.empleado;
    const fecha = moment.utc(emp.join_date).format('YYYY-MM-DD');

    const id_param_actual = parametro.empId;

    useEffect(() => {
        dispatch(getEmpleadoByID(id_param_actual));

    }, []);

    useEffect(() => {
        if (emp) {
            setId(emp.id_employee);
            setNombre(emp.first_name);
            setApellido(emp.last_name);
            setCuit(emp.cuit);
            setjoinDate(fecha);
            setRol(emp.rol);
            setTeamID(emp.team_id);
            setId(emp.id_employee);

        }
    },[emp]);


    // me lleva  a editar-empleado o desencadena el update 
    const BtonIrA = (e) => {
        e.preventDefault();
        if (boton === 'Editar') {
            setBoton('Guardar');
            setBotonVC('Cancelar');
            setIsDisabled(false); // por ahora cuando le doy clic a editar se bloqueara , para ver si funciona
            setTitulo('Editando');
        }
        if (boton === 'Guardar') {
            //me va a renderizar los valores o va a ir al inicio mas + un cartel de guardo los cambios
            const empEditado = {
                first_name: nombre,
                last_name: apellido,
                cuit: cuit,
                join_date: joinDate,
                rol: rol,
                team_id: teamID
            }
            //console.log(empEditado);
            dispatch(patchEmpleado(id,empEditado))
            setIsDisabled(true);
            setBoton('Editar');
            setBotonVC('Home');
            alert('guardo los cambios');
            setTitulo('Ver')
        }
    };
    //me lleva al home (volver) o al "vista de ver" (cancelar)
    const BtnAtras = (e) => {
        e.preventDefault();
        if (botonVC === 'Cancelar' && boton === 'Guardar') {
            setBoton('Editar');
            setBotonVC('Home');
            setTitulo('Ver')
            setNombre(emp.first_name);
            setApellido(emp.last_name);
            setCuit(emp.cuit);
            setjoinDate(emp.join_date);
            setRol(emp.rol);
            setTeamID(emp.team_id);
            setId(emp.id_employee);
            setIsDisabled(true);
        }
        if (botonVC === 'Home') {
            navegar('/');
        }
    };

    const manejarCambio = (e) => {
        const valor = e.target.value;
        const name = e.target.name;

        switch (name) {
            case 'nombre':
                setNombre(valor);
                break;
            case 'apellido':
                setApellido(valor);
                break;
            case 'cuit':
                setCuit(valor);
                break;
            case 'join_date':
                setjoinDate(valor);
                break;
            case 'rol':
                setRol(valor);
                break;
            case 'team_id':
                setTeamID(valor);
                break;
            default:
                break;
        }
    };

    return (
        <>
            <Encabezado />
            <div style={{ marginBottom: '207px' }}>
                <div className="container">
                    <h1 className="display-5 container">{titulo} Empleado</h1>
                    <br />
                    <form className="row g-3 " onSubmit={BtonIrA}>
                        <div className="col-md-4">
                            <label className="form-label">Nombre </label>
                            <input type="text" className="form-control" name="nombre" value={nombre} id="input_clic" onChange={manejarCambio} disabled={isDisabled} required />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Apellido</label>
                            <input type="text" className="form-control" name="apellido" value={apellido} id="input_clic" onChange={manejarCambio} disabled={isDisabled} required />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Cuit</label>
                            <input type="text" className="form-control" name="cuit" value={cuit} id="input_clic" onChange={manejarCambio} disabled={isDisabled} required />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Rol</label>
                            <input type="text" className="form-control" name="rol" value={rol} id="input_clic" onChange={manejarCambio} disabled={isDisabled} required />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Fecha de ingreso</label>
                            <input type="text" className="form-control" name="join_date" value={joinDate} id="input_clic" onChange={manejarCambio} disabled={isDisabled} required />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Team</label>
                            <input type="text" className="form-control" name="team_id" value={teamID} id="input_clic" onChange={manejarCambio} disabled={isDisabled} required />
                        </div>

                        <div className="col-md-4">
                            <button className="btn btn-primary" type="submit" style={{ margin: '2%' }} >{boton}</button>
                            <button className="btn btn-primary" type="text" onClick={BtnAtras} style={{ margin: '2%' }} >{botonVC}</button>

                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Formulario;

