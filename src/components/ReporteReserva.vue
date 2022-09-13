<template>
  <fieldset>
    <legend>Reporte de reservas</legend>
    <div class="input-group mb-3">
      <span class="input-group-text" id="inicio">Fecha inicio:</span>
      <input type="date" class="form-control" v-model="inicio" />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="fin">Fecha fin:</span>
      <input type="date" class="form-control" v-model="fin" />
    </div>
    <button type="button" class="btn btn-outline-info" @click="consultar">
      BUSCAR
    </button>
    <br />
    <br />
    <div v-if="mensaje" class="alert alert-info" role="alert">
      {{ mensaje }}
    </div>
  </fieldset>
  <div v-if="mostrar">
    <table class="table">
      <tread class="table-dark">
        <tr class="table-active">
          <th>No reserva</th>
          <th>Fecha Inicio</th>
          <th>Fecha Fin</th>
          <th>Estado</th>
          <th>Valor total</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Placa</th>
          <th>Modelo</th>
          <th>Año de fabricación</th>
        </tr>
      </tread>
      <tbody class="table-info">
        <tr v-for="auto in lista" v-bind:key="auto">
          <td>{{ auto.numeroReserva }}</td>
          <td>{{ auto.fechaInicio }}</td>
          <td>{{ auto.fechaFin }}</td>
          <td>{{ auto.estado }}</td>
          <td>${{ auto.valorPagar }}.00</td>
          <td>{{ auto.cliente.nombre }}</td>
          <td>{{ auto.cliente.apellido }}</td>
          <td>{{ auto.vehiculo.placa }}</td>
          <td>{{ auto.vehiculo.modelo }}</td>
          <td>{{ auto.vehiculo.anioFablicacion }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<script>
import { obtenerReporte } from "../helpers/reporteDts.js";
export default {
  data() {
    return {
      inicio: null,
      lista: [],
      mostrar: false,
      mensaje: "",
    };
  },
  methods: {
    async consultar() {
      const response = await obtenerReporte(this.inicio, this.fin);
      this.lista = response;
      console.log(this.lista);
      if (this.lista.length == 0) {
        this.mensaje = "No hay resultados para la búsqueda ingresada";
        this.mostrar = false;
      } else {
        this.mensaje = "";
        this.mostrar = true;
      }
      console.log(response);
      this.marca = "";
      this.modelo = "";
    },
  },
};
</script>

<style scope>
fieldset {
  height: fit-content;
  width: fit-content;
  margin: auto;
}
table {
  margin-top: 15px;
}
</style>