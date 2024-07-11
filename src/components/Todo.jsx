import React from 'react'
import { MdDelete } from 'react-icons/md'
import { FaRegEdit } from "react-icons/fa";

const Todo = ({ todo, deleteSubmit, editSubmit }) => {


    return (
        <div>
            <div className='bg-white rounded-lg shadow-md p-6 pointer-events-auto relative '>
                <h1 className='text-black text-2xl font-semibold'>{todo.title}</h1>
                <div className='text-gray-600 py-3 text-ellipsis overflow-hidden  text-start'>{todo.description}</div>
                <div className='flex justify-end'>
                    <button className='hover:-translate-y-2 transition-transform duration-1000 ease-in-out' onClick={() => editSubmit(todo)} ><FaRegEdit className='text-green-600 mr-4 text-2xl' /> </button>
                    <button className='hover:-translate-y-2 transition-transform duration-1000 ease-in-out' onClick={() => deleteSubmit(todo)} ><MdDelete className='text-red-600 text-2xl' /> </button>
                </div>
            </div>
        </div>
    )
}

export default Todo