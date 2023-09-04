import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import "./Style/Todos.css"
import AddToDo from './AddTodo'
import EditTodo from './EditTodo'
import {Todo_completed , DeleteTodo} from "../Features/TodoSlice"
import { Toaster , toast} from 'react-hot-toast'


export default function Todos() {
    const Dispatch = useDispatch()
    const todos = useSelector((state)=>state.todos)
    const completed_todo = todos.filter((todo)=>{
        return todo.completed === true
    })
    const NotCompleted = todos.filter((todo)=>{
        return todo.completed === false
    })

    const [Id,setId] = useState(1)


    const [Addmodal,setModal]=useState(false)
    const [EditModal , setEditModal] = useState(false)

    const [Editid,setEditId] = useState("")
    const Display_Modal = ()=>setModal(!Addmodal)
    const edit_Modal = ()=> {
        setEditModal(!EditModal)
    }
    
    const todo_com = (id)=>{
        Dispatch(Todo_completed({
            id:id
        }))
    }

    const todo_del = (id)=>{
        Dispatch(DeleteTodo({
            id : id
        }))
        toast.success("Sucessfully Deleted the Todo")
    }



  return (
    <div>
        <Toaster  position="bottom-right"/>
       <div className='container'>
        <div className='con-Header'>
            <h1>TO-DO LIST</h1>
            <p>Put Your Self at the top of the To-do List</p>
        </div>
            <div className='button_tab'>
                <button className={Id === 1 ? "active" : "tab_btn"} onClick={()=>setId(1)}>Home</button>
                <button className={Id === 2 ? "active" : "tab_btn"} onClick={()=>setId(2)}>completed</button>
                <button className={Id === 3 ? "active" : "tab_btn"} onClick={()=>setId(3)}>Not Completed</button>
                <button className="tab_btn" onClick={()=>{
                    Display_Modal()
                    }}>Create</button>
            </div>
            <div className='Task_Content'>
                <div className={Id === 1 ? "content" : "hide_content"}>
                    <h2>Tasks</h2>
                    {todos.map((todo)=>(
                        <div className='List'>
                            <div>
                        <h5>{todo.task}</h5>  
                        <p>{todo.des}</p>
                        {/* <p>{todo.id}</p>   */}
                        </div>
                        <div className='list_btn'>
                            <button className='btn btn-success butn' onClick={()=>todo_com(todo.id)}>{todo.completed?"Not Completed":" Completed"}</button>
                            <button className='btn btn-secondary butn'  onClick={()=>{
                                edit_Modal()
                                setEditId(todo.id)
                            }}>Edit</button>
                            <button className='btn btn-danger butn' onClick={()=>todo_del(todo.id)}>Delete</button>
                        </div>
                        </div>
                    ))}
                </div>
                <div className={Id === 2 ? "content" : "hide_content"}>
                    <h2>Completed</h2>
                {completed_todo.map((todo)=>(
                        <div className='List'>
                        <div>
                    <h5>{todo.task}</h5>  
                    <p>{todo.des}</p>  
                    {/* <p>{todo.id}</p>   */}
                    </div>
                    <div className='list_btn'>
                        <button className='btn btn-success butn' onClick={()=>todo_com(todo.id)}>{todo.completed?"Not Completed":" Completed"}</button>
                        <button className='btn btn-danger butn' onClick={()=>todo_del(todo.id)}>Delete</button>
                    </div>
                    </div>
                    ))}
                </div>
                <div className={Id === 3 ? "content" : "hide_content"}>
                    <h2>NotCompleted</h2>
                {NotCompleted.map((todo)=>(
                        <div className='List'>
                        <div>
                    <h5>{todo.task}</h5>  
                    <p>{todo.des}</p> 
                    {/* <p>{todo.id}</p>      */}
                    </div>
                    <div className='list_btn'>
                        <button className='btn btn-success butn' onClick={()=>todo_com(todo.id)}>{todo.completed?"Completed":"Not Completed"}</button>
                        <button className='btn btn-secondary butn' onClick={()=>{
                            edit_Modal()
                            setEditId(todo.id)
                        }}>Edit</button>
                        <button className='btn btn-danger butn' onClick={()=>todo_del(todo.id)}>Delete</button>
                    </div>
                    </div>
                    ))}
                </div> 
            </div>
        </div>  
        <AddToDo modal={Addmodal} close={Display_Modal}/>
        <EditTodo cform={EditModal} exit={edit_Modal} TodoId={Editid}/>
    </div>
  )
}
