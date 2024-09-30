import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'



const Todoitem = ({text,id, isComplete, toggle, deleteTodo}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>{toggle(id)}} className=' flex flex-1 items-center cursor-pointer '>
            <img src={isComplete ? tick :  not_tick } alt="" />
            <p className={` text-slate-700   decoration-slate-400 font-serif font-semibold ml-4 text-[17px] ${isComplete ? " line-through":""} `}>{text}</p>
        </div> 
        <img onClick={()=>{deleteTodo(id)}} className=' w-3.5 cursor-pointer *:'   src={delete_icon} alt="" />
    </div>
  )
}

export default Todoitem