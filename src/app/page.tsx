'use client';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import VehicleTable from './VehicleTable';
import Navbar from './Navbar';
import { Grid, ThemeProvider, createMuiTheme } from '@mui/material';
import Map from './Map';

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
        <Grid container spacing={2} sx={{ marginTop: '5em', padding: '2em' }}>
          <Grid item xs={5}>
            <Map></Map>
          </Grid>
          <Grid item xs={7}>
            <VehicleTable></VehicleTable>
          </Grid>
        </Grid>
      </ThemeProvider>
    </React.Fragment>
  );
}