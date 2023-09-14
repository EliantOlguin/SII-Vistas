import "./PeriodoStyles.css";

export default function VistaMantenimientoAspirantesPeriodosDeAdmisionCrearPeriodo() {
  return (
    <div>
      <section>
        <h4>Crear Período de Admisión</h4>

        <label> Año: </label>   
        <input id="anio_periodo_admision" list="anios" name="anio_periodo_admision"/>
        <datalist id="anios">
            <option value="2023"></option>
            <option value="2024"></option>
            <option value="2025"></option>
            <option value="2026"></option>
            <option value="2027"></option>
            <option value="2028"></option>
            <option value="2029"></option>
            <option value="2030"></option>
            <option value="2031"></option>
        </datalist>
        <br/>

        <label> Periodo: </label>
        <input id="ciclo_periodo_admision" list="ciclos" name="ciclo_periodo_admision"/>
        <datalist id="ciclos">
            <option value="Enero - Junio"></option>
            <option value="Verano"></option>
            <option value="Agosto - Diciembre"></option>
        </datalist>
        <br/>
        
        <input class="botones" type="submit" value="Crear"/><br/>

        <label> Nombre: </label>
        <input id="nombre_periodo_admision" type="text" name="nombre_periodo_admision"/><br/>

        <label> Nombre Largo: </label>
        <input id="nombre_periodo_largo_admision" type="text" name="nombre_periodo_largo_admision"/><br/>

        <label> Clave: </label>
        <input id="periodo_admision" type="text" name="periodo_admision"/><br/>

        <label> Fecha Inicio: </label>
        <input id="fecha_inicio_periodo" type="date" name="fecha_inicio_periodo"/><br/>

        <label> Fecha Fin: </label>
        <input id="fecha_fin_periodo" type="date" name="fecha_fin_periodo"/><br/>

        <label> Estatus Periodo: </label>
        <input id="estatus_periodo_admision" type="text" name="estatus_periodo_admision"/><br/>

        <label> Sitio Web Admisión: </label>
        <input id="url_proceso_admision" type="text" name="url_proceso_admision"/><br/>

        <label> Sitio Web Inscripción: </label>
        <input id="url_proceso_inscripcion" type="text" name="url_proceso_inscripcion"/><br/>

        <input class="botones" type="submit" value="Guardar"/>
        <input class="botones" type="submit" value="Cancelar"/>
      </section>
    </div>

    /* <Container>
      <React.Fragment>
        <CssBaseline />
          <Container maxWidth="sm">
            <Box sx={{ bgcolor: '#25496B', height: '100vh', marginTop:'10px' }}>
            </Box>
        </Container>
      </React.Fragment>
    </Container> */
  );
}