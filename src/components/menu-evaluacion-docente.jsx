import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import QuizIcon from '@mui/icons-material/Quiz';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';

export default function MenuInformacionBasica() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
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
                Evaluación docente
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
                            <ListItemIcon>
                                <QuizIcon />
                            </ListItemIcon>
                            <ListItemText primary="Realizar evaluación" />
                        </ListItemButton>
                    </Link>
                    <Link href="#" color="inherit" underline="none">
                        <ListItemButton>
                            <ListItemIcon>
                                <LibraryAddCheckIcon />
                            </ListItemIcon>
                            <ListItemText primary="Evaluaciones realizadas" />
                        </ListItemButton>
                    </Link>
                </List>
            </Menu>
        </div>
    );
}