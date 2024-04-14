import './itemDetail.css';
import React, {useContext, useState} from 'react';
import ItemCount from '../itemCount/ItemCount';
import {CartContext} from '../../context/CartContext';

const ItemDetail = ({producto}) => {
    const [compra, setCompra] = useState(false)
    //Llamo al hook y le digo que contexto quiero usar
    const {addItem} = useContext(CartContext)
    
    const onAdd = (cantidad) => {
        addItem(producto, cantidad)
        setCompra(true)
    }

    return(
        <div className='contenedorDetalle'>
            <h3>{producto.name}</h3>
            <img src={producto.imagen} alt={producto.name}/>
            <p>{producto.description}</p>
            {compra && <p>Ya agregaste este producto en el carrito! 🙌</p>}
            {producto.stock < 6 && <p>Apurate, quedan pocas unidades en stock!</p>}
            {compra ? <button className='btn btn-secondary'>Ir al carrito</button> :<ItemCount stock={producto.stock} onAdd={onAdd}/>}
        </div>
    )
}

export default ItemDetail;