import { legacy_createStore as createStore } from "redux"
import { appReducer } from "./Reducer"

export const store = createStore(appReducer)