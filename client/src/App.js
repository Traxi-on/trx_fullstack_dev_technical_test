//import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
///import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css"
import MapView from './components/MapView';
import NavBar from './components/NavBar';
import VehicleTable from './components/VehicleTable';
import { VehicleContextProvider } from './context/VehicleContext';

const App=()=> {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <Button>This is a Button</Button>
    //   </header>
    // </div>
    <VehicleContextProvider>
      <NavBar/>
      <Container>      
        <MapView/>
        <VehicleTable/>
      </Container>
    </VehicleContextProvider>

  );
}

export default App;
