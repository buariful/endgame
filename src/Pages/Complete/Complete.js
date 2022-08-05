import React, { useEffect, useState } from 'react';
import SingleComTask from './SingleComTask';

const Complete = () => {
    const [todos, setTodos] = useState('');

    useEffect(() => {
        fetch('https://stormy-lake-82482.herokuapp.com/completed')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])
    return (
        <div>
            <div className="text-5xl mt-12 mb-8 font-semibold">Your Completed Tasks</div>
            <div className='w-10/12 mx-auto'>

                {todos ? todos.map(todo => <SingleComTask todo={todo} key={todo._id}></SingleComTask>) : <p className="text-5xl mt-12 mb-8 font-semibold">There is no completed tasks</p>}
            </div>
        </div>
    );
};

export default Complete;