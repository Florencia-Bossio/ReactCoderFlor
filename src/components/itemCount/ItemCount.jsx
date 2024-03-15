import React from 'react';
import {useState} from 'react';

const ItemCount = ({stock}) => {
    const [count, setCount] = useState (1)
    const onAdd = () => {
        console.log('Compraste un item')
    }

    const sumar = () => {
        if(count <  stock) {
            setCount(count + 1)
        }
    }

    const restar = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    return(
        <>
        <div className='container'>
            <button className='btn btn-dark' onClick={restar}>-</button>
            <span className='btn'>{count}</span>
            <button className='btn btn-dark' onClick={sumar}>+</button>
        </div>
        <button className='btn btn-secondary' disabled={stock === 0 || count === 0} onClick={onAdd}>Comprar</button>
        </>
    )
}

export default ItemCount;