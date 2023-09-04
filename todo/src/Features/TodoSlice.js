import { createSlice , nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos : [
        
    ],
}


export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        AddTodo : (state,action)=>{
            const todo = {
                id : nanoid(),
                task : action.payload.task,
                des:action.payload.des,
                completed : action.payload.completed,
            }
            state.todos.push(todo)
        },

        EditTo_do: (state,action)=>{
            for(let  i = 0 ; i < state.todos.length;i++){
                if(state.todos[i].id === action.payload.id){
                    state.todos[i].task = action.payload.task
                    state.todos[i].des = action.payload.des
                    break
                }
            }
        },

        Todo_completed : (state,action)=>{
            for(let  i = 0 ; i < state.todos.length;i++){
                if(state.todos[i].id === action.payload.id){
                    state.todos[i].completed = !state.todos[i].completed
                    break
                }
            }
        },


        DeleteTodo : (state,action)=>{
            state.todos = state.todos.filter((todo)=>{
                return todo.id !== action.payload.id
            })
        }
    }   
})


export const {AddTodo,EditTo_do,DeleteTodo,Todo_completed} = todoSlice.actions
export default todoSlice.reducer