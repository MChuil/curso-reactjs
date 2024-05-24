import { useMemo } from 'react'
import { Activity } from '../types/index'
import { CaloriesDisplay } from './CaloriesDisplay'

type CalorieTrackerProps = {
    activities : Activity[]
}

export const CalorieTracker = ({activities}: CalorieTrackerProps) => {

    //1 calorias consumidas
    const caloriesConsumed = useMemo(()=>
    activities.reduce((total, activity) => activity.category == 1 ? total + activity.calories : total, 0),
    [activities])
    
    //2 calorias quemadas
    const caloriesBurned = useMemo(()=>
    activities.reduce((total, activity) => activity.category == 2 ? total + activity.calories : total, 0),
    [activities])

    const totalCalories = useMemo(()=> caloriesConsumed - caloriesBurned, [activities])

    return (
        <>
            <h2 className='text-4xl font-black text-white text-center'>Resumen de Calorias</h2>
            <div className='flex flex-col md:flex-row md:justify-between items-center gap-5 mt-10'>
                <CaloriesDisplay 
                    calories = {caloriesConsumed}
                    text= 'Cosumidas'
                    color='orange'
                />
                <CaloriesDisplay 
                    calories = {caloriesBurned}
                    text= 'Ejercicios'
                    color='lime'
                />
                <CaloriesDisplay 
                    calories = {totalCalories}
                    text= 'Diferencia'
                    color='white'
                />
            </div>
        </>
    )
}
