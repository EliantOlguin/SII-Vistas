import "./PeriodoStyles.css";

export default function VistaMantenimientoAspirantesPeriodosDeAdmisionEjemploPeriodo() {
  return (
    <div>
        <section>
        <h4>Período de Admisión</h4>

        <label> Año: </label>   
        <input id="anio_periodo_admision" type="text" name="anio_periodo_admision" readOnly/><br/>

        <label> Periodo: </label>
        <input id="ciclo_periodo_admision" type="text" name="ciclo_periodo_admision" readOnly/><br/>

        <label> Nombre: </label>
        <input id="nombre_periodo_admision" type="text" name="nombre_periodo_admision" readOnly/><br/>

        <label> Nombre Largo: </label>
        <input id="nombre_periodo_largo_admision" type="text" name="nombre_periodo_largo_admision" readOnly/><br/>

        <label> Clave: </label>
        <input id="periodo_admision" type="text" name="periodo_admision" readOnly/><br/>

        <label> Fecha Inicio: </label>
        <input id="fecha_inicio_periodo" type="text" name="fecha_inicio_periodo" readOnly/><br/>

        <label> Fecha Fin: </label>
        <input id="fecha_fin_periodo" type="text" name="fecha_fin_periodo" readOnly/><br/>

        <label> Estatus Periodo: </label>
        <input id="estatus_periodo_admision" type="text" name="estatus_periodo_admision" readOnly/><br/>

        <label> Sitio Web Admisión: </label>
        <input id="url_proceso_admision" type="text" name="url_proceso_admision" readOnly/><br/>

        <label> Sitio Web Inscripción: </label>
        <input id="url_proceso_inscripcion" type="text" name="url_proceso_inscripcion" readOnly/><br/>

        <input class="botones" type="submit" value="Modificar"/>
        <input class="botones" type="submit" value="Eliminar"/>
        <input class="botones" type="submit" value="Cancelar"/>
        </section>
    </div>
  );
}