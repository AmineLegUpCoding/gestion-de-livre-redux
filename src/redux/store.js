import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import livreReducer from "./reducers/livreReducer";
import thunk from "redux-thunk"; 

const reducers = combineReducers({
    livreReducer: livreReducer,
})

const store = legacy_createStore(reducers, applyMiddleware(thunk))

export default store