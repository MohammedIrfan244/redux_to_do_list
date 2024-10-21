import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE={
    tasks:[]
}


const taskSlice=createSlice({
    name:"tasks",
    initialState:INITIAL_STATE,
    reducers:{
        addTask:(state,action)=>{
            state.tasks.push(action.payload)
        },
        editTask:(state,action)=>{
            state.tasks[action.payload.index]=action.payload.task
        },
        deleteTask:(state,action)=>{
            state.tasks.splice(action.payload,1)
        }
    }
})

export const {addTask,editTask,deleteTask}=taskSlice.actions

export default taskSlice.reducer