import db from "../data/data";
import { TCursoCarrito, TCurso } from "../types";

//Acciones
export type CartActions =
    {type: 'addToCart', payload: {item: TCurso}} |
    {type: 'deleteItem', payload: {id: number}} |
    {type: 'incrementQuantity', payload: {id: number}} |
    {type: 'decrementQuantity', payload: {id: number}} |
    {type: 'clearCart'}

export type CartState = {
    data: TCurso[],
    cart: TCursoCarrito[]
}

//validar que localStorage tenga data
const init = () : TCursoCarrito[] =>{
    const localStorageCart = localStorage.getItem('cart')
    if(localStorageCart){  //si hay algo
        return JSON.parse(localStorageCart); //pasar de string a array de objetos
    }else{ //si esta vacio
        return []
    }
}

//State Inicial
export const initialState: CartState = {
    data: db,
    cart: init()
}


const MAX_ITEM = 6
const MIN_ITEM = 1
//Reducer
export const cartReducer = (
    state: CartState = initialState,
    action: CartActions
    )=>{
        if(action.type === 'addToCart'){
            const itemExists = state.cart.findIndex( row =>  row.id === action.payload.item.id)
            let updateCart : TCursoCarrito[] = []
            if(itemExists >= 0){ //si existe en el carrito
                updateCart = [...state.cart]  //creamos una copia del array de carrito
                updateCart[itemExists].quantity++  //en la copia actulizamos la cantidad
            }else{ //si no existe en el carrito
                const newItem : TCursoCarrito = { ...action.payload.item, quantity : 1}
                updateCart= [...state.cart, newItem]
            } 
            return {
                ...state,
                cart: updateCart
            }
        }

        if(action.type === 'deleteItem'){
            const updateCart = state.cart.filter(item => item.id !== action.payload.id)
            
            return {
                ...state,
                cart: updateCart
            }
        }

        if(action.type === 'incrementQuantity'){
            const updateCart = state.cart.map( item => {
                if(item.id === action.payload.id && item.quantity < MAX_ITEM){
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    } 
                }
                return item
            })
            return {
                ...state,
                cart: updateCart
            }
        }


        if(action.type === 'decrementQuantity'){
            const updateCart = state.cart.map( item => {
                if(item.id === action.payload.id && item.quantity > MIN_ITEM){
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    } 
                }
                return item
            })
            return {
                ...state,
                cart: updateCart
            }
        }

        if(action.type === 'clearCart'){
            return {
                ...state,
                cart : []
            }
        }

    return state
}