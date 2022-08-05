import React, { useEffect, useState } from 'react';
import SingleTodo from './SingleTodo';

const AllTodo = () => {
    const [todos, setTodos] = useState('');

    useEffect(() => {
        fetch('https://stormy-lake-82482.herokuapp.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])
    console.log(todos)
    return (
        <div className='w-11/12 mx-auto'>



            <div className="text-5xl mt-12 mb-8 font-semibold">Your Uncompleted Tasks</div>
            {todos ? todos.map(todo => <SingleTodo abc={todo} key={todo._id}></SingleTodo>) : <p className="text-5xl mt-12 mb-8 font-semibold">There are no tasks</p>}
        </div>
    );
};

export default AllTodo;