import "./Lobby.css";

export function ScreenLobby() {
    return (
        <div className="contendorPrincipal">
            <header>
                <h1 className="titulo-sii">SISTEMA INTEGRAL DE INFORMACIÓN</h1>
                <h1 className="titulo-tec">INSTITUTO TECNOLÓGICO DE CUAUTLA</h1>
            </header>

            <nav>
                <ul className="main">
                    <li><a href="#">MANTENIMIENTO</a>
                        <ul>
                            <li> <a href="#">Alumnos</a>
                                <ul>
                                    <li><a href="#">Alta Alumnos</a></li>
                                    <li><a href="#">Modificación de Datos del Alumno</a>
                                        <ul>
                                            <li><a href="#">Datos Generales</a></li>
                                            <li><a href="#">Datos Socioeconomicos</a></li>
                                            <li><a href="#">Modificar Estatus</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Eliminación de Alumnos</a></li>
                                    <li><a href="#">Adeudos</a>
                                        <ul>
                                            <li><a href="#">Registrar Adeudos</a></li>
                                            <li><a href="#">Consultar/Eliminar Adeudos</a></li>
                                            <li><a href="#">Lista de Adeudos</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Registro de Titulados</a></li>
                                    <li><a href="#">Generar Números de Control</a></li>
                                    <li><a href="#">Recuperar Semestres</a></li>
                                    <li><a href="#">Redactar Mensaje</a></li>
                                    <li><a href="#">Nips de Alumnos</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Historia Académica</a></li>
                            <li><a href="#">Calificaciones y Actas</a>
                                <ul>
                                    <li><a href="#">Periodo Normal</a></li>
                                    <li><a href="#">Exámenes Especiales o Globales</a></li>
                                    <li><a href="#">Generar Folios para Actas</a></li>
                                    <li><a href="#">Residencias</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Inscripciones</a>
                                <ul>
                                    <li><a href="#">Ene-Jun || Ago-Dic</a></li>
                                    <li><a href="#">Verano</a></li>
                                    <li><a href="#">Autorizar Inscripción</a></li>
                                    <li><a href="#">Solicitud</a></li>
                                    <li><a href="#">Listas de Inscripción</a></li>
                                    <li><a href="#">Actualización de Pagos</a></li>
                                    <li><a href="#">Cargas Académicas</a></li>
                                    <li><a href="#">Autorizar Evaluación</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Carreras</a>
                                <ul>
                                    <li><a href="#">Nueva Carrera</a></li>
                                    <li><a href="#">Actualización</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Especialidades</a>
                                <ul>
                                    <li><a href="#">Nueva Especialidad</a></li>
                                    <li><a href="#">Actualización</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Plan Curricular</a>
                                <ul>
                                    <li><a href="#">Retícula</a></li>
                                    <li><a href="#">Actualización de Datos de</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Exámenes Especiales</a>
                                <ul>
                                    <li><a href="#">Solicitud de Exámenes Especiales o Globales</a></li>
                                    <li><a href="#">Especiales Reprobados</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Periodos Escolares</a>
                                <ul>
                                    <li><a href="#">Nuevo</a></li>
                                    <li><a href="#">Actualización de</a></li>
                                    <li><a href="#">Filtro de Acceso</a></li>
                                    <li><a href="#">Alumno en Filtro</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Aspirantes</a>
                                <ul>
                                    <li><a href="#">Configuración Inicial</a></li>
                                    <li><a href="#">Nuevo Aspirante</a></li>
                                    <li><a href="#">Lista de Solicitudes</a></li>
                                    <li><a href="#">Consultas del Aspirante</a></li>
                                    <li><a href="#">Gnerar Ficha de Aspirante</a></li>
                                    <li><a href="#">Imprimir Ficha de</a></li>
                                    <li><a href="#">Lista de Fichas</a></li>
                                    <li><a href="#">Lista de Solicitudes por Día</a></li>
                                    <li><a href="#">Lista de Fichas por Día</a></li>
                                    <li><a href="#">NIP's de Aspirantes</a></li>
                                    <li><a href="#">Aceptar Fichas Normales</a></li>
                                    <li><a href="#">Aceptar Fichas Nivelación</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Cierre de Semestre</a>
                                <ul>
                                    <li><a href="#">Actualizar Materias en Kardex</a></li>
                                    <li><a href="#">Calcular Promedios de Alumnos</a></li>
                                    <li><a href="#">Actualizar Estatus de Alumnos</a></li>
                                    <li><a href="#">Actualizar Semestre de Alumnos</a></li>
                                    <li><a href="#">Bloquear Acceso al Sistema</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#">CONSULTAS</a></li>
                    <li><a href="#">DOCUMENTOS OFICIALES</a>
                        <ul>
                            <li><a href="#">Constancias</a></li>
                            <li><a href="#">Boletas de Calificaciones</a>
                                <ul>
                                    <li><a href="#">Individual</a></li>
                                    <li><a href="#">En Bloque</a></li>
                                    <li><a href="#">General</a></li>
                                    <li><a href="#">Lista de Boletas</a></li>
                                    <li><a href="#">Pronabes</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Acta de Calificaciones</a>
                                <ul>
                                    <li><a href="#">Periodo Normal</a></li>
                                    <li><a href="#">Exámenes Especiales o Globales</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Certificados</a></li>
                            <li><a href="#">Cargas Académicas</a></li>
                            <li><a href="#">Acta Residencia</a></li>
                        </ul>
                    </li>
                    <li><a href="#">UTILERÍAS</a></li>
                    <li><a href="#">CERRAR SESIÓN</a></li>
                </ul>
            </nav>
        </div>
    );
}
