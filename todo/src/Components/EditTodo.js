import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, ModalBody, ModalFooter, ModalHeader,Label } from 'reactstrap'
import {EditTo_do} from "../Features/TodoSlice"
import { toast } from 'react-hot-toast'

export default function EditTodo({cform,exit,TodoId}) {
  const [Title , setTitle] = useState("")
  const [Des,setDes] = useState("")
  const Dispatch = useDispatch()
  const todo = useSelector((state)=>state.todos)
  const editval = todo.find((todo) => todo.id === TodoId);
  const Update_todo = ()=>{

    Dispatch(EditTo_do({
      id:TodoId,
      task:Title,
      des:Des,
    }))
    toast.success("Sucessfully Updated the Todo")
    exit()
  }

 useEffect(()=>{
  if(editval){
    setTitle(editval.task)
    setDes(editval.des)
  }
 },[editval])

  return (
    <div>
      <Modal isOpen={cform}>
        <ModalHeader toggle={exit}>
          <h2>Edit Todo</h2>
          {/* <p>{TodoId}</p> */}
        </ModalHeader>
        <ModalBody>
        <div className='form-group'>
           <Label>Title</Label>
           <input type='text' className='form-control' value={Title} onChange={(e)=>setTitle(e.target.value)}/>
         </div>
         <div className='form-group'>
           <Label>Description</Label>
           <textarea rows="3" className='form-control' value={Des} onChange={(e)=>setDes(e.target.value)}/>
         </div>
        </ModalBody>
        <ModalFooter>
        <button className='btn btn-primary' onClick={Update_todo}>Edit</button>
        <button className='btn btn-danger' onClick={exit}>Cancel</button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
