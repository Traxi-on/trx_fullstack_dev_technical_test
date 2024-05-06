'use client';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import VehicleTable from './VehicleTable';
import Navbar from './Navbar';
import { ThemeProvider, createMuiTheme } from '@mui/material';

const theme = createMuiTheme({
  typography: {
   "fontFamily": `"Roboto", sans-serif`,
   "fontSize": 14,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500
  }
});

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Navbar></Navbar>  
        <CssBaseline />
        <Container maxWidth="sm" sx={{ marginTop: '10em' }}>
          <VehicleTable></VehicleTable>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}