import axios from "axios";

export const getEmpleados = () =>{
    return axios.get('http://localhost:5000/api/Empoyee/')
    .then(res => console.log(res.request.response))
    .catch(error => console.log("paso algo en la conexion con la api error: ",error))
}
