import React from 'react';
import AllTodo from '../../Shared/AllTodo';

const Todo = () => {
    return (
        <div>
            <div className="w-8/12 md:w-1/2 mx-auto bg-red-300 rounded-lg py-6 px-4 my-5">
                <form>
                    <div>
                        <label htmlFor='title'>
                            <span className="label-text font-semibold mr-5">Title</span>
                        </label> <br />
                        <input type="text" id='title' placeholder="Type here" className="input input-bordered w-10/12 mx-auto mb-4" />
                    </div>

                    <div>
                        <label htmlFor='description'>
                            <span className="label-text font-semibold mr-5">Description</span>
                        </label> <br />
                        <textarea type="text" id='description' placeholder="Type here" className="textarea textarea-bordered w-10/12 mx-auto" />
                    </div>

                    <button className="mt-5 btn btn-primary">Save</button>
                </form>
            </div>
            <AllTodo></AllTodo>
        </div>
    );
};

export default Todo;