import db from "../data/data";
import { TCursoCarrito, TCurso } from "../types";

//Acciones
export type CartActions =
    {type: 'addToCart', payload: {item: TCursoCarrito}} |
    {type: 'deleteItem', payload: {id: number}} |
    {type: 'incrementQuantity', payload: {id: number}} |
    {type: 'decrementQuantity', payload: {id: number}} |
    {type: 'clearCart'}

export type CartState = {
    data: TCurso[],
    cart: TCursoCarrito[]
}
//State Inicial
export const initialState: CartState = {
    data: db,
    cart: []
}


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
            return {
                ...state
            }
        }

        if(action.type === 'incrementQuantity'){
            return {
                ...state
            }
        }


        if(action.type === 'decrementQuantity'){

            return {
                ...state
            }
        }

        if(action.type === 'clearCart'){
            return {
                ...state
            }
        }

    return state
}