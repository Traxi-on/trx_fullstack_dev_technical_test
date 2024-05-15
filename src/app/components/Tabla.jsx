"use client"
import React, {useState, useEffect, useContext} from 'react';
import DataTable from 'react-data-table-component';
import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { MdAddCircleOutline } from "react-icons/md";
import Detalle from "./Detalle";
import {Modal} from "./Modal";
import {VehicleContext} from "../contexts/VehicleContext";

export default function Tabla() {

    const [vehiculos, setVehiculos] = useState([])
    const [datosTabla, setDatosTabla] = useState([])
    const [detalle, setDetalle] = useState('')

    const [modalOpen, setModalOpen] = useState(false);
    const [rowToEdit, setRowToEdit] = useState(null);
    
    const {setVehiculo}=useContext(VehicleContext);
  
  
    const URL =process.env.NEXT_PUBLIC_ENDPOINT;
    const showData = async () => {
        const response = await fetch(URL)
        const data     = await response.json()
        setVehiculos(data)
        setDatosTabla(data)
    }

    const addData = (newRow) => {
    

        fetch(URL, {
            method: "POST", 
            body: JSON.stringify(newRow),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then((response) => {
                setDatosTabla([...datosTabla, newRow]);
            });
    }

    const updateData = (newRow) => {
        fetch(URL+"/"+newRow._id,{
            method: "PUT",
            body: JSON.stringify(newRow),
            headers: {
              "Content-Type": "application/json",
            },
        }).then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then( (response) => { 
                console.log("Success:", response);
                setDatosTabla(
                    datosTabla.map((currRow) => {
                      if (currRow._id !== newRow._id) return currRow;
          
                      return newRow;
                    })
                );
            });
    }

    const deleteData = (idx) => {
        fetch(URL+"/"+idx,{
            method: "DELETE",
        }).then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then( (response) =>{ 
                console.log("Success:", response);
                const nuevoarray=datosTabla.filter((item) => idx !== item._id);
                setDatosTabla(nuevoarray);
            });
    }

    useEffect( ()=>{
        showData()
    }, [])

    const handleEditRow = (idx) => {
        const element=datosTabla.filter((item) => idx == item._id)[0];
        setRowToEdit(element);
        setModalOpen(true);
    };
    
    const handleClickDel = (id) => {
        deleteData(id);
    };

    const handleRowSelected= (row) => {
        setDetalle(row.selectedRows[0]);
        setVehiculo(row.selectedRows[0]);
    };

    const handlerFilter = (event) => {
        const busqueda=event.target.value.toUpperCase();
        if(busqueda===null || busqueda===""){
            setDatosTabla(vehiculos);
        }else{
            const newdata=vehiculos.filter(row => {
                
                return row.placa.toUpperCase().includes(busqueda) 
                || (row.anio+"").includes(busqueda)
                || row.marca.toUpperCase().includes(busqueda)
                || row.modelo.toUpperCase().includes(busqueda)
                || row.color.toUpperCase().includes(busqueda)
            })
            setDatosTabla(newdata);
        }
    }

    const handleSubmit = (newRow) => {
        rowToEdit === null
          ? addData(newRow)
          : updateData(newRow)
    };

    const columns = [
        {
            name: 'Placa',
            selector: row => row.placa
        },
        {
            name: 'Año',
            selector: row => row.anio
        },
        {
            name: 'Marca',
            selector: row => row.marca
        },
        {
            name: 'Modelo',
            selector: row => row.modelo
        },
        {
            name: 'Color',
            selector: row => row.color
        },
        {
        cell:(d) =>[
            <MdModeEdit key={d._id} onClick={handleEditRow.bind(this, d._id)}  className='mx-3'></MdModeEdit>,
            <AiFillDelete key={d.placa} onClick={handleClickDel.bind(this, d._id)} className='mx-3' ></AiFillDelete>
        ]
        }

    ]


    const MyComponent = () => (
        <DataTable
        title="Arnold Movies"
        columns={columns}
        theme="solarized"
        />
    );

  
  return (
    <>
    <section className='flex catalogo'>
        <div className='w-4/5 border-r-2'>
            <div className='header my-4 inline-flex w-full'>
                <input className='text-gray-500 sm:w-1/2 md:w-11/12 m-auto' type="text" placeholder='Buscar' onChange={handlerFilter}/>
                
                <button className="btn sm:w-1/2 md:w-1/12 inline-flex justify-end text-gray-500 pr-1" onClick={() => setModalOpen(true)} >
                    <MdAddCircleOutline className="m-auto" /> Agregar
                </button>
            </div>
            <DataTable 
                columns={columns}
                data={datosTabla}
                selectableRows={true}
                selectableRowsSingle
                onSelectedRowsChange={handleRowSelected}
                clearSelectedRows={true}
                pagination 
            />
        </div>
        <div className='w-1/5 px-3 text-xs m-auto'>
            <Detalle data={detalle}></Detalle>
        </div>
    </section>

    {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit}
        />
      )}

    </>
  );

}