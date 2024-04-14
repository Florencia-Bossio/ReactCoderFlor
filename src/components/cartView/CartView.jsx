import React, {useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import './cartView.css';
import {Link} from 'react-router-dom';

const CartView = () => {
    const {cart, removeItem, cartPriceTotal, clear} = useContext(CartContext)
    return(
        <div>
            <h2>Tu carrito</h2>
            <div>
                {cart.map((compra) => {
                    return(
                        <div key={compra.id} className='vistaCarrito'>
                            <img src={compra.imagen} alt={compra.name} className='imgVistaCarrito'/>
                            <span>{compra.name}</span>
                            <span>{compra.quantity}</span>
                            <span>${compra.price}</span>
                            <span>Precio total: ${compra.price * compra.quantity}</span>
                            <button className='btn btn-danger' onClick={()=>removeItem(compra.id)}>X</button>
                        </div>
                    )
                })}
            </div>
            <p>Total a pagar: ${cartPriceTotal()}</p>
            <div>
                <button className='btn btn-danger botonCarrito' onClick={clear}>Vaciar Carrito</button>
                <Link className='btn btn-secondary' to='/checkout'>Finalizar compra</Link>
            </div>
        </div>
    )
}

export default CartView;