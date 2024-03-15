import {useEffect, useState} from 'react';
import {getOneProduct} from '../../mock/fakeApi';
import ItemDetail from '../itemDetail/ItemDetail';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const {itemId} = useParams()
    console.log(itemId)

    useEffect(() => {
        getOneProduct(itemId)
        .then((res) => setProducto(res))
        .catch((error) => console.log(error))
    }, [])

    return(
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer;