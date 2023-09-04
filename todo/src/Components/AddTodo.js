import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';
import { AddTodo } from '../Features/TodoSlice';
import { toast } from 'react-hot-toast';

export default function AddToDo({modal,close}) {

    const [Title,setTitle] = useState("")
    const [Des,setDes] = useState("")

    const dispacher = useDispatch()

    const Add_todo = ()=>{
      console.log(Title,Des)
      dispacher(AddTodo({
        task:Title,
        des:Des,
        completed:false
      }))
      setDes("")
      setTitle("")
      toast.success("Successfully Created Todo")
      close()
    }

  return (
    <div className='Formtodo'>
        <Modal isOpen={modal}>
            <ModalHeader toggle={close}>
                <h2>Add todo</h2>
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
                <button className='btn btn-primary' onClick={Add_todo}>ADD</button>
                <button className='btn btn-secondary' onClick={()=>{
                  setDes("")
                  setTitle("")
                }}>Reset</button>
                <button className='btn btn-danger' onClick={close}>Cancel</button>
            </ModalFooter>
        </Modal>
    </div>
  )
}
