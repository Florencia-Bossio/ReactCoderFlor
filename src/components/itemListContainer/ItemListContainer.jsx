import './itemListContainer.css';
import React from 'react';
//import hook
import {useState, useEffect} from 'react';
import ItemList from '../itemList/ItemList';
import {useParams} from 'react-router-dom';
import {collection, getDocs, query, where} from 'firebase/firestore';
import {db} from '../../services/firebase';
import Loader from '../loader/Loader';

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams()

    //FIREBASE
    useEffect(()=>{
        setLoading(true)
        //Conectarnos con nuestra colección
        const productsCollection = categoryId ? query(collection(db, 'productos'), where('categoria', '==', categoryId)) : collection(db, 'productos')
        //Pedimos los documentos
        getDocs(productsCollection)
        .then((res)=>{
            const list = res.docs.map((product)=>{
                return{
                    id:product.id,
                    ...product.data()
                }
            })
            setProductos(list)
        })
        .catch((error)=>console.log(error))
        .finally(()=>setLoading(false))
    },[categoryId])

    //Return anticipado
    if(loading) {
        return (
            <div className='loader'>
                <Loader/>
            </div>
        )
    }
   
    return(
        <div>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer;