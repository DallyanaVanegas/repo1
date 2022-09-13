<template>
  <BuscaVehiculo />
  <RegistroComoCliente />
  <ReporteReserva/>
  <RegistroVehiculo/>
  <BuscarVehiculoPlaca/>
</template>

<script>
import BuscaVehiculo from "@/components/BuscarVehiculo.vue";
import RegistroComoCliente from "@/components/RegistroComoCliente.vue";
import ReporteReserva from "@/components/ReporteReserva.vue"
import RegistroVehiculo from "@/components/RegistroVehiculo.vue"
import BuscarVehiculoPlaca from "@/components/BuscarVehiculoPlaca.vue"
export default {
  name: "App",
  components: {
    BuscaVehiculo,
    RegistroComoCliente,
    ReporteReserva,
    RegistroVehiculo,
    BuscarVehiculoPlaca,
  },
};
</script>

<style scope>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
