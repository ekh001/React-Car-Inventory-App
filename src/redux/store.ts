// Store is like a mini temporary database in the database

import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slices/RootSlice";

export const store = configureStore({
    reducer,
    devTools: true,
})