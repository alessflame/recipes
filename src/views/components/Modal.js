import React from 'react'
import {TiDelete} from "react-icons/ti";
import {useDispatch, useSelector} from "react-redux";
import {unsetModal} from "../../redux/slice/modalSlice";




function Modal() {


     const {modal}= useSelector(state=>state);
     const dispatch=useDispatch();


  return (
    <div className='modal'>
         <span className='modalIcon' onClick={()=> dispatch(unsetModal())}><TiDelete/></span>
         <span className='textModal'>
          {modal.text}
         </span>
    </div>
  )
}

export default Modal