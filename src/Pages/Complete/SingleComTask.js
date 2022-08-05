import React from 'react';

const SingleComTask = ({ todo }) => {
    return (
        <div>
            <div className='flex flex-col md:flex-row gap-5 items-center align-middle mb-5'>
                <div>

                    <p className='text-left'>{todo.date}</p>
                    <h3 className='font-semibold'>{todo.title}</h3>
                </div>
                <p className='text-left'>{todo.description}</p>
            </div>
        </div>
    );
};

export default SingleComTask;