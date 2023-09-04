import Root from './routes/root'
import Container from '@mui/material/Container';
import Home from './routes/home/home';
import BoletaCalificaciones from './routes/calificaciones-y-actas/MantOpc3';
import KardexCalificaciones from './routes/historia-academica/MantOpc2';
import Alumnos from './routes/alumnos/MantOpc1';
import { Route, Routes } from 'react-router-dom';

export default function App(){
    return (
        <Container sx={{ mt: 5 }} maxWidth="xxl">
            <Root sx={{mb: 5}} />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/calificaciones/boleta" element={<BoletaCalificaciones/>} />
                <Route path="/calificaciones/kardex" element={<KardexCalificaciones />} />
                <Route path="/alumnos/index" element={<Alumnos />} />
            </Routes>
        </Container>
    )
}