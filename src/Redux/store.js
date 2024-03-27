import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reduce";
import { thunk } from "redux-thunk";


export const configstore =() =>{
    const store = createStore(rootReducer, applyMiddleware(thunk))

    return store
}




