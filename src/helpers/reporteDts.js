import axios from 'axios';

export const obtenerReporte = async (inicio,fin) => {
    return await obtenerReporteAxios(inicio,fin);
}

//GET //lista de reservas segun fecha inicio-fin
const obtenerReporteAxios = async (inicio, fin) => {
    const data = axios.get(`http://localhost:8085/API/Renta/V1/vehiculos?fechaInicio=${inicio}&fechaFin=${fin}`).then(r => r.data)
    console.log(data)
    return data
}


