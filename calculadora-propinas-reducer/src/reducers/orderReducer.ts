import { Item, OrderItem } from "../types";


//1. Acciones
export type OrderActions = 
    {type: 'addItem', payload:{item: Item}} |
    {type: 'removeItem', payload: {id: Item['id']}} |
    {type: 'saveOrder'} |
    {type: 'addTip', payload:{value: number}}

export type OrderState= {
    order: OrderItem[],
    tip: number
}

//2. Estado inicial
export const initialState: OrderState = {
    order: [],
    tip: 0
}

//3. Reducer
export const orderReducer = ( 
    state: OrderState = initialState, 
    action: OrderActions
) => {

    if(action.type ==='addItem'){
        //buscar si existe
        const itemExist = state.order.find( row => row.id === action.payload.item.id)
        let updateOrder: OrderItem[] = []
        if(itemExist){
            updateOrder = state.order.map(row => row.id === action.payload.item.id ? {...row, quantity: row.quantity + 1} : row)
        }else{
            const newItem = {...action.payload.item, quantity: 1 }
            updateOrder = [...state.order, newItem] 
        }
        return {
            ...state,
            order: updateOrder
        }
    }

    if(action.type === 'removeItem'){
        const updateOrder = state.order.filter(item => item.id != action.payload.id)
        return {
            ...state,
            order: updateOrder
        }
    }

    if(action.type === 'saveOrder'){
        
        return {
            ...state,
            order: [],
            tip:0
        }
    }
    
    if(action.type === 'addTip'){
        const tip = action.payload.value

        return {
            ...state,
            tip
        }
    }

    return state
}