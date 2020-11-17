import React from 'react';
import './App.css';
import NavBar from './components/navBar';
import Home from './components/home';
import './components/css/general.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ItemList from './components/itemList';
import Cart from './components/carrito';
import ItemDetailContainer from './components/itemDetailContainer';
function App() {
  return (
    
      <BrowserRouter>
        <div className="App">
          <NavBar />

          <Switch>
            <Route exact path='/' ><Home greeting="Esto va a ser el home" /></Route>

            <Route path='/productos/:id_producto'><ItemDetailContainer /></Route>

            <Route path='/productos'><ItemList /></Route>

            <Route path='/carrito'><Cart /></Route>
          </Switch>
        </div>

      </BrowserRouter>
    
  );
}

export default App;


