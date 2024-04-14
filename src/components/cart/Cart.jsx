import React, {useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import CartView from '../cartView/CartView';
import {Link} from 'react-router-dom';

const Cart = () => {
    const {cart} = useContext(CartContext)
    return(
        <div>
           {!cart.length 
           ? <div>
                <h3>Tu carrito está vacío</h3>
                <h3>Te invitamos a ver todos nuestros productos</h3>
                <Link className='btn btn-secondary' to='/'>Ir a comprar!</Link>
            </div> 
           : <CartView/>}
        </div>
    )
}

export default Cart;