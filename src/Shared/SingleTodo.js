import React from 'react';

const SingleTodo = ({ abc }) => {

    return (
        <div className='flex gap-12 items-center align-middle my-3'>
            <div className=''>

                <input type="checkbox" className="checkbox" />
            </div>
            <div className='flex flex-col md:flex-row gap-5 items-center align-middle'>
                <h3 className='font-semibold'>{abc.title}</h3>
                <p className='text-left'>{abc.description}</p>
            </div>
        </div>
    );
};

export default SingleTodo;