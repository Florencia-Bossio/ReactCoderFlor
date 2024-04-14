import './navbar.css';
import CartWidget from '../cartWidget/CartWidget';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className='navContainer'>
            <NavLink className='link' to='/'>Home Deco!</NavLink>
            <div className='linksContainter'>
                <NavLink className='link' to='/categories/alfombras'>Alfombras</NavLink>
                <NavLink className='link' to='/categories/cestos'>Cestos</NavLink>
                <NavLink className='link' to='/categories/decoracion'>Decoración</NavLink>
                <NavLink className='link' to='/categories/dispenser'>Dispenser</NavLink>
            </div>
            <NavLink to='/cart' className='link'>
                <CartWidget/>
            </NavLink>
        </nav>
    )
}

export default Navbar;