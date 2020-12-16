import React from 'react';
import './App.css';
import NavBar from './components/navBar';
import Carrousel from './components/carrousel'
import Home from './components/home';
import './components/css/general.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ItemList from './components/itemList';
import Footer from './components/footer';
import Cart from './components/carrito';
import ItemDetailContainer from './components/itemDetailContainer';
import NotFoundPage from './components/NotFoundPage';
import Categories from './components/categories';
import ProductProvider from './context/globalContext'
import CartProvider from './context/cartContext'

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <BrowserRouter>
          <div className="App">
            <NavBar />

            <Switch>
              {/* <Route exact path='/' ><Home greeting="Esto va a ser el home" /></Route> */}
              <Route exact path='/' ><Carrousel /></Route>



              {/* <Route path='/productos/:id_producto'><ItemDetailContainer /></Route> */}
              <Route path='/categories/:id_categories/:id_producto'><ItemDetailContainer /></Route>

              <Route path='/categories/:id_categories'><ItemList /></Route>

              <Route path='/categories'><Categories /></Route>

              <Route path='/carrito'><Cart /></Route>
              <Route ><NotFoundPage /></Route>
            </Switch>
            <Footer />
          </div>

        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;


