import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import { NavLink } from 'react-router-dom';

export default function MenuOpc1Mantenimiento() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [openListServicioSocial, setOpenListServicioSocial] = React.useState(true);

    const handleClickListServicioSocial = () => {
        setOpenListServicioSocial(!openListServicioSocial);
    };

    const [openListResidenciasProfesionales, setOpenListResidenciasProfesionales] = React.useState(true);

    const handleClickListResidenciasProfesionales = () => {
        setOpenListResidenciasProfesionales(!openListResidenciasProfesionales);
    };

    const [openListMantenimientoAspirantes, setOpenListMantenimientoAspirantes] = React.useState(true);

    const handleClickListMantenimientoAspirantes = () => {
        setOpenListMantenimientoAspirantes(!openListMantenimientoAspirantes);
    };

    const [openListMantenimientoAspirantesPeriodosDeAdmision, setOpenListMantenimientoAspirantesPeriodosDeAdmision] = React.useState(true);

    const handleClickListMantenimientoAspirantesPeriodosDeAdmision = () => {
        setOpenListMantenimientoAspirantesPeriodosDeAdmision(!openListMantenimientoAspirantesPeriodosDeAdmision);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{color: 'white'}}
                variant="contained" disableElevation
            >
                Mantenimiento
            </Button>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    {/* <ListItemButton onClick={handleClickListServicioSocial}>
                        <ListItemIcon>
                            <Diversity1Icon />
                        </ListItemIcon>
                        <ListItemText primary="Alumnos" />
                        {!openListServicioSocial ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={!openListServicioSocial} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link component={NavLink} to="/mantenimiento/1alumnos/Opc1" color="inherit" underline="none">
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Alta Alumnos" />
                            </ListItemButton>
                            </Link>
                            <Link href="#" color="inherit" underline="none">
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Modificación de Datos del Alumno" />
                            </ListItemButton>
                            </Link>
                            <Link component={NavLink} to="/mantenimiento/1alumnos/Opc3" color="inherit" underline="none">
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Eliminación de Alumnos" />
                            </ListItemButton>
                            </Link>
                            <Link href="#" color="inherit" underline="none">
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Adeudos" />
                            </ListItemButton>
                            </Link>
                            <Link component={NavLink} to="/mantenimiento/1alumnos/Opc5" color="inherit" underline="none">
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Registro de Titulados" />
                            </ListItemButton>
                            </Link>
                            <Link component={NavLink} to="/mantenimiento/1alumnos/Opc6" color="inherit" underline="none">
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Generar Números de Control" />
                            </ListItemButton>
                            </Link>
                            <Link href="#" color="inherit" underline="none">
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Recuperar Semestres" />
                            </ListItemButton>
                            </Link>
                            <Link component={NavLink} to="/mantenimiento/1alumnos/Opc8" color="inherit" underline="none">
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Redactar Mensaje" />
                            </ListItemButton>
                            </Link>
                            <Link component={NavLink} to="/mantenimiento/1alumnos/Opc9" color="inherit" underline="none">
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Nips de Alumnos" />
                            </ListItemButton>
                            </Link>
                        </List>
                    </Collapse> */}

                    {/* <Link component={NavLink} to="/mantenimiento/2historiaacademica/Opc1" color="inherit" underline="none">
                    <ListItemButton>
                        <ListItemText primary="Historia Académica" />
                    </ListItemButton>
                    </Link> */}

                    {/* <ListItemButton onClick={handleClickListResidenciasProfesionales}>
                        <ListItemText primary="Calificaciones y Actas" />
                        {!openListResidenciasProfesionales ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={!openListResidenciasProfesionales} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link component={NavLink} to="/mantenimiento/3calificacionesyactas/Opc1" color="inherit" underline="none">
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Periodo Normal" />
                            </ListItemButton>
                            </Link>
                            <Link href="#" color="inherit" underline="none">
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Exámenes Especiales o Globales" />
                            </ListItemButton>
                            </Link>
                            <Link href="#" color="inherit" underline="none">
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Generar Folios para Actas" />
                            </ListItemButton>
                            </Link>
                            <Link href="#" color="inherit" underline="none">
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Residencias" />
                            </ListItemButton>
                            </Link>
                        </List>
                    </Collapse> */}

                    {/* <Link component={NavLink} to="/mantenimiento/4inscripciones/Opc1" color="inherit" underline="none">
                    <ListItemButton>
                        <ListItemText primary="Inscripciones" />
                    </ListItemButton>
                    </Link> */}
                    
                    {/* <Link href="#" color="inherit" underline="none">
                    <ListItemButton>
                        <ListItemText primary="Carreras" />
                    </ListItemButton>
                    </Link> */}
                    
                    {/* <Link href="#" color="inherit" underline="none">
                    <ListItemButton>
                        <ListItemText primary="Especialidades" />
                    </ListItemButton>
                    </Link> */}

                    {/* <Link href="#" color="inherit" underline="none">
                    <ListItemButton>
                        <ListItemText primary="Plan Curricular" />
                    </ListItemButton>
                    </Link> */}

                    {/* <Link href="#" color="inherit" underline="none">
                    <ListItemButton>
                        <ListItemText primary="Exámenes Especiales" />
                    </ListItemButton>
                    </Link> */}

                    {/* <Link href="#" color="inherit" underline="none">
                    <ListItemButton>
                        <ListItemText primary="Periodos Escolares" />
                    </ListItemButton>
                    </Link> */}

                    {/* <ListItemButton onClick={handleClickListMantenimientoAspirantes}>
                        <ListItemText primary="Aspirantes" />
                        {!openListMantenimientoAspirantes ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={!openListMantenimientoAspirantes} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link href="#" color="inherit" underline="none">
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Periodos De Admisión" />
                            </ListItemButton>
                            </Link>
                        </List>
                    </Collapse> */}

                    <ListItemButton onClick={handleClickListMantenimientoAspirantes}>
                        <ListItemText primary="Aspirantes" />
                        {!openListMantenimientoAspirantes ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={!openListMantenimientoAspirantes} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }} onClick={handleClickListMantenimientoAspirantesPeriodosDeAdmision}>
                                <ListItemText primary="Periodos De Admisión" />
                                {!openListMantenimientoAspirantesPeriodosDeAdmision ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={!openListMantenimientoAspirantesPeriodosDeAdmision} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <Link component={NavLink} to="/mantenimiento/aspirantes/periodosdeadmision/crearperiodo" color="inherit" underline="none">
                                    <ListItemButton sx={{ pl: 8 }}>
                                        <ListItemText primary="Crear Periodo" />
                                    </ListItemButton>
                                    </Link>
                                    <Link component={NavLink} to="/mantenimiento/aspirantes/periodosdeadmision/consultarperiodo" color="inherit" underline="none">
                                    <ListItemButton sx={{ pl: 8 }}>
                                        <ListItemText primary="Consultar Periodo" />
                                    </ListItemButton>
                                    </Link>
                                    <Link component={NavLink} to="/mantenimiento/aspirantes/periodosdeadmision/modificarperiodo" color="inherit" underline="none">
                                    <ListItemButton sx={{ pl: 8 }}>
                                        <ListItemText primary="Modificar Periodo" />
                                    </ListItemButton>
                                    </Link>
                                    <Link component={NavLink} to="/mantenimiento/aspirantes/periodosdeadmision/eliminarperiodo" color="inherit" underline="none">
                                    <ListItemButton sx={{ pl: 8 }}>
                                        <ListItemText primary="Elimiar Periodo" />
                                    </ListItemButton>
                                    </Link>
                                    <Link component={NavLink} to="/mantenimiento/aspirantes/periodosdeadmision/ejemploperiodo" color="inherit" underline="none">
                                    <ListItemButton sx={{ pl: 8 }}>
                                        <ListItemText primary="Ejemplo Periodo" />
                                    </ListItemButton>
                                    </Link>
                                </List>
                            </Collapse>
                        </List>
                    </Collapse>

                    {/* <Link href="#" color="inherit" underline="none">
                    <ListItemButton>
                        <ListItemText primary="Cierre de Semestre" />
                    </ListItemButton>
                    </Link> */}
                </List>
            </Menu>
        </div>
    );
}