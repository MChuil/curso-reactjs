import PropTypes from 'prop-types'

const message = {
    title: 'Introducción a React',
    subtitle: 'Miguel Chuil'
}

const suma = (num1, num2)=>{
    return num1 + num2;
}

const FirstApp = ( { nombre , edad , correo } ) => {

    return (
        <>
            <h1>{message.title}</h1>
            <h3>{message.subtitle}</h3>
            <p>developer.chuil gmail.com</p>
            <p>WhatsApp: 123456789</p>
            { /*JSON.stringify(message)*/}
            <code>
                { suma(556, 898) }
            </code>
            <p>
                { nombre }
            </p>
            <p>
                { edad }
            </p>
            <p>
                { correo }
            </p>
        </>
    )
}

export default FirstApp;

FirstApp.propTypes = {
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired,
    correo: PropTypes.string
}

FirstApp.defaultProps = {
    nombre: 'Fulano',
    edad: 0,
    correo:'test@gmail.com'
}


