import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";


export const Store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))