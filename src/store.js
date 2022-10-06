import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";
import logger from "redux-logger";


export const store = configureStore ({
    reducer: {
        post : postReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})