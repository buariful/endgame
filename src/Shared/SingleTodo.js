import React from 'react';

const SingleTodo = ({ abc }) => {

    const deleteTask = () => {
        fetch(`https://stormy-lake-82482.herokuapp.com/deletetask/:${abc._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
    }

    const handleDelete = () => {
        const taskData = {
            date: abc.date,
            title: abc.title,
            description: abc.description
        }

        fetch('https://stormy-lake-82482.herokuapp.com/upcomplete', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(taskData)
        })
            .then(res => res.json())

        deleteTask();
    }

    return (
        <div className='flex gap-12 items-center align-middle my-3'>
            <div className=''>

                <input type="checkbox" className="checkbox" onClick={handleDelete} />
            </div>
            <div className='flex flex-col md:flex-row gap-5 items-center align-middle'>
                <div>
                    <p className='text-left'>{abc.date}</p>
                    <h3 className='font-semibold'>{abc.title}</h3>
                </div>
                <p className='text-left'>{abc.description}</p>
            </div>
        </div>
    );
};

export default SingleTodo;