import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from '../helpers/index';

type OrderProps = {
    order: OrderItem[]
    tip: number
    saveOrder: () => void
}

export const Total = ({order, tip, saveOrder} : OrderProps) => {

    const subtotalAmount = useMemo(
        ()=> order.reduce((total, item) => total + (item.price * item.quantity), 0) 
        , [order]
    )

    const tipAmount = useMemo(()=> subtotalAmount * tip, [tip, order])
    const totalAmount = useMemo(()=> subtotalAmount + tipAmount, [tip, order])

    return (
        <>
            <div className="space-y-3 mb-10">
                <h2 className="font-black text-2xl">Totales y propina:</h2>
                <p>Subtotal a pagar: 
                    <span className="font-black ms-2">{formatCurrency(subtotalAmount)}</span>
                </p>
                <p>Propina a pagar: 
                    <span className="font-black ms-2">{formatCurrency(tipAmount)}</span>
                </p>
                <p>Total a pagar: 
                    <span className="font-black ms-2">{formatCurrency(totalAmount)}</span>
                </p>
            </div>
            <button className="w-full bg-black p-3 text-white uppercase font-bold mt-10 disabled:opacity-10"
                disabled={totalAmount === 0}
                onClick={saveOrder}
            >
                Guardar orden
            </button>
        </>
    )
}
