import type { TCurso}from '../types'
import type { CartActions } from '../reducers/cartReducer'

type CursoProps = {
    curso: TCurso
    dispatch: React.Dispatch<CartActions>
}


const Curso = ( { curso,  dispatch } : CursoProps) => {
    const { title, price, img, description } = curso

    return (
        <>
            <div className="four columns">
                <div className="card">
                    <img src={img} className="imagen-curso u-full-width" />
                    <div className="info-card">
                        <h4>{ title }</h4>
                        <p>{ description }</p>
                        <img src="img/estrellas.png" />
                        <p className="precio">$200  <span className="u-pull-right ">${ price }</span></p>
                        <button className="u-full-width button-primary button input agregar-carrito" data-id="1" 
                        onClick={ () => dispatch({type: 'addToCart', payload: {item: curso}}) }>Agregar Al Carrito</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Curso