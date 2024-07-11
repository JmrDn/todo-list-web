import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoProcess = () => {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [editsTodo, setEditsTodo] = useState([]);
    const [isEditForm, setIsEditForm] = useState(false);
    const [isToFetch, setIsToFetch] = useState(false);

    const addNewTodo = (e) => {
        e.preventDefault();
        setIsFormVisible(true);
        setIsEditForm(false);
      
    };

    const closeForm = () => {
        setIsFormVisible(false);
    };

    useEffect(() => {
        const fetchTodo = async () => {
            try {
                const res = await fetch('http://localhost:8000/todo');

                if (!res.ok) {
                    console.log('Failed to fetch');
                }
                else {
                    setTodos(await res.json());
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchTodo();
    }, [isToFetch]);

 
    
    const submitNewTodo = async (todo) => {
        try {
            const res = await fetch('/api/todo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(todo),
            });
            
            if (!res.ok){
                toast.error('Failed to fetch')
               
            }
            else{
                toast.success('New Todo submitted');
                setIsToFetch(!isToFetch);
      
            }
        

        } catch (error) {
            toast.error('Failed to submit new todo');
        }
    };

    // New click handler for Todo component
    const deleteTodo = async (todo) => {

        const confirm = window.confirm('Are you sure to delete?');

        if (!confirm) {
            return;
        }


        try{
            const res = await fetch(`/api/todo/${todo.id}`, {
                method: 'DELETE'
            });
    
            if (!res.ok){
                toast.error('Failed to delete');
            }
            else{
                toast.success('Successfully deleted');
                setIsToFetch(!isToFetch);
            }
        }catch(error){
            toast.error('Theres an error upon deleting', error );
        }
    };

    const editTodo = (todo) => {
        setIsFormVisible(true);
        setEditsTodo(todo);
        setIsEditForm(true);
    }

    const updateTodo = async (todo) =>{
        try{
            const res = await fetch(`/api/todo/${todo.id}`,{
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(todo)
            });
            
            if( !res.ok ){
                toast.error('Failed to update');
            }
            else{
     
                toast.success('New Todo updated');
                setIsToFetch(!isToFetch);
            }
         

        }catch(error){
            console.log(error);
        }
    }

    return (
        <div className='text-white font-kanit'>
            <div className='container mx-auto px-[100px]'>
                
                <TodoForm isVisible={isFormVisible} onClose={closeForm} todo={submitNewTodo} editTodo={editsTodo} updateTodo={updateTodo} isEditForm={isEditForm} />
                <button onClick={addNewTodo} className='h-[40px] px-3 py-2 bg-yellow-300 rounded-md text-gray-900  hover:bg-yellow-500'>Add new Todo</button>
                <div className='grid  grid-cols-1  sm:grid-cols-2 md:grid-cols-3 container mx-auto py-6 gap-4'>
                    {todos.map((todo) => (
                        <Todo key={todo.id} todo={todo} deleteSubmit={deleteTodo} editSubmit={editTodo} />
                    ))}
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default TodoProcess;
