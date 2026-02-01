import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState={
    todos:[{
        id:1,
        text:"hello world"           //initial state
    }]
}

 export const todoSlice=createSlice({
    name:'todo',
    initialState,//every slice has its initial state
    reducers:{
        addTodo:(state , action)=>{
            const todo={
           id:nanoid(),
           text:action.payload
         } 
         state.todos.push(todo) 
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo: (state, action) => {
  const { id, text } = action.payload;

  const todo = state.todos.find(t => t.id === id);
  if (todo) {
    todo.text = text;
  }
}

//         updateTodo: (state, action) => {
//   const { id, todo } = action.payload;

//   state.todos = state.todos.map((prevTodo) =>
//     prevTodo.id === id ? todo : prevTodo
//   );
// }

//         updateTodo:(state,action)=>{
//   state.todos=state.todos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id ? todo:prevTodo)))
//   state.todos.push(todo)
//   console.log(todo)
//         }
    }
 })
export const {removeTodo,addTodo,updateTodo}=todoSlice.actions

export default todoSlice.reducer