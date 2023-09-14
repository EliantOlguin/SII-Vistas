import "./MantenimientoStyles.css";

export default function ViewMantCalYActOpc1() {
    return (
        <>
            <div className="div-vista">
                <h1>CALIFICACIONES - ACTAS</h1>
                <table>
                    <tr>
                        <td>Periodo:</td>
                        <td><select /></td>
                    </tr>
                </table>
                <button>Aceptar</button>
                <button>Cancelar</button>
            </div>
        </>
    );
}