import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import globalReducer from "./globalReducer";


export default configureStore({
    reducer: {
        globalReducer: globalReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    })
})