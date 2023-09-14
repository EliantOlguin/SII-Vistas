import "./MantenimientoStyles.css";

export default function ViewMantAlumOpc3() {
    return (
        <div>
            <div className="main">
                <div className="div-vista">
                    <h1>ELIMINACIÓN DE ALUMNOS</h1>
                    <h2>Es sólo borrador de alumnos. <br /> Las bajas se manejan en la opción Baja Alumnos.</h2>
                    <table>
                        <tr>
                            <td>No. de Control:</td>
                            <td><input type="textbox" /></td>
                        </tr>
                    </table>
                    <button>Eliminar</button>
                    <button>Cancelar</button>
                </div>
            </div>
        </div>
    );
}