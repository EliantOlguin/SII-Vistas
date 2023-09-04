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
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import InfoIcon from '@mui/icons-material/Info';
import { NavLink } from 'react-router-dom';

export default function MenuInformacionBasica() {
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
                Información básica
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
                    <ListItemButton onClick={handleClickListServicioSocial}>
                        <ListItemIcon>
                            <Diversity1Icon />
                        </ListItemIcon>
                        <ListItemText primary="Servicio social" />
                        {!openListServicioSocial ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={!openListServicioSocial} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link href="#" color="inherit" underline="none">
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Realizar solicitud" />
                            </ListItemButton>
                            </Link>
                            <Link href="#" color="inherit" underline="none">
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Imprimir solicitud" />
                            </ListItemButton>
                            </Link>
                        </List>
                    </Collapse>
                    <ListItemButton onClick={handleClickListResidenciasProfesionales}>
                        <ListItemIcon>
                            <SupervisedUserCircleIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Residencias profesionales" />
                        {!openListResidenciasProfesionales ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={!openListResidenciasProfesionales} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link href="#" color="inherit" underline="none">
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Solicitud de residencias profesionales" />
                            </ListItemButton>
                            </Link>
                            <Link href="#" color="inherit" underline="none">
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Impresion de solicitud de residencias profesionales" />
                            </ListItemButton>
                            </Link>
                        </List>
                    </Collapse>
                    <Link href="#" color="inherit" underline="none">
                    <ListItemButton>
                        <ListItemIcon>
                            <AnalyticsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Datos socioeconómicos" />
                    </ListItemButton>
                    </Link>
                    <Link component={NavLink} to="/calificaciones/boleta" color="inherit" underline="none">
                    <ListItemButton>
                        <ListItemIcon>
                            <FactCheckIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Boleta de calificaciones" />
                    </ListItemButton>
                    </Link>
                    <Link href="#" color="inherit" underline="none">
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountTreeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Avance reticular" />
                    </ListItemButton>
                    </Link>
                    <Link component={NavLink} to="/calificaciones/kardex" color="inherit" underline="none">
                    <ListItemButton>
                        <ListItemIcon>
                            <ReceiptLongIcon />
                        </ListItemIcon>
                        <ListItemText primary="Kardex de calificaciones" />
                    </ListItemButton>
                    </Link>
                    <Link href="#" color="inherit" underline="none">
                    <ListItemButton>
                        <ListItemIcon>
                            <FactCheckIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Calif. de exámenes globales o especiales" />
                    </ListItemButton>
                    </Link>
                    <Link href="#" color="inherit" underline="none">
                    <ListItemButton>
                        <ListItemIcon>
                            <StarHalfIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Calificaciones parciales" />
                    </ListItemButton>
                    </Link>
                    <Link href="#" color="inherit" underline="none">
                    <ListItemButton>
                        <ListItemIcon>
                            <SettingsSuggestIcon />
                        </ListItemIcon>
                        <ListItemText primary="Gestión de curso" />
                    </ListItemButton>
                    </Link>
                    <Link component={NavLink} to="/alumnos/index" color="inherit" underline="none">
                    <ListItemButton>
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary="Datos generales" />
                    </ListItemButton>
                    </Link>
                </List>
            </Menu>
        </div>
    );
}