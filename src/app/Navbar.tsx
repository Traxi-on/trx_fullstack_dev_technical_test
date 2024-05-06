import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo_traxion from '../../public/img/logotipo_traxion.svg'
import Image from 'next/image'

function Navbar() {
    return (
        <AppBar position="fixed" sx={{ bgcolor: "white", padding: '10px', marginBottom: '3em' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Image
                        src="/img/logotipo_traxion.svg"
                        width={180}
                        height={500}
                        alt="Picture of the author"
                    />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
