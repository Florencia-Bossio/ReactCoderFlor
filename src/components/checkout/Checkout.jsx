import React, {useState, useContext} from 'react';
import './checkout.css';
import {CartContext} from '../../context/CartContext';
import {serverTimestamp, collection, addDoc} from 'firebase/firestore';
import {db} from '../../services/firebase';
import {Link} from 'react-router-dom';

const Checkout = () => {
    const [user, setUser] = useState({})
    //Validación Email
    const [validateEmail, setValidateEmail] = useState('')
    const [orderId, setOrderId] = useState('')
    const {cart, cartPriceTotal, clear} = useContext(CartContext)
    /* const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('') */

    //Función dinámica para capturar datos del input
    const userData = (e) => {
        setUser(
            {
                ...user,
                [e.target.name] : e.target.value
            }
        )
    }
    
    const  finalizarCompra = (e) => {
        e.preventDefault()
        if(user.email !== validateEmail) {
            alert('Los mails deben ser iguales')
        } /* if (name === '' || email === '' || tel === '') {
            alert('Debe completar todos los campos')
        }  */else {
            //Objeto de la orden
            let order = {
                user,
                items: cart,
                total: cartPriceTotal(),
                date: serverTimestamp()
            }
            //Nuestra colección
            const ventas = collection(db, 'orders')
            //Agregamos el documento
            addDoc(ventas, order)
            .then((res)=>{
                setOrderId(res.id)
                clear()
            })
            .catch((error) => console.log(error))
        }
    }

    return(
        <div>
            {
                orderId !== ''
                ? <div>
                    <h3>Generaste tu compra con éxito!</h3>
                    <h3>Tu orden es: {orderId}</h3>
                    <Link to='/'>Volver al Home</Link>
                </div>
                : 
                <div className='contenedorForm'>
                    <h4 className='input'>Completa con tus datos</h4>
                    <form className='form' onSubmit={finalizarCompra}>
                        <input name='name' placeholder='Ingrese su nombre' type='text' className='input' onChange={userData}/>
                        <input name='lastname' placeholder='Ingrese su apellido' type='text' className='input' onChange={userData}/>
                        <input name='phone' placeholder='Ingrese su teléfono' type='tel' className='input' onChange={userData}/>
                        <input name='email' placeholder='Ingrese su correo' type='email' className='input' onChange={userData}/>
                        <input name='second-email' placeholder='Repita su correo' type='email' className='input' onChange={(e)=> setValidateEmail(e.target.value)}/>
                        <button className='btn btn-secondary' type='submit'>Enviar</button>
                    </form>
                </div>
            }
        </div>
    )
}

export default Checkout;