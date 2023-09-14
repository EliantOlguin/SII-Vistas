import "./PeriodoStyles.css";

export default function VistaMantenimientoAspirantesPeriodosDeAdmisionModificarPeriodo() {
  return (
    <div>
      <section>
        <h4>Modificar Período de Admisión</h4>

        <label> Periodo: </label>
        <input id="nombre_periodo_admision" list="nombres" name="nombre_periodo_admision"/>
        <datalist id="nombres">
            <option value="2023/Ene-Jun"></option>
            <option value="2023/Verano"></option>
            <option value="2023/Ago-Dic"></option>
        </datalist>
        <br/>

        <input class="botones" type="submit" value="Consultar"/>
      </section>
    </div>
  );
}