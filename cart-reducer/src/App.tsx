import { useReducer } from 'react'
import Header from './components/Header'
import Curso from './components/Curso'
import './app.css'
import useCart from './hooks/useCart'
import { cartReducer, initialState } from './reducers/cartReducer'

const App = () => {
    const { cart, deleteItem, incrementQuantity, decrementQuantity, clearCart, isEmpty, totalCart } = useCart()

    const [state, dispatch] = useReducer(cartReducer,initialState)

    console.log(state)

    return (
        <>
            <Header 
                cart = { cart }
                deleteItem = {deleteItem}
                incrementQuantity = { incrementQuantity }
                decrementQuantity = { decrementQuantity }
                clearCart = { clearCart }
                isEmpty = {isEmpty}
                totalCart = {totalCart}
            />

            <div id="hero">
                <div className="container">
                    <div className="row">
                            <div className="six columns">
                                <div className="contenido-hero">
                                        <h2>Aprende algo nuevo</h2>
                                        <p>Escuela especializada</p>
                                        {/* <form action="#" id="busqueda" method="post" className="formulario"> */}
                                            {/* <input className="u-full-width" type="text" placeholder="¿Que te gustaría Aprender?" id="buscador">
                                            <input type="submit" id="submit-buscador" className="submit-buscador"> */}
                                        {/* </form> */}
                                </div>
                            </div>
                    </div> 
                </div>
            </div>

            <div className="barra">
                <div className="container">
                    <div className="row">
                            <div className="four columns icono icono1">
                                <p>20,000 Cursos en línea <br />
                                Explora  los temas más recientes</p>
                            </div>
                            <div className="four columns icono icono2">
                                <p>Instructores Expertos <br />
                                Aprende con distintos estilos</p>
                            </div>
                            <div className="four columns icono icono3">
                                <p>Acceso de por vida <br />
                                Aprende a tu ritmo</p>
                            </div>
                    </div>
                </div>

            </div>

            <div id="lista-cursos" className="container">
                <h1 id="encabezado" className="encabezado">Cursos En Línea</h1>
                <div className="row">
                    { state.data.map((curso) =>(
                            <Curso
                                key = { curso.id }
                                curso = { curso }
                                dispatch = { dispatch }
                            />
                        )
                    )}
                </div> 
            </div>  

            <footer id="footer" className="footer">
                <div className="container">
                    <div className="row">
                            <div className="four columns">
                                    <nav id="principal" className="menu">
                                        <a className="enlace" href="#">Para tu Negocio</a>
                                        <a className="enlace" href="#">Conviertete en Instructor</a>
                                        <a className="enlace" href="#">Aplicaciones Móviles</a>
                                        <a className="enlace" href="#">Soporte</a>
                                        <a className="enlace" href="#">Temas</a>
                                    </nav>
                            </div>
                            <div className="four columns">
                                    <nav id="secundaria" className="menu">
                                        <a className="enlace" href="#">¿Quienes Somos?</a>
                                        <a className="enlace" href="#">Empleo</a>
                                        <a className="enlace" href="#">Blog</a>
                                    </nav>
                            </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default App


// 1 ser reu-utilizado
// 2 separar funcionalidad



/**
    *  Statements
    *   instrucción que permite hacer algo: crear una variable, codigo condicional if, error throw, ciclo for
    * 
    *   Expressions
    *   Es algo que produce un valor: ternario, array methods
    * 
    *   const arrayNew = array.map()
    */

    // useEffect( () => {
    //     setData(db)
    // }, [])

    /**
     * sintaxis use Efect
     *      import { useEffect} from 'react'
     * 
     *      useEffect( ()=> {
     *              instrucción
     *      }, [])
     */