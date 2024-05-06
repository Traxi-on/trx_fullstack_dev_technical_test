import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { createMuiTheme, makeStyles } from '@mui/material';
import vehicles from './../../public/assets/carMock.json';
import EventBus from './EventBus';

function createData(
  plate: string,
  eco_number: string,
  vim: string,
  seats: number,
  sec: string,
  sec_number: string,
  brand: string,
  model: string,
  year: number,
  color: string 
) {
  return { plate, eco_number, vim, seats, sec, sec_number, brand, model, year, color };
}

const rows = vehicles;

export default function VehicleTable() {
  const setVehicle = (vehicle: any) => {
    EventBus.dispatch("couponApply", { vehicle });
  }

  return (
    <TableContainer component={Paper} sx={{ width: '100%', height: '600px', margin: 'auto' }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#D0DF00 !important', fontWeight: 'bold' }}>
            <TableCell className='bold'>Placa</TableCell>
            <TableCell className='bold' align="left">Número económico</TableCell>
            <TableCell className='bold' align="left">Vim</TableCell>
            <TableCell className='bold' align="left">Asientos</TableCell>
            <TableCell className='bold' align="left">Seguro</TableCell>
            <TableCell className='bold' align="left">No. Seguro</TableCell>
            <TableCell className='bold' align="left">Marca</TableCell>
            <TableCell className='bold' align="left">Modelo</TableCell>
            <TableCell className='bold' align="left">Año</TableCell>
            <TableCell className='bold' align="left">Color</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
              onClick={() => setVehicle(row)}
            >
              <TableCell>{row.plate}</TableCell>
              <TableCell align="center">{row.eco_number}</TableCell>
              <TableCell align="center">{row.vim}</TableCell>
              <TableCell align="center">{row.seats}</TableCell>
              <TableCell align="center">{row.sec}</TableCell>
              <TableCell align="center">{row.sec_number}</TableCell>
              <TableCell align="center">{row.brand}</TableCell>
              <TableCell align="center">{row.model}</TableCell>
              <TableCell align="center">{row.year}</TableCell>
              <TableCell align="center">{row.color}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}