import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inicio from './pages/inicio';
import Empresas from './pages/empresas';
import Personas from './pages/personas';
import Portafolio from './pages/portafolio';
import Footer from "./components/Footer";



function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        
      <Router>
        <Navbar />
        <Switch>
          <Route path='/inicio' component={Inicio} />
          <Route path='/empresas' component={Empresas} />
          <Route path='/personas' component={Personas} />
          <Route path='/portafolio' component={Portafolio} />
        </Switch>
      </Router>
        
        
    </div>
    <Footer />
    </div>
  );
}

export default App;

