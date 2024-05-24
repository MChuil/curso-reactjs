import { useState, useEffect, useMemo } from 'react' 
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

    const [cart, setCart] = useState(init); //Son Asincronos

    const MAX_ITEM = 6
    const MIN_ITEM = 1

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart)) //pasamos de array de objetos a string
    }, [cart])

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
        cart,
        deleteItem,
        incrementQuantity,
        decrementQuantity,
        clearCart,
        isEmpty,
        totalCart
    }
}

export default useCart