import axios from 'axios';

export const registrarCliente  = async (body) => {
    //return await obtenerEmpleadoAPI(id);
    return await registrarClienteAxios(body);
}

//POST
const registrarClienteAxios = async (body) => {
    const data = axios.post(`http://localhost:8085/API/Renta/V1/clientes`, body).then(r => r.data)
    console.log(data)
    return data
}
