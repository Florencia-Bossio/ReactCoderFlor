import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Inscribite ahora!'/>}/>
        <Route path='/categories/:categoryId' element={<ItemListContainer greeting='Categoria: '/>}/>
        <Route path='item/:itemId' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
