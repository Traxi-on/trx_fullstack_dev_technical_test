import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import EventBus from "./EventBus";
axios.defaults.baseURL = "http://localhost:3001";

export default function VehicleDialog() {
  const [update, setUpdate] = React.useState(false);
  const [id, setId] = React.useState("");
  const [buttonText, setButtonText] = React.useState("Agregar");

  const [open, setOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  // Call fetchData on component mount
  React.useEffect(() => {
    EventBus.on("updateVehicle", (data: any) => {
      handleClickOpen();
      setUpdate(true);

      setId(data.row._id);
      setButtonText("Actualizar");
      setValue("plate", data.row.plate);
      setValue("eco_number", data.row.eco_number);
      setValue("vim", data.row.vim);
      setValue("seats", data.row.seats);
      setValue("sec", data.row.sec);
      setValue("sec_number", data.row.sec_number);
      setValue("brand", data.row.brand);
      setValue("model", data.row.model);
      setValue("year", data.row.year);
      setValue("color", data.row.color);
      setValue("lng", data.row.lng);
      setValue("lat", data.row.lat);
    });
  }, []);

  const onSubmit = (data: any) => {
    // call create vehicle api
    if (update) {
      axios
        .put("/vehicles/" + id, data)
        .then(function (response) {
          reset();
          handleClose();
        })
        .catch(function (error) {
          
        });
    } else {
      axios
        .post("/vehicles", data)
        .then(function (response) {
          reset();
          handleClose();
        })
        .catch(function (error) {
          
        });
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    EventBus.dispatch("getVehicles", { close: true });
    setOpen(false);
    setUpdate(false);
    reset();
  };

  return (
    <React.Fragment>
      <Button
        sx={{
          backgroundColor: "#D0DF00!important",
          color: "rgba(0, 0, 0, 0.87)",
        }}
        onClick={handleClickOpen}
      >
        Agregar vehículo
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Vehículo</DialogTitle>
        <DialogContent>
          <div className="App">
            <form>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <div className="form-control">
                    <TextField
                      autoFocus
                      required
                      margin="dense"
                      {...register("plate", {
                        required: true,
                      })}
                      name="plate"
                      label="Placa"
                      fullWidth
                      variant="outlined"
                      size="small"
                      error={errors.plate && errors.plate.type === "required"}
                    />
                    {errors.plate && errors.plate.type === "required" && (
                      <p className="errorMsg">Placa es requerida</p>
                    )}
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="form-control">
                    <TextField
                      required
                      margin="dense"
                      {...register("eco_number", {
                        required: true,
                      })}
                      name="eco_number"
                      label="Número económico"
                      fullWidth
                      variant="outlined"
                      size="small"
                      error={
                        errors.eco_number &&
                        errors.eco_number.type === "required"
                      }
                    />
                    {errors.eco_number &&
                      errors.eco_number.type === "required" && (
                        <p className="errorMsg">Núm. económico es requerida</p>
                      )}
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="form-control">
                    <TextField
                      required
                      margin="dense"
                      {...register("vim", {
                        required: true,
                      })}
                      name="vim"
                      label="Vim"
                      fullWidth
                      variant="outlined"
                      size="small"
                      error={errors.vim && errors.vim.type === "required"}
                    />
                    {errors.vim && errors.vim.type === "required" && (
                      <p className="errorMsg">Vim es requerida</p>
                    )}
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <div className="form-control">
                    <TextField
                      required
                      margin="dense"
                      {...register("seats", {
                        required: true,
                      })}
                      name="seats"
                      label="Asientos"
                      fullWidth
                      variant="outlined"
                      size="small"
                      error={errors.seats && errors.seats.type === "required"}
                    />
                    {errors.seats && errors.seats.type === "required" && (
                      <p className="errorMsg">Asientos es requerido</p>
                    )}
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="form-control">
                    <TextField
                      required
                      margin="dense"
                      {...register("sec", {
                        required: true,
                      })}
                      name="sec"
                      label="Seguro"
                      fullWidth
                      variant="outlined"
                      size="small"
                      error={errors.sec && errors.sec.type === "required"}
                    />
                    {errors.sec && errors.sec.type === "required" && (
                      <p className="errorMsg">Seguro es requerido</p>
                    )}
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="form-control">
                    <TextField
                      required
                      margin="dense"
                      {...register("sec_number", {
                        required: true,
                      })}
                      name="sec_number"
                      label="Número de seguro"
                      fullWidth
                      variant="outlined"
                      size="small"
                      error={
                        errors.sec_number &&
                        errors.sec_number.type === "required"
                      }
                    />
                    {errors.sec_number &&
                      errors.sec_number.type === "required" && (
                        <p className="errorMsg">Núm. de Seg. es requerido</p>
                      )}
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <div className="form-control">
                    <TextField
                      required
                      margin="dense"
                      {...register("brand", {
                        required: true,
                      })}
                      name="brand"
                      label="Marca"
                      fullWidth
                      variant="outlined"
                      size="small"
                      error={errors.brand && errors.brand.type === "required"}
                    />
                    {errors.brand && errors.brand.type === "required" && (
                      <p className="errorMsg">Marca es requerida</p>
                    )}
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="form-control">
                    <TextField
                      required
                      margin="dense"
                      {...register("model", {
                        required: true,
                      })}
                      name="model"
                      label="Modelo"
                      fullWidth
                      variant="outlined"
                      size="small"
                      error={errors.model && errors.model.type === "required"}
                    />
                    {errors.model && errors.model.type === "required" && (
                      <p className="errorMsg">Modelo es requerido</p>
                    )}
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="form-control">
                    <TextField
                      required
                      margin="dense"
                      {...register("year", {
                        required: true,
                      })}
                      name="year"
                      label="Año"
                      fullWidth
                      variant="outlined"
                      size="small"
                      error={errors.year && errors.year.type === "required"}
                    />
                    {errors.year && errors.year.type === "required" && (
                      <p className="errorMsg">Año es requerido</p>
                    )}
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <div className="form-control">
                    <TextField
                      required
                      margin="dense"
                      {...register("color", {
                        required: true,
                      })}
                      name="color"
                      label="Color"
                      fullWidth
                      variant="outlined"
                      size="small"
                      error={errors.color && errors.color.type === "required"}
                    />
                    {errors.color && errors.color.type === "required" && (
                      <p className="errorMsg">Color es requerido</p>
                    )}
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="form-control">
                    <TextField
                      required
                      margin="dense"
                      {...register("lng", {
                        required: true,
                      })}
                      name="lng"
                      label="Longitud"
                      fullWidth
                      variant="outlined"
                      size="small"
                      error={errors.lng && errors.lng.type === "required"}
                    />
                    {errors.lng && errors.lng.type === "required" && (
                      <p className="errorMsg">Longitud es requerida</p>
                    )}
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="form-control">
                    <TextField
                      required
                      margin="dense"
                      {...register("lat", {
                        required: true,
                      })}
                      name="lat"
                      label="Latitud"
                      fullWidth
                      variant="outlined"
                      size="small"
                      error={errors.lat && errors.lat.type === "required"}
                    />
                    {errors.lat && errors.lat.type === "required" && (
                      <p className="errorMsg">Latitud es requerida</p>
                    )}
                  </div>
                </Grid>
              </Grid>
            </form>
          </div>
        </DialogContent>
        <DialogActions sx={{ paddingRight: "25px" }}>
          <Button
            onClick={handleClose}
            sx={{
              backgroundColor: "#FFFFFF!important",
              color: "rgba(0, 0, 0, 0.87)",
            }}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            sx={{
              backgroundColor: "#D0DF00!important",
              color: "rgba(0, 0, 0, 0.87)",
            }}
            onClick={handleSubmit(onSubmit)}
          >
            {update ? 'Actualizar' : 'Agregar'}


          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
