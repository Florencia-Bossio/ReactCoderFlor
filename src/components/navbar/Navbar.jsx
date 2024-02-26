import './navbar.css';
import CartWidget from '../cartWidget/CartWidget';

const Navbar = () => {
    return(
        <nav className='navContainer'>
            <a className='link' href='/'>Instituto de idiomas</a>
            <div className='linksContainter'>
                <a className='link' href='/'>Inicio</a>
                <a className='link' href='/'>Idiomas</a>
                <a className='link' href='/'>Valores</a>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar;