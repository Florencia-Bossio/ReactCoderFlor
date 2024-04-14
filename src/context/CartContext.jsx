import {createContext, useState} from 'react';

//Crear el contexto
export const CartContext = createContext()

//Creamos el proveedor del contexto
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    //Agrega items al carrito
    const addItem = (item, quantity) => {
        if(isInCart(item.id)){
            //Se suman dos items iguales
            const nuevoCarrito = cart.map((compra) => {
                if(compra.id === item.id) {
                    return {...compra, quantity: compra.quantity + quantity}
                }else {
                    return compra
                }
            })
            setCart(nuevoCarrito)
        }else{
            setCart([...cart, {...item, quantity}])
        }
    }

    //Remueve todos los items del carrito
    const clear = () => {
        setCart([])
    }

    //Remueve un item del carrito usando su id
    const removeItem = (itemId) => {
        setCart(cart.filter((compra) => compra.id !== itemId))
    }

    //Verifica si el item ya existe en el carrito
    const isInCart = (itemId) => {
        return cart.some((compra) => compra.id === itemId)
    }

    //Suma la cantidad total
    const cartQuantity = () => {
        return cart.reduce((acc, compra) => acc += compra.quantity, 0)
    }

    //Sumar el total a pagar
    const cartPriceTotal = () => {
        return cart.reduce((acc, compra) => acc += (compra.price * compra.quantity), 0)
    }

    return(
        //Le asignamos el contexto que provee
        <CartContext.Provider value={{cart, addItem, clear, removeItem, isInCart, cartQuantity, cartPriceTotal}}>
            {children}
        </CartContext.Provider>
    )
}