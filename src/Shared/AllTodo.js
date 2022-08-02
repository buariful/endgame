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
        <div>
            {todos && todos.map(todo => <SingleTodo abc={todo} key={todo._id}></SingleTodo>)}
        </div>
    );
};

export default AllTodo;