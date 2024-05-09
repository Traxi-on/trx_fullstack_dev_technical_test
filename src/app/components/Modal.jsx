import React, { useState } from "react";

import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue 
    || {
      placa: "",
      color: "",
      marca: "",
      modelo: "",
      anio: 0,
      asientos: 0,
      numero_economico: "",
      seguro: "",
      numero_deseguro: "",
      vim: "",
      latitud: 0.0,
      longitud: 0-0
    }
  );

  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.placa && formState.color && formState.marca && formState.modelo && formState.anio 
        && formState.asientos && formState.numero_economico && formState.seguro && formState.numero_deseguro 
        && formState.vim && formState.latitud && formState.longitud) {

          formState.asientos=parseInt(formState.asientos);
          formState.anio=parseInt(formState.anio);
          formState.latitud=parseFloat(formState.latitud);
          formState.longitud=parseFloat(formState.longitud);
          
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
            let key1=key;
            
            if (key=="numero_deseguro") key1="número de seguro";
            if (key=="numero_economico") key1="número económico";
            
          errorFields.push(key1);
        }

        

      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    onSubmit(formState);
    closeModal();
    
  };

    let minOffset = 0, maxOffset = 20;
    let thisYear = (new Date()).getFullYear();
    let allYears = [];
    for(let x = 0; x <= maxOffset; x++) {
        allYears.push(thisYear - x)
    }

    const yearList = allYears.map((x) => {return(<option key={x}>{x}</option>)})

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
            <div className="columnas">
                <div className="form-group">
                    <label htmlFor="placa">Placas</label>
                    <input type="text" name="placa" value={formState.placa} onChange={handleChange}  maxLength={8}/>
                </div>

                <div className="form-group">
                    <label htmlFor="anio">Año</label>
                    <select name="anio" value={formState.anio} onChange={handleChange}>
                    {yearList}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="marca">Marca</label>
                    <input name="marca" value={formState.marca} onChange={handleChange} maxLength={30}/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="modelo">Modelo</label>
                    <input name="modelo" value={formState.modelo} onChange={handleChange} maxLength={30}/>
                </div>

                <div className="form-group">
                    <label htmlFor="color">Color</label>
                    <input name="color" value={formState.color} onChange={handleChange} maxLength={30}/>
                </div>
                <div className="form-group">
                    <label htmlFor="asientos">Asientos</label>
                    <input type="number" name="asientos" value={formState.asientos} onChange={handleChange}/>
                </div>

              </div>    
              <div className="columnas">

                <div className="form-group">
                    <label htmlFor="numero_economico">Número económico</label>
                    <input name="numero_economico" value={formState.numero_economico} onChange={handleChange}/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="seguro">Seguro</label>
                    <input name="seguro" value={formState.seguro} onChange={handleChange}/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="numero_deseguro">Número de seguro</label>
                    <input name="numero_deseguro" value={formState.numero_deseguro} onChange={handleChange}/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="vim">Vim</label>
                    <input name="vim" value={formState.vim} onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="latitud">Latitud</label>
                    <input name="latitud" value={formState.latitud} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="longitud">Longitud</label>
                    <input name="longitud" value={formState.longitud} onChange={handleChange}/>
                </div>
            </div>
            

          {errors && <div className="error">{`Los datos son obligatorios: ${errors}`}</div>}
          <button type="submit" className="btn rounded hover:rounded-lg bg-blue-500 p-2 text-white" onClick={handleSubmit}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};