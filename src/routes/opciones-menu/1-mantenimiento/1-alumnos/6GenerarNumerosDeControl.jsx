import "./MantenimientoStyles.css";

export default function ViewMantAlumOpc6() {
    return (
        <div>
            <div className="main">
                <div className="div-vista">
                    <h1>GENERACIÓN DE NÚMEROS DE CONTROL</h1>
                    <table>
                        <tr>
                            <td>Año de Preinscripción:</td>
                            <td><select /></td>
                        </tr>
                        <tr>
                            <td>Periodo de Ingreso:</td>
                            <td><select /></td>
                        </tr>
                        <tr>
                            <td>Carrera:</td>
                            <td><select /></td>
                        </tr>
                        <tr>
                            <td>Consecutivo Inicial:</td>
                            <td><input type="textbox" /></td>
                        </tr>
                        <tr>
                            <td>Tipo Ingreso:</td>
                            <td>
                                <input type="radio" /><label>Normal</label>
                                <input type="radio" /><label>Corrimiento</label>
                            </td>
                        </tr>
                    </table>
                    <button>Procesar</button>
                    <button>Cancelar</button>
                </div>
            </div>
        </div>
    );
}