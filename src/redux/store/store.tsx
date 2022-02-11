import { applyMiddleware, createStore, compose } from "redux";
import reducers from "../reducer/index";
import thunk from "redux-thunk";

declare global{
  interface Window{
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?:typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default store; 

//se hace la conexion con react, ademas de manejar los estados que llegan a la interfaz e usuario