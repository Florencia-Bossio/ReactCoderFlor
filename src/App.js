import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {CartProvider} from './context/CartContext';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Inscribite ahora!'/>}/>
        <Route path='/categories/:categoryId' element={<ItemListContainer greeting='Categoria: '/>}/>
        <Route path='item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
