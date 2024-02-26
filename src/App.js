import Navbar from './components/navbar/Navbar'
import {ItemListContainer} from './components/itemListContainer/ItemListContainer'

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting='Inscribite ahora!'/>
    </div>
  );
}

export default App;
