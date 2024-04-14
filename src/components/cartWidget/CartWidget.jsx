import './cartWidget.css';
import {FiShoppingCart} from 'react-icons/fi';
import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';

const CartWidget = () => {
    const {cartQuantity} = useContext(CartContext)
    return(
        <div>
            <FiShoppingCart className='cart'/>
            {cartQuantity() > 0 && <span className='badge'>{cartQuantity()}</span>}
        </div>
    )
}

export default CartWidget;