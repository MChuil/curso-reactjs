import { useState } from "react"
import type  { Item, OrderItem } from '../types'


const useOrder = () => {
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item: Item)=>{
        //buscar si existe
        const itemExist = order.find( row => row.id === item.id)
        if(itemExist){
            const updateOrder = order.map(row => row.id === item.id ? {...row, quantity: row.quantity + 1} : row)
            setOrder(updateOrder)
        }else{
            const newItem = {...item, quantity: 1 } 
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id: Item['id'])=>{
        setOrder(order.filter(item => item.id != id))

    }

    const saveOrder = ()=>{
        setOrder([])
        setTip(0)
    }

    return {
        addItem,
        order,
        removeItem,
        tip,
        setTip,
        saveOrder
    }
}

export default useOrder
