import Root from './routes/root'
import Container from '@mui/material/Container';
import Home from './routes/home/home';
import { Route, Routes } from 'react-router-dom';

import MantenimientoAlumnosOpc1 from "./routes/opciones-menu/1-mantenimiento/1-alumnos/1AltaAlumnos"
import MantenimientoAlumnosOpc3 from "../src/routes/opciones-menu/1-mantenimiento/1-alumnos/3EliminacionDeAlumnos"
import MantenimientoAlumnosOpc5 from "../src/routes/opciones-menu/1-mantenimiento/1-alumnos/5RegistroDeTitulados"
import MantenimientoAlumnosOpc6 from "../src/routes/opciones-menu/1-mantenimiento/1-alumnos/6GenerarNumerosDeControl"
import MantenimientoAlumnosOpc8 from "../src/routes/opciones-menu/1-mantenimiento/1-alumnos/8RedactarMensajes"
import MantenimientoAlumnosOpc9 from "../src/routes/opciones-menu/1-mantenimiento/1-alumnos/9NipsDeAlumnos"

import MantenimientoCalificacionesYActasOpc1 from "../src/routes/opciones-menu/1-mantenimiento/3-calificaciones-y-actas/1PeriodoNormal";

import MantenimientoHistoriaAcademicaOpc1 from "../src/routes/opciones-menu/1-mantenimiento/2-historia-academica/1HistoriaAcademica";

import MantenimientoInscripcionesOpc1 from "../src/routes/opciones-menu/1-mantenimiento/4-inscripciones/1EneJunAgoDic";

import MantenimientoAspirantesPeriodosDeAdmisionCrearPeriodo from "../src/routes/opciones-menu/1-mantenimiento/10-aspirantes/1-CrearPeriodo";
import MantenimientoAspirantesPeriodosDeAdmisionConsultarPeriodo from "../src/routes/opciones-menu/1-mantenimiento/10-aspirantes/2-ConsultarPeriodo";
import MantenimientoAspirantesPeriodosDeAdmisionModificarPeriodo from "../src/routes/opciones-menu/1-mantenimiento/10-aspirantes/3-ModificarPeriodo";
import MantenimientoAspirantesPeriodosDeAdmisionEliminarPeriodo from "../src/routes/opciones-menu/1-mantenimiento/10-aspirantes/4-EliminarPeriodo";
import MantenimientoAspirantesPeriodosDeAdmisionEjemploPeriodo from "../src/routes/opciones-menu/1-mantenimiento/10-aspirantes/EjemploPeriodo";

export default function App(){
    return (
        <Container sx={{ mt: 5 }} maxWidth="xxl">
            <Root sx={{mb: 5}} />
            <Routes>
                <Route path="/" element={<Home/>} />

                <Route path="/mantenimiento/1alumnos/Opc1" element={<MantenimientoAlumnosOpc1/>} />
                <Route path="/mantenimiento/1alumnos/Opc3" element={<MantenimientoAlumnosOpc3/>} />
                <Route path="/mantenimiento/1alumnos/Opc5" element={<MantenimientoAlumnosOpc5/>} />
                <Route path="/mantenimiento/1alumnos/Opc6" element={<MantenimientoAlumnosOpc6/>} />
                <Route path="/mantenimiento/1alumnos/Opc8" element={<MantenimientoAlumnosOpc8/>} />
                <Route path="/mantenimiento/1alumnos/Opc9" element={<MantenimientoAlumnosOpc9/>} />

                <Route path="/mantenimiento/3calificacionesyactas/Opc1" element={<MantenimientoCalificacionesYActasOpc1/>} />

                <Route path="/mantenimiento/2historiaacademica/Opc1" element={<MantenimientoHistoriaAcademicaOpc1/>} />

                <Route path="/mantenimiento/4inscripciones/Opc1" element={<MantenimientoInscripcionesOpc1/>} />

                <Route path='/mantenimiento/aspirantes/periodosdeadmision/crearperiodo' element={<MantenimientoAspirantesPeriodosDeAdmisionCrearPeriodo/>}/>
                <Route path='/mantenimiento/aspirantes/periodosdeadmision/consultarperiodo' element={<MantenimientoAspirantesPeriodosDeAdmisionConsultarPeriodo/>}/>
                <Route path='/mantenimiento/aspirantes/periodosdeadmision/modificarperiodo' element={<MantenimientoAspirantesPeriodosDeAdmisionModificarPeriodo/>}/>
                <Route path='/mantenimiento/aspirantes/periodosdeadmision/eliminarperiodo' element={<MantenimientoAspirantesPeriodosDeAdmisionEliminarPeriodo/>}/>
                <Route path='/mantenimiento/aspirantes/periodosdeadmision/ejemploperiodo' element={<MantenimientoAspirantesPeriodosDeAdmisionEjemploPeriodo/>}/>
            </Routes>
        </Container>
    )
}