import React from 'react'

export default function Detalle({data}) {
    return (data != undefined && data!="") ? (
        <>
        <div className='text-center text-md my-3'>Detalle de vehículo</div>

        <div><span className='font-semibold'>Placa:</span>{data.placa}</div>
        <div><span className='font-semibold'>Año: </span>{data.anio}</div>
        <div><span className='font-semibold'>Marca: </span>{data.marca}</div>
        <div><span className='font-semibold'>Modelo: </span>{data.modelo}</div>
        <div><span className='font-semibold'>Color:</span> {data.color}</div>
        <div><span className='font-semibold'>Asientos: </span>{data.asientos}</div>
        <div><span className='font-semibold'>Número económico:</span> {data.numero_economico}</div>
        <div><span className='font-semibold'>Seguro: </span>{data.seguro}</div>
        <div><span className='font-semibold'>Número de seguro: </span>{data.segure_number}</div>
        <div><span className='font-semibold'>Vim:</span> {data.vim}</div>
        <div><span className='font-semibold'>Latitud:</span> {data.latitud}</div>
        <div><span className='font-semibold'>Longitud:</span> {data.longitud}</div>
        </>
    ) : (
        <>
            <div className='text-center m-auto'>
                <p className='m-auto'>Para visualizar el detalle del vehículo, da click en el vehículo necesario.</p>
            </div>
        </>
    );
}