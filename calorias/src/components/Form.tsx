import { Dispatch, useState, useEffect } from "react"
import { v4 as uuidv4} from 'uuid'
import { categories } from "../data/db"
import type { Activity } from "../types"
import { ActivityActions, ActivityState } from "../reducers/activityReducer"


type FormProps = {
    dispatch: Dispatch<ActivityActions>
    state: ActivityState
}

const initialState: Activity = {
    id: uuidv4(),
    category: 0,
    name: '',
    calories: 0
}


export const Form = ({dispatch, state} : FormProps) => {

    const [activity, setActivity] = useState<Activity>(initialState)
    
    useEffect(()=>{
        const selected = state.activities.filter( act => act.id === state.activeId )[0]
        if(selected){
            setActivity(selected)
        }
    },[state.activeId])

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>)=>{

        const isNumberField = ['category', 'calories'].includes(event.target.id)

        setActivity({
            ...activity,
            [event.target.id] : (isNumberField) ? +event.target.value : event.target.value
        })
    }

    const isValidate = () => {
        const {category, name, calories} = activity
        return name.trim() != '' && calories > 0 && category > 0
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        dispatch({type: 'save', payload: {newActivity : activity}})
        setActivity({
            ...initialState,
            id: uuidv4()
        })
    }

    return (
        <form 
            className="space-y-5 bg-white shadow p-10 rounded-lg text-black"
            onSubmit={handleSubmit}
        >

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoría: </label>
                <select 
                    className="border border-slate-300 p-2 rounded-lg w-full"
                    id="category"
                    value={activity.category}
                    onChange={handleChange}
                >
                {
                    categories.map(category => (
                        <option key={category.id} value={category.id}>{ category.name }</option>
                    ))
                }
                </select>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold">Actividad: </label>
                <input 
                    type="text" 
                    id="name"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Ej. Comida, Ensalada, Ejercicio"
                    value={activity.name}
                    onChange={handleChange}
                />
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">Calorias: </label>
                <input 
                    type="number" 
                    id="calories"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Ej. 300 o 500"
                    value= {activity.calories}
                    onChange={handleChange}
                />
            </div>

            <input 
                type="submit" 
                className="bg-gray-600 hover:bg-gray-900 w-full p-2 uppercase text-white cursor-pointer disabled:opacity-10"
                value={activity.category === 1 ? 'Guardar Comida' : activity.category === 2 ?  'Guardar Ejercicio' : 'Guardar'}
                disabled = {!isValidate()}
            />
        </form>
    )
}
