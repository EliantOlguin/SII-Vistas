import "./MantenimientoStyles.css";

export default function ViewMantAlumOpc9() {
    return (
        <div>
            <div className="main">
                <div className="div-vista">
                    <h1>CONSULTA DE N.I.P.</h1>
                    <table>
                        <tr>
                            <td>No. de Control:</td>
                            <td><input type="textbox" /></td>
                        </tr>
                        <tr>
                            <td>Nombre:</td>
                            <td><input type="text" value="Nombre" /></td>
                        </tr>
                        <tr>
                            <td>NIP:</td>
                            <td><input type="text" value="NIP" /></td>
                        </tr>
                    </table>
                    <button>Cambiar</button>
                    <button>Cancelar</button>
                </div>
            </div>
        </div>
    );
}