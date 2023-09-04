import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "../Features/TodoSlice"

export  const Store = configureStore({
    reducer : todoReducer,
})