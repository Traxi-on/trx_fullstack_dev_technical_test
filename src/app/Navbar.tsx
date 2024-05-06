import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Image from 'next/image'

function Navbar() {
    return (
        <AppBar position="fixed" sx={{ bgcolor: "white", padding: '10px' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Image
                        src="/img/logotipo_traxion.svg"
                        width={140}
                        height={200}
                        alt="Picture of the author"
                    />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
