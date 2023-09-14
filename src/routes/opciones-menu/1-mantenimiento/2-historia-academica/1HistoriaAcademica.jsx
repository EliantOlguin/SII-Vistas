import "./MantenimientoStyles.css";

export default function ViewMantHistAcadOpc1() {
    return (
        <div>
            <div className="main">
                <div className="div-vista">
                    <h1>HISTORIA ACADÉMICA</h1>
                    <h2>Actas y Modificaciones</h2>
                    <table>
                        <tr>
                            <td>No. de Control:</td>
                            <td><input type="textbox" /></td>
                        </tr>
                    </table>
                    <button>Aceptar</button>
                    <button>Cancelar</button>
                </div>
            </div>
        </div>
    );
}