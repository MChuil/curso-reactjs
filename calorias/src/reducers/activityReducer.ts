import { Activity } from "../types"

//tipo de acciones
export type ActivityActions = 
    { type: 'save', payload: { newActivity: Activity}} |
    { type: 'set-activeId', payload: { id: Activity['id'] }} |
    { type: 'delete-activity', payload: { id: Activity['id'] }} 

export type ActivityState = {
    activities: Activity[],
    activeId: Activity['id']
}

//estado inicial
export const initialState: ActivityState = {
    activities: [],
    activeId: ''
}

//reducer
export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) =>{
    if(action.type === 'save'){

        let updatedActivity: Activity[] = []
        if(state.activeId){  //edición
            updatedActivity = state.activities.map(
                activity => activity.id === state.activeId ? action.payload.newActivity : activity)
        }else{  //insertar
            updatedActivity = [...state.activities, action.payload.newActivity]
        }

        return {
            ...state,
            activities: updatedActivity,
            activeId: ''
        }
    }

    if(action.type === 'set-activeId'){
        return {
            ...state,
            activeId: action.payload.id
        }
    }

    if(action.type === 'delete-activity'){
        console.log('eliminando...')
        return{
            ...state,
            activities: state.activities.filter(activity => activity.id !== action.payload.id )
        }
    }

    return state
}