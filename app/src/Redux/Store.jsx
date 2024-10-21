import { configureStore } from "@reduxjs/toolkit";
import taskReduser from './Tasks'

const store=configureStore({
    reducer:{
        tasks:taskReduser
    }
})

export default store