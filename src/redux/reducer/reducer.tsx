import { IAction, IState } from "../../Interfaces/IRedux"
import { ActionType } from "../actionsTypes/actionTypes"


const initialState:IState={
    welcomeText:"Bienvenido"
}

const rootReducer=(state:IState = initialState, action:IAction)=>{
    switch(action.type){
        case ActionType.UPDATETEXT:{
            return{
                ...state,
                welcomeText: action.payload
            }
        }
        default: return state
    }
}

export default rootReducer

// Donde se actualiza el store en base a las acciones que lleguen