const Curso = ( { curso }  ) => {
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
                        <p className="precio">$200  <span className="u-pull-right ">{ price }</span></p>
                        <a href="#" className="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar Al Carrito</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Curso
