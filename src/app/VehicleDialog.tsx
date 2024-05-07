import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid } from '@mui/material';
import { useForm } from "react-hook-form";

export default function VehicleDialog() {
    const [open, setOpen] = React.useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        reset();
        handleClose();
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button sx={{ backgroundColor: '#D0DF00!important', color: 'rgba(0, 0, 0, 0.87)' }} onClick={handleClickOpen}>
                Agregar vehículo
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
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
                                            {...register("plate")}
                                            name="plate"
                                            label="Placa"
                                            fullWidth
                                            variant="outlined"
                                            size='small'
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className="form-control">
                                        <TextField
                                            required
                                            margin="dense"
                                            {...register("eco_number")}
                                            name="eco_number"
                                            label="Número económico"
                                            fullWidth
                                            variant="outlined"
                                            size='small'
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className="form-control">
                                        <TextField
                                            required
                                            margin="dense"
                                            {...register("vim")}
                                            name="vim"
                                            label="Vim"
                                            fullWidth
                                            variant="outlined"
                                            size='small'
                                        />
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item xs={4}>
                                    <div className="form-control">
                                        <TextField
                                            required
                                            margin="dense"
                                            {...register("seats")}
                                            name="seats"
                                            label="Asientos"
                                            fullWidth
                                            variant="outlined"
                                            size='small'
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className="form-control">
                                        <TextField
                                            required
                                            margin="dense"
                                            {...register("sec")}
                                            name="sec"
                                            label="Seguro"
                                            fullWidth
                                            variant="outlined"
                                            size='small'
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className="form-control">
                                        <TextField
                                            required
                                            margin="dense"
                                            {...register("sec_number")}
                                            name="sec_number"
                                            label="Número de seguro"
                                            fullWidth
                                            variant="outlined"
                                            size='small'
                                        />
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item xs={4}>
                                    <div className="form-control">
                                        <TextField
                                            required
                                            margin="dense"
                                            {...register("brand")}
                                            name="brand"
                                            label="Marca"
                                            fullWidth
                                            variant="outlined"
                                            size='small'
                                        />
                                    </div>

                                </Grid>
                                <Grid item xs={4}>
                                    <div className="form-control">
                                        <TextField
                                            required
                                            margin="dense"
                                            {...register("model")}
                                            name="model"
                                            label="Modelo"
                                            fullWidth
                                            variant="outlined"
                                            size='small'
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className="form-control">
                                        <TextField
                                            required
                                            margin="dense"
                                            {...register("year")}
                                            name="year"
                                            label="Año"
                                            fullWidth
                                            variant="outlined"
                                            size='small'
                                        />
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item xs={4}>
                                    <div className="form-control">
                                        <TextField
                                            required
                                            margin="dense"
                                            {...register("color")}
                                            name="color"
                                            label="Color"
                                            fullWidth
                                            variant="outlined"
                                            size='small'
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className="form-control">
                                        <TextField
                                            required
                                            margin="dense"
                                            {...register("lng")}
                                            name="lng"
                                            label="Longitud"
                                            fullWidth
                                            variant="outlined"
                                            size='small'
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={4}>

                                    <div className="form-control">
                                        <TextField
                                            required
                                            margin="dense"
                                            {...register("lat")}
                                            name="lat"
                                            label="Latitud"
                                            fullWidth
                                            variant="outlined"
                                            size='small'
                                        />
                                    </div>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </DialogContent>
                <DialogActions sx={{ paddingRight: "25px" }}>
                    <Button onClick={handleClose}
                        sx={{ backgroundColor: '#FFFFFF!important', color: 'rgba(0, 0, 0, 0.87)' }}>
                        Cancelar</Button>
                    <Button type="submit"
                        sx={{ backgroundColor: '#D0DF00!important', color: 'rgba(0, 0, 0, 0.87)' }}
                        onClick={handleSubmit(onSubmit)}>
                        Agregar</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
