import './itemDetail.css';
import React from 'react';
import ItemCount from '../itemCount/ItemCount';

const ItemDetail = ({producto}) => {
    return(
        <div className='contenedorDetalle'>
            <h3>{producto.name}</h3>
            <img src={producto.imagen} alt={producto.name}/>
            <p>{producto.description}</p>
            <ItemCount stock={producto.stock}/>
        </div>
    )
}

export default ItemDetail;