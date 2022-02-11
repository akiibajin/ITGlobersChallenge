import { combineReducers } from "redux";
import rootReducer from "./reducer";
 
const reducers=combineReducers({
    bank:rootReducer
})
export default reducers

export type States = ReturnType<typeof reducers>

//espacio para el banco de reducers, en base a la escalabilidad del proyecto