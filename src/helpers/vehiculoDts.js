import axios from 'axios';



export const registrarVehiculo = async (body) => {
    //return await obtenerEmpleadoAPI(id);
    return await registrarVehiculoAxios(body);
}

export const obtenerVehiculos = async (marca, modelo) => {
    //return await obtenerEmpleadoAPI(id);
    return await obtenerVehiculosAxios(marca, modelo);
}

export const obtenerVehiculoPlaca = async (placa) => {
    //return await obtenerEmpleadoAPI(id);
    return await obtenerVehiculoPlacaAxios(placa);
}

//POST 
const registrarVehiculoAxios = async (body) => {
    const data = axios.post(`http://localhost:8085/API/Renta/V1/vehiculos`, body).then(r => r.data)
    console.log(data)
    return data
}

//GET //lista de vehiculos disponibles segun marca y modelo
const obtenerVehiculosAxios = async (marca, modelo) => {
    const data = axios.get(`http://localhost:8085/API/Renta/V1/vehiculos?marca=${marca}&modelo=${modelo}`).then(r => r.data)
    console.log(data)
    return data
}

const obtenerVehiculoPlacaAxios = async (placa) => {
    const data = axios.get(`http://localhost:8085/API/Renta/V1/vehiculos/${placa}`).then(r => r.data)
    console.log(data)
    return data
}

