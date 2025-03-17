import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import { rootApi } from "../service/rootApp";
import snackBarReducer from "./slice/snackBarSlice"

export const store = configureStore({
    reducer : {
        auth: authReducer,
        snackBar: snackBarReducer ,
        [rootApi.reducerPath]: rootApi.reducer
    },
    middleware: (getDefaultMiddleware) =>{
        return getDefaultMiddleware().concat(rootApi.middleware)
    }
})