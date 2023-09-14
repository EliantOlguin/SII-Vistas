import "./MantenimientoStyles.css";

export default function ViewMantAlumOpc8() {
    return (
        <div>
            <div className="main">
                <div className="div-vista">
                    <h1>ENVÍO DE MENSAJES A ALUMNOS</h1>
                    <table>
                        <tr>
                            <td>No. de Control:</td>
                            <td><input type="textbox" /></td>
                        </tr>
                        <tr>
                            <td>Caducidad:</td>
                            <td><input type="date" /></td>
                        </tr>
                        <tr>
                            <td>Mensaje:</td>
                            <td><textarea /></td>
                        </tr>
                    </table>
                    <button>Procesar</button>
                    <button>Cancelar</button>
                    <h2>Nota:</h2>
                </div>
            </div>
        </div>
    );
}