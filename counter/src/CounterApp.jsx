import { useState } from 'react'
import PropTypes from 'prop-types'


const CounterApp = ({value}) => {
    const [counter, setCounter ] = useState(value)

    const handleAdd = ()=>{
        setCounter( counter + 1)
        console.log(counter)
    }

    
    return (
        <>
            <h1>CounterApp</h1>
            <h3>{ counter }</h3>
            <button onClick = { handleAdd }>
                +1
            </button>
        </>
    )
}

export default CounterApp

CounterApp.propTypes ={
    value : PropTypes.number.isRequired
}