const Header = () => {
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
                                                    <tbody></tbody>
                                                </table>

                                                <a href="#" id="vaciar-carrito" className="button u-full-width">Vaciar Carrito</a>
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
