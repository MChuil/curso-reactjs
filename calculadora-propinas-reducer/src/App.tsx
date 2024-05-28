import { useReducer } from 'react'
import { Header } from './components/Header'
import { MenuItem } from './components/MenuItem'
import Order from './components/Order'
import { TipPercentage } from './components/TipPercentage'
import { Total } from './components/Total'
import { menuItems } from './data/db'
import { initialState, orderReducer } from './reducers/orderReducer'

function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <>
        <Header />

        <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
          <div className='p-5'>
            <h2 className='mb-5 text-3xl font-black'>Menú</h2>
            <div className="space-y-3">
              { menuItems.map(item =>(
                  <MenuItem
                    key = {item.id}
                    item = {item}
                    dispatch= { dispatch }
                  />
              ))}
            </div>
          </div>

          <div className='p-5 border border-dashed border-slate-300 rounded-lg space-y-5'>
          
            {state.order.length > 0 ? (
                <>
                  <Order 
                    order = { state.order}
                    dispatch = { dispatch } 
                  />

                  <TipPercentage
                      dispatch = {dispatch}
                      tip = {state.tip}
                  />

                  <Total 
                    order = { state.order}
                    tip = {state.tip}
                    dispatch = {dispatch}
                  />
                </>
            ):(
              <p className="text-center">La orden esta vacia</p>
            )
            }
          </div>
        </main>
    </>
  )
}

export default App
