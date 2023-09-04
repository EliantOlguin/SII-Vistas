import "./MantOpc1.css";

export default function ViewMantOpc1() {
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

                <div className="div-vista">
                    <h1>REGISTRO DE TÍTULADOS</h1>
                    <table>
                        <tr>
                            <td>No. de Control:</td>
                            <td><input type="textbox" /></td>
                        </tr>
                    </table>
                    <button>Buscar</button>
                    <button>Cancelar</button>
                </div>

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