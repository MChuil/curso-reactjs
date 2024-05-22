import type { TCursoCarrito} from '../types'

type headerProps = {
    cart: TCursoCarrito[]
    deleteItem: (id: number) => void
    incrementQuantity: (id: number) => void
    decrementQuantity: (id: number) => void
    clearCart: () => void
    isEmpty: boolean
    totalCart: ()=>number
}

const Header = ({ cart, deleteItem, incrementQuantity, decrementQuantity, clearCart, isEmpty, totalCart } : headerProps) => {

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
                                                                        <a className="btn" onClick={()=> incrementQuantity(item.id)}>+</a>
                                                                        {item.quantity}
                                                                        <a className="btn" onClick={()=> decrementQuantity(item.id)}>-</a>
                                                                    </td>
                                                                    <td><button onClick={() => deleteItem(item.id)} className="delete">X</button></td>
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
                                                <a href="#" id="vaciar-carrito" className="button u-full-width" onClick={clearCart}>Vaciar Carrito</a>
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
