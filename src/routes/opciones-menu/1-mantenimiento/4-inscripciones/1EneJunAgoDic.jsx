import "./MantenimientoStyles.css";

export default function ViewMantInscOpc1() {
    return (
        <div>
            <div className="main">
                <div className="div-vista">
                    <h1>SELECCIÓN MATERIAS PERIODO ORDNIARIO</h1>
                    <table>
                        <tr>
                            <td>No. de Control:</td>
                            <td><input type="textbox" /></td>
                        </tr>
                    </table>
                    <button>Aceptar</button>
                    <button>Cancelar</button>
                </div>

                <div className="div-vista">
                    <h1>AUTORIZACIÓN DE EVALUACIÓN DOCENTE</h1>
                    <table>
                        <tr>
                            <td>Periodo:</td>
                            <td><select /></td>
                        </tr>
                        <tr>
                            <td>No. de Control:</td>
                            <td><input type="textbox" /></td>
                        </tr>
                        <tr>
                            <td>???</td>
                            <td><input type="textbox" /></td>
                        </tr>
                        <tr>
                            <td>Hora:</td>
                            <td><input type="time" /></td>
                        </tr>
                        <tr>
                            <td>Clave:</td>
                            <td><input type="textbox" /></td>
                        </tr>
                    </table>
                    <button>Validar</button>
                    <button>Limpiar Formulario</button>
                    <button>Cancelar</button>
                    <table>
                        <tr><td>Cadena Digital Proporcionada</td></tr>
                        <tr><td><input type="textbox" /></td></tr>
                        <tr><td>Cadena Digital Original</td></tr>
                        <tr><td><input type="textbox" /></td></tr>
                        <tr><td>Cadena Digital Obtenida</td></tr>
                        <tr><td><input type="textbox" /></td></tr>
                    </table>
                </div>
            </div>
        </div>
    );
}