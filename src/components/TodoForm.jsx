import React, { useEffect, useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';

const TodoForm = ({ isVisible, onClose, todo, editTodo, updateTodo, isEditForm}) => {
    const [title, setTitle] = useState(isEditForm ? editTodo.title : '');
    const [description, setDescription] = useState(isEditForm ? editTodo.description : '');
    

    useEffect(() => {
        if (isEditForm) {
            setTitle(editTodo.title);
            setDescription(editTodo.description);
        }else{
            setTitle('');
            setDescription('');
        }
    }, [editTodo]);

    const handleSubmit = (e) => {
        e.preventDefault();
       

        if (isEditForm){
            const updatedTodo = {
                id: editTodo.id,
                title,
                description,
            };
    
            updateTodo(updatedTodo);
            onClose();
            setTitle('');
            setDescription('');
         
        }
        else{
            const newTodo = {
                title,
                description,
            };
    
            todo(newTodo);
            onClose();
            setTitle('');
            setDescription('');
       
        }
    };

  
    if (!isVisible) {
        return null;
    }

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-10'>
            <div className='bg-white p-10 rounded-md shadow-md max-w-xl w-full'>
                <div className='flex justify-end'>
                    <button onClick={onClose}><MdOutlineCancel className='text-red-600 text-3xl' /></button>
                </div>
                <h1 className='text-3xl text-yellow-400 text-center mb-3 font-semibold'>Enter your to do</h1>
                <div className='h-[1px] w-full bg-gray-200 mb-6'></div>
                <form >
                    <div>
                        <label htmlFor="title" className='text-black text-xl'>Title</label>
                        <input
                            type='text'
                            id='title'
                            className='border focus:border-yellow-400 focus:outline-none focus:border-2 py-3 px-2 w-full rounded-md shadow-md my-4 text-black'
                            placeholder='Todo Title'
                            value={title}
                            required
                           
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="todo" className='text-black text-xl'>Todo</label>
                        <textarea
                            rows={4}
                            id='todo'
                            className='border focus:border-yellow-400 focus:outline-none focus:border-2 py-3 px-2 w-full rounded-md shadow-md my-4 text-black'
                            placeholder='Todo'
                            value={description}
                            required
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <button onClick={handleSubmit} className='h-[40px] px-3 py-2 bg-yellow-300 rounded-md text-gray-900 hover:bg-yellow-500'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default TodoForm;
