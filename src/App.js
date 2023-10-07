import React from "react";
import { Link, Routes, Route} from 'react-router-dom'
import ProductsView from "./components/ProductsView";
import ProductDetailsView from "./components/ProductDetailsView";
import CartView from "./components/CartView";


const App = () => {
  return (
    <div>
      <nav>
        {/* Replace anchor elements with router Link */}
        <Link to="/">Products</Link> <br></br>
        <Link to='/cart'>Cart</Link>
      </nav>
      <div>
            <Routes>
               <Route  path="/" element={<ProductsView />}></Route>
               <Route path="/products/:id" element={<ProductDetailsView />}></Route>
                <Route  path="/cart" element={<CartView />}></Route>            
            </Routes>
        </div>
    </div>
  );
};

export default App;