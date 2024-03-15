import './itemListContainer.css';
import React from 'react';
//import hook
import {useState, useEffect} from 'react';
import {getProducts} from '../../mock/fakeApi';
import ItemList from '../itemList/ItemList';
import {useParams} from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams()
    console.log(categoryId)

    //useEffect se ejecuta una sola vez
    useEffect(() => {
        setLoading(true)
        getProducts()
        .then((res) => {
            if(categoryId) {
                setProductos(res.filter((prod) => prod.categoria === categoryId))
            } else{
                setProductos(res)
            }
        })
        .catch((error) => console.log(error, 'todo mal'))
        .finally(() => setLoading(false))
    },[categoryId])

    if(loading) {
        return <h2>Cargando...</h2>
    }
   
    return(
        <div>
            {categoryId ? <h1 className='saludo'>{greeting}<span style={{color:'violet'}}>{categoryId}</span></h1> : <h1 className='saludo'></h1>}
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer;