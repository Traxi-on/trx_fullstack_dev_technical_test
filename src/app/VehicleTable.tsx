import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Button,
  TablePagination,
  TextField,
  createMuiTheme,
  makeStyles,
} from "@mui/material";
import EventBus from "./EventBus";
import VehicleDialog from "./VehicleDialog";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";

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
  return {
    plate,
    eco_number,
    vim,
    seats,
    sec,
    sec_number,
    brand,
    model,
    year,
    color,
  };
}

export default function VehicleTable() {
  let [vehicles, setVehicles] = React.useState([]);

  // Function to fetch data using Axios
  const fetchData = async () => {
    try {
      await axios
        .get("/vehicles")
        .then(function (response) {
          console.log(response);
          setVehicles(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Call fetchData on component mount
  React.useEffect(() => {
    fetchData();
  }, []);

  const setVehicle = (vehicle: any) => {
    EventBus.dispatch("couponApply", { vehicle });
  };

  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Buscar vehículo"
          variant="outlined"
          sx={{ width: "25%" }}
          size="small"
        />
        <VehicleDialog></VehicleDialog>
      </div>
      <TableContainer
        component={Paper}
        sx={{
          width: "100%",
          height: "500px",
          margin: "auto",
          marginTop: "1em",
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{ backgroundColor: "#D0DF00 !important", fontWeight: "bold" }}
            >
              <TableCell className="bold">Placa</TableCell>
              <TableCell className="bold" align="left">
                Número económico
              </TableCell>
              <TableCell className="bold" align="left">
                Vim
              </TableCell>
              <TableCell className="bold" align="left">
                Asientos
              </TableCell>
              <TableCell className="bold" align="left">
                Seguro
              </TableCell>
              <TableCell className="bold" align="left">
                No. Seguro
              </TableCell>
              <TableCell className="bold" align="left">
                Marca
              </TableCell>
              <TableCell className="bold" align="left">
                Modelo
              </TableCell>
              <TableCell className="bold" align="left">
                Año
              </TableCell>
              <TableCell className="bold" align="left">
                Color
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? vehicles.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : vehicles
            ).map((row:any, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  cursor: "pointer",
                }}
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
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={vehicles.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
