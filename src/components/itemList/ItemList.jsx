import './itemList.css';
import Item from '../item/Item';

const ItemList = ({productos}) => {
    //Map
    return(
        <div className='tarjeta'>
            {productos.map((producto) => <Item key={producto.id} producto={producto}/> )}
        </div>
    )
}

export default ItemList