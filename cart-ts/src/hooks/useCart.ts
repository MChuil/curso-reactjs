import { useState, useEffect, useMemo } from 'react' 
import db from '../data/data'
import { TCursoCarrito } from '../types'

const useCart = () =>{
    //validar que localStorage tenga data
    const init = () : TCursoCarrito[] =>{
        const localStorageCart = localStorage.getItem('cart')
       if(localStorageCart){  //si hay algo
            return JSON.parse(localStorageCart); //pasar de string a array de objetos
        }else{ //si esta vacio
            return []
        }
    }

    const [ data ] = useState(db);
    const [cart, setCart] = useState(init); //Son Asincronos

    const MAX_ITEM = 6
    const MIN_ITEM = 1

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart)) //pasamos de array de objetos a string
    }, [cart])


    function addToCart(item: TCursoCarrito){
        const itemExists = cart.findIndex( row =>  row.id === item.id)
        if(itemExists >= 0){ //si existe en el carrito
            const updateCart = [...cart]  //creamos una copia del array de carrito
            updateCart[itemExists].quantity++  //en la copia actulizamos la cantidad
            setCart(updateCart)
        }else{ //si no existe en el carrito
            const newItem : TCursoCarrito = { ...item, quantity : 1}
//           item.quantity = 1;
            setCart([...cart, newItem]);
        } 
    }

    function deleteItem(id: number){
        const newArray = cart.filter(item => item.id !== id)
        setCart(newArray)
    }

    function incrementQuantity(id: number){
        const updateCart = cart.map( item => {
            if(item.id === id && item.quantity < MAX_ITEM){
                return {
                    ...item,
                    quantity: item.quantity + 1
                } 
            }
            return item
        })
        setCart(updateCart)
    }

    function decrementQuantity(id : number){
        const updateCart = cart.map( item => {
            if(item.id === id && item.quantity > MIN_ITEM){
                return {
                    ...item,
                    quantity: item.quantity - 1
                } 
            }
            return item
        })
        setCart(updateCart)
    }

    function clearCart(){
        setCart([])
    }

    // State derivado
    const isEmpty = useMemo(()=> cart.length === 0, [cart])

    const totalCart = () => cart.reduce((total, item)=> total + (item.price * item.quantity), 0)

    return {
        data,
        cart,
        addToCart,
        deleteItem,
        incrementQuantity,
        decrementQuantity,
        clearCart,
        isEmpty,
        totalCart
    }
}

export default useCart