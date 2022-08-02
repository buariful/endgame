import React from 'react';

const SingleComTask = ({ todo }) => {
    return (
        <div>
            <div className='flex flex-col md:flex-row gap-5 items-center align-middle mb-5'>
                <h3 className='font-semibold'>{todo.title}</h3>
                <p className='text-left'>{todo.description}</p>
            </div>
        </div>
    );
};

export default SingleComTask;