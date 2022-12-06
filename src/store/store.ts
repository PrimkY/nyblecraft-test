import { combineReducers } from "redux";
import { noteReducer } from "./reducers/noteReducer";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    notes: noteReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
