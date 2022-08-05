import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import AllTodo from '../../Shared/AllTodo';
import "react-datepicker/dist/react-datepicker.css";

const Todo = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <h1 className="font-semibold text-4xl my-5">Add your task here</h1>
            <div className="w-8/12 md:w-1/2 mx-auto bg-red-300 rounded-lg py-6 px-4 my-5">
                <form>
                    <label htmlFor='date'>
                        <span className="label-text font-semibold mr-5">Date</span>
                    </label> <br />

                    <ReactDatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        isClearable
                        placeholderText="Please select a date"
                        className="input input-bordered w-10/12 mx-auto mb-4"
                        id='date'
                    />
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

                    <button type='submit' className="mt-5 btn btn-primary">Save</button>
                </form>
            </div>
            <AllTodo></AllTodo>
        </div>
    );
};

export default Todo;