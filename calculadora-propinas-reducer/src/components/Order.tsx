import { OrderItem } from "../types"
import { formatCurrency } from '../helpers/index';
import { OrderActions } from "../reducers/orderReducer";

type OrderPros ={
    order: OrderItem[],
    dispatch : React.Dispatch<OrderActions>
}
const Order = ({ order, dispatch } : OrderPros) => {
    return (
        <div>
            <h2 className='mb-5 text-3xl font-black'>Consumo</h2>

            <div className="space-y-5">
                { order.length === 0 ? 
                    ''
                : 
                    (
                        order.map( item => (
                            <div key={ item.id }  className="flex justify-between item-center border-t border-gray-200 py-5 last-of-type:border-b">
                                <div >
                                    <p className="text-lg">
                                        { item.name } ({formatCurrency(item.price)})
                                    </p>
                                    <p className="font-black">
                                        Cantidad: {item.quantity} - { formatCurrency(item.price * item.quantity)}
                                    </p>
                                </div>
                                <button className="bg-red-600 h-6 w-6 rounded-full text-white" onClick={()=> dispatch({type:'removeItem', payload:{id: item.id}})}>X</button>
                            </div>
                        ))
                    )
                }
            </div>

        </div>
    )
}

export default Order
