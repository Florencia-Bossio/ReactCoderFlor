import './item.css';
import {Link} from 'react-router-dom';

const Item = ({producto}) => {
    return(
        <div className="card contenedorTarjeta" style={{width: '18rem'}}>
            <img src={producto.imagen} className="card-img-top imagenCard" alt={producto.name}/>
            <div className="card-body">
                <h5 className="card-title">{producto.name}</h5>
                <p className="card-text">{producto.description}</p>
                <Link to={`/item/${producto.id}`} className="btn btn-secondary">Ver más</Link>
            </div>
        </div>
    )
}

export default Item