import "./MantenimientoStyles.css";

export default function ViewMantAlumOpc1() {
    return (
        <div>
            <div className="main">
                <div className="div-vista">
                    <h1>NUEVO ALUMNO</h1>
                    <table>
                        <tr>
                            <td>No. de Control:</td>
                            <td><input type="textbox" /></td>
                        </tr>
                    </table>
                    <button>Dar de Alta</button>
                    <button>Cancelar</button>
                </div>
            </div>
        </div>
    );
}