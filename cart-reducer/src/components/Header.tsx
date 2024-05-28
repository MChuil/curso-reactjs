import { useMemo } from 'react'
import type { TCursoCarrito} from '../types'
import { CartActions } from '../reducers/cartReducer'

type headerProps = {
    cart: TCursoCarrito[]
    dispatch: React.Dispatch<CartActions>
}

const Header = ({ cart, dispatch } : headerProps) => {

    // State derivado
    const isEmpty = useMemo(()=> cart.length === 0, [cart])
    const totalCart = () => cart.reduce((total, item)=> total + (item.price * item.quantity), 0)

    return (
        <>
            <header id="header" className="header">
                <div className="container">
                    <div className="row">
                        <div className="four columns">
                            <img src="img/logo.webp" id="logo" />
                        </div>
                        <div className="two columns u-pull-right">
                            <ul>
                                <li className="submenu">
                                        <img src="img/cart.png" id="img-carrito" />
                                        <div id="carrito">
                                                {isEmpty ? (
                                                    <h4>El carrito esta vacio</h4>
                                                ) : (
                                                    <table id="lista-carrito" className="u-full-width">
                                                        <thead>
                                                            <tr>
                                                                <th>Imagen</th>
                                                                <th>Nombre</th>
                                                                <th>Precio</th>
                                                                <th>Cantidad</th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {cart.map( item => (
                                                                <tr key={item.id}>
                                                                    <td>
                                                                        <img className='img-fluid' src={item.img} alt={item.title} />
                                                                    </td>
                                                                    <td>{item.title}</td>
                                                                    <td>${item.price}</td>
                                                                    <td>
                                                                        <a className="btn" onClick={()=> dispatch({type: 'incrementQuantity', payload:{id: item.id}})}>+</a>
                                                                        {item.quantity}
                                                                        <a className="btn" onClick={()=> dispatch({type: 'decrementQuantity', payload: {id: item.id}})}>-</a>
                                                                    </td>
                                                                    <td><button onClick={() => dispatch({type:'deleteItem', payload:{id: item.id}})} className="delete">X</button></td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                        <tfoot>
                                                            <tr>
                                                                <th></th>
                                                                <th>Total:  </th>
                                                                <th>${totalCart()}</th>
                                                                <th></th>
                                                                <th></th>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                )}
                                                <a href="#" id="vaciar-carrito" className="button u-full-width" onClick={()=>dispatch({type:'clearCart'})}>Vaciar Carrito</a>
                                        </div>
                                </li>
                            </ul>
                        </div>
                    </div> 
                </div>
            </header>
        </>
    )
}

export default Header
