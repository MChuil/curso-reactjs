import { useEffect, useMemo, useReducer } from "react"
import { Form } from "./components/Form"
import { activityReducer, initialState } from "./reducers/activityReducer"
import { ActivityList } from "./components/ActivityList"
import { CalorieTracker } from "./components/CalorieTracker"
function App() {
  
  const [state, dispatch ] = useReducer(activityReducer, initialState)

  useEffect(()=>{
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])

  const restarApp = ()=> useMemo(()=> state.activities.length > 0,[state.activities])
  
  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
            <h1 className="text-center text-lg font-bold uppercase">Contador de calorías</h1>
            <button 
              className="bg-black px-3  rounded-md disabled:opacity-10"
              disabled ={!restarApp()}
              onClick={ ()=> dispatch({type:'reset'})}
            >Reiniciar App</button>
        </div>
      </header>

      <section className="py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form 
            dispatch={dispatch}
            state = {state}
          />
        </div>
      </section>

      <section className="bg-gray-800 py-10">
          <div className="max-w-4xl mx-auto">
              <CalorieTracker
                activities = {state.activities}
              />
          </div>
      </section>


      <section className="max-w-4xl mx-auto mt-10">
        <ActivityList
          activities = {state.activities}
          dispatch={dispatch}
        /> 
      </section>
    </>
  )
}

export default App
