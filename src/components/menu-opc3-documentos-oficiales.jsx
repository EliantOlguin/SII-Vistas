import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function MenuOpc3DocumentosOficiales() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [openListSeleccionDeMaterias, setOpenListSeleccionDeMaterias] = React.useState(true);

    const handleClickListSeleccionDeMaterias = () => {
        setOpenListSeleccionDeMaterias(!openListSeleccionDeMaterias);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ color: 'white' }}
                variant="contained" disableElevation
            >
                Documentos Oficiales
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
                    <Link href="#" color="inherit" underline="none">
                        <ListItemButton>
                            <ListItemText primary="Constancias" />
                        </ListItemButton>
                    </Link>

                    <ListItemButton onClick={handleClickListSeleccionDeMaterias}>
                        <ListItemText primary="Boletas de Calificaciones" />
                        {!openListSeleccionDeMaterias ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={!openListSeleccionDeMaterias} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link href="#" color="inherit" underline="none">
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Individual" />
                                </ListItemButton>
                            </Link>

                            <Link href="#" color="inherit" underline="none">
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="En Bloque" />
                                </ListItemButton>
                            </Link>

                            <Link href="#" color="inherit" underline="none">
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="General" />
                                </ListItemButton>
                            </Link>
                            
                            <Link href="#" color="inherit" underline="none">
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Lista de Boletas" />
                                </ListItemButton>
                            </Link>

                            <Link href="#" color="inherit" underline="none">
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Pronabes" />
                                </ListItemButton>
                            </Link>
                        </List>
                    </Collapse>

                    <Link href="#" color="inherit" underline="none">
                        <ListItemButton>
                            <ListItemText primary="Acta de Calificaciones" />
                        </ListItemButton>
                    </Link>

                    <Link href="#" color="inherit" underline="none">
                        <ListItemButton>
                            <ListItemText primary="Certificados" />
                        </ListItemButton>
                    </Link>

                    <Link href="#" color="inherit" underline="none">
                        <ListItemButton>
                            <ListItemText primary="Cargas Académicas" />
                        </ListItemButton>
                    </Link>

                    <Link href="#" color="inherit" underline="none">
                        <ListItemButton>
                            <ListItemText primary="Acta Residencia" />
                        </ListItemButton>
                    </Link>
                </List>
            </Menu>
        </div>
    );
}