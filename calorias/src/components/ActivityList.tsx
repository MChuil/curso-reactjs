import { useMemo, Dispatch } from "react"
import { Activity } from "../types"
import { categories } from "../data/db"
import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { ActivityActions } from "../reducers/activityReducer"

type ActivityListProps = {
    activities: Activity[],
    dispatch: Dispatch<ActivityActions>
}

export const ActivityList = ({activities, dispatch} : ActivityListProps) => {

    const categoryName = useMemo(()=> 
        (category: Activity['category']) => categories.map( cat => cat.id === category ? cat.name : '')
    , [activities])
    
    const handleClick = (id: string)=>{
        dispatch({type: 'set-activeId', payload: { id : id }})
    }

    return (
        <>
            <h2 className="text-5xl font-bold text-lime-600 text-center">Comida y Actividades</h2>
            {
                activities.length ===0 ? <p className="text-center text-2xl mt-5">No hay actividades registradas...</p>:
                activities.map(activity => (
                    <div key={activity.id} className="px-5 py-10 bg-white mt-5 flex justify-between text-black">
                        <div className="space-y-2 relative">
                            <p className={`absolute -top-8 -left-8 px-10 py-2 uppercase font-bold ${activity.category === 1 ? 'bg-orange-500' : 'bg-lime-500'}`}>
                                {categoryName(activity.category)}
                            </p>
                            
                            <p className="text-2xl font-bold pt-5">
                                { activity.name}
                            </p>
                            <p className="text-3xl font-black text-lime-500">
                                {activity.calories}{' '}
                                <span>calorias</span>
                            </p>
                        </div>

                        <div className="flex ">
                                <button onClick={()=> handleClick(activity.id)}>
                                    <PencilSquareIcon 
                                        className="text-gray-800 h-8 w-8"
                                    />
                                    
                                </button>
                                
                                <button onClick={()=> dispatch({type: 'delete-activity', payload:{id: activity.id}})}>
                                    <XCircleIcon 
                                        className="text-red-500 h-8 w-8"
                                    />
                                    
                                </button>
                            
                        </div>
                    </div>
                ))
            }
        </>
    )
}
