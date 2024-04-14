import {useEffect, useState} from 'react';
import ItemDetail from '../itemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import {collection, doc, getDoc} from 'firebase/firestore';
import {db} from '../../services/firebase';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState(false)
    const {itemId} = useParams()
    console.log(itemId)

    //FIREBASE
    useEffect(()=>{
        setCargando(true)
        //Colección y proyecto
        const collectionProd = collection(db, 'productos')
        //Crear referencia
        const referenciaDoc = doc(collectionProd, itemId)
        
        //Traer el documento
        getDoc(referenciaDoc)
        .then((res)=>setProducto({id:res.id, ...res.data()}))
        .catch((error)=>console.log(error))
        .finally(()=>setCargando(false))
    },[itemId])

    return(
        <div>
            {/* Rendering condicional con ternario */}
            {cargando ? <h1>Cargando Items...</h1> : <ItemDetail producto={producto}/>}
        </div>
    )
}

export default ItemDetailContainer;