import { combineReducers } from "@reduxjs/toolkit";
import { categoryReducer } from "./CategoryReducer";

export const rootReducer=combineReducers(
    {
        category: categoryReducer
    }
)