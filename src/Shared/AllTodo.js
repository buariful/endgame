import React, { useEffect, useState } from 'react';
import SingleTodo from './SingleTodo';

const AllTodo = () => {
    const [todos, setTodos] = useState('');

    useEffect(() => {
        fetch('todo.json')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])
    return (
        <div className='w-11/12 mx-auto'>



            <div className="text-5xl mt-12 mb-8 font-semibold">Your Uncomplete Tasks</div>
            {todos ? todos.map(todo => <SingleTodo abc={todo} key={todo._id}></SingleTodo>) : <p className="text-5xl mt-12 mb-8 font-semibold">There are no tasks</p>}
        </div>
    );
};

export default AllTodo;