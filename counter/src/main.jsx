import React from 'react'
import ReactDOM from 'react-dom/client'
// import { App } from './indexApp'
// import FirstApp from './FirstApp'
import CounterApp from './CounterApp'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp nombre="Laura" edad= { 37 } correo="laura@gmail.com"/> */}
        <CounterApp value={5} />
    </React.StrictMode>
)