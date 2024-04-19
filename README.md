
# Tracking Route

Prueba Técnica Traxi



## Tecnologías
Node.js
Express
React con Typescript
MongoDB
## Documentation API

[Documentation API](https://documenter.getpostman.com/view/6305636/2sA3Bn7t9u)

## Documentation Frontend

This documentation is located in the docs directory and provides detailed guidance on the Frontend project.



## Run Backend


Install dependencies

```bash
  npm install
```

Create a .env file at the root of your project directory with the following values:




```bash
PORT=8080
MONGODB_URI= ROUTE_MONGODB
```

Start the server

```bash
  npm run dev
```


## Run Frontend


Install dependencies

```bash
  npm install
```

Create a .env file located at ./envs/.env with the following configurations:


```bash
REACT_APP_API_URL=URL_API
REACT_APP_USE_MOCKS=false
API_KEY_GOOGLE= API_KEY
```

Start the app

```bash
  npm start dev
```

## Running Tests Frontend

To run tests, run the following command

```bash
  npm run test
```

