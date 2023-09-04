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

import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import Groups3Icon from '@mui/icons-material/Groups3';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';

export default function MenuInformacionBasica() {
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
                Inscripciones
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
                    <ListItemButton onClick={handleClickListSeleccionDeMaterias}>
                        <ListItemIcon>
                            <AssignmentTurnedInIcon />
                        </ListItemIcon>
                        <ListItemText primary="Seleccion de materias" />
                        {!openListSeleccionDeMaterias ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={!openListSeleccionDeMaterias} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link href="#" color="inherit" underline="none">
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Ene - Jun || Ago - Dic" />
                                </ListItemButton>
                            </Link>
                            <Link href="#" color="inherit" underline="none">
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Verano" />
                                </ListItemButton>
                            </Link>
                        </List>
                    </Collapse>
                    <Link href="#" color="inherit" underline="none">
                        <ListItemButton>
                            <ListItemIcon>
                                <Groups3Icon />
                            </ListItemIcon>
                            <ListItemText primary="Grupos disponibles" />
                        </ListItemButton>
                    </Link>
                    <Link href="#" color="inherit" underline="none">
                        <ListItemButton>
                            <ListItemIcon>
                                <QueryBuilderIcon />
                            </ListItemIcon>
                            <ListItemText primary="Horario de reinscripción" />
                        </ListItemButton>
                    </Link>
                </List>
            </Menu>
        </div>
    );
}