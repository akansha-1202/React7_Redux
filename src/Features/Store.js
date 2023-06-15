import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./Slice"

const store = configureStore({
    reducer : {
        dataKey : dataReducer
    }
})

export default store;
//what is slice and what is the use of slice?
//what is the use of useselector and usedispatch hooks in redux?
//what is payload?
//how to use those 2 hooks?
//how to use reducer in redux