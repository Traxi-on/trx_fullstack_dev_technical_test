import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


import { GENERATE_ROUTE, HOME_PATH, } from './constants/routes.constants';
import Home from './views/pages/Home/Home';


function App() {
  return (

    <Router>
      <Routes>
        <Route path={GENERATE_ROUTE(HOME_PATH)} element={<Home />} />
        <Route path={GENERATE_ROUTE('')} element={<Home />} />

      </Routes>
    </Router>


  );
}

export default App;
