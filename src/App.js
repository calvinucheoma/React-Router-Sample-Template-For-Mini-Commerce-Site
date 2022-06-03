import React, {useState} from 'react';
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Offers from "./pages/Offers";

function App() {

  const [cartIsEmpty] = useState(true);

  return (

    <div className="App">

      <BrowserRouter>

        <nav>
          <h1>Sussex Clothing Line</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>

        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}>
            <Route path="offers" element={<Offers />} />
          </Route>
          <Route path="/products/:id" element={<ProductDetails />}>
            <Route path='offers' element={<Offers />} />
          </Route>  
          <Route path="/products" element={<Products />} />
          <Route path='/redirect' element={<Navigate to='/about'/>} />
          <Route
            path='/checkout'
            element={ cartIsEmpty? <Navigate to='/products'/> : <h1>Checkout Page</h1> }
          />

        </Routes>

      </BrowserRouter>

    </div>

  )

};

export default App;