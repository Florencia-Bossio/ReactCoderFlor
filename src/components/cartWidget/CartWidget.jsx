import './cartWidget.css';
import {FiShoppingCart} from 'react-icons/fi';

const CartWidget = () => {
    return(
        <div>
            <FiShoppingCart className='cart'/>
            <span className='badge'>1</span>
        </div>
    )
}

export default CartWidget;