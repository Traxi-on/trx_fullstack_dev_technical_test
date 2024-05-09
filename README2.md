
# Aplicación web
El front se realizó con nextjs 
La aplicación web muestra un mapa como sección principal con rutas y marcadores de vehículos, seguido de una lista de vehículos con búsqueda y paginación , un formulario para agregar,actualizar y eliminar datos.

Hecho con ReactJS, Next.js


## Demo
https://nnrm.talachas.dev/


## Servicios
CRUD para los datos de vehículos
Hecho con Express.js y Mongodb

#### Obtener todos los vehículos

```http
  GET https://nnrm.talachas.dev/api/
```
#### Obtener vehículos por id
```http
  GET https://nnrm.talachas.dev/api/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id del vehículoa buscar |

#### Dar de alta vehículo

```http
  POST https://nnrm.talachas.dev/api/
```
Recibe un objeto JSON

```JSON

  {
    "placa": "6157184027",
    "numero_economico": "7686239403",
    "vim": "1C3BC8EG8BN532515",
    "asientos": 40,
    "seguro": "Considine, Hirthe and Schmitt",
    "numero_deseguro": "3582601633",
    "marca": "Lincoln",
    "modelo": "MKT",
    "anio": 2012,
    "color": "Red",
    "latitud": 19.4775,
    "longitud": -99.1278
    }
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `placa` | `string` |placa de vehículo |
| `numero_economico` | `string` ||
| `vim` | `string` |  |
| `asientos` | `number` | El número de asientosque tiene el vehículo |
| `numero_deseguro` | `string` | El número de seguro del vehículo |
| `seguro` | `string` | El nombre de seguro del vehículo|
| `marca` | `string` | La marca del vehículo|
| `modelo` | `string` | El modelo del vehículo|
| `anio` | `number` | El año del vehículo|
| `color` | `string` | El color del vehículo|
| `latitud` | `decimal` | La latitud de la ubicación del vehículo|
| `longitud` | `decimal` |La longitud  de la ubicación del vehículo |

#### Eliminar vehículo por id

```http
  DELETE https://nnrm.talachas.dev/api/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id del vehículo a eliminar|

#### Editar vehículo por id

```http
  PUT https://nnrm.talachas.dev/api/${id}
```
Recibe un objeto JSON

```JSON

  {
    "placa": "6157184027",
    "numero_economico": "7686239403",
    "vim": "1C3BC8EG8BN532515",
    "asientos": 40,
    "seguro": "Considine, Hirthe and Schmitt",
    "numero_deseguro": "3582601633",
    "marca": "Lincoln",
    "modelo": "MKT",
    "anio": 2012,
    "color": "Red",
    "latitud": 19.4775,
    "longitud": -99.1278
    }
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `string` | **Required**. Id del vehículo a editar|
| `placa` | `string` |placa de vehículo |
| `numero_economico` | `string` ||
| `vim` | `string` |  |
| `asientos` | `number` | El número de asientosque tiene el vehículo |
| `numero_deseguro` | `string` | El número de seguro del vehículo |
| `seguro` | `string` | El nombre de seguro del vehículo|
| `marca` | `string` | La marca del vehículo|
| `modelo` | `string` | El modelo del vehículo|
| `anio` | `number` | El año del vehículo|
| `color` | `string` | El color del vehículo|
| `latitud` | `decimal` | La latitud de la ubicación del vehículo|
| `longitud` | `decimal` |La longitud  de la ubicación del vehículo |

