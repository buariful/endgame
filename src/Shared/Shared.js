import React from 'react';
import { Link } from "react-router-dom";

const Shared = () => {
    return (
        <div>
            <div className="navbar bg-red-500 capitalize">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/'>home</Link>
                            <Link to='/todo' className="mx-3">Todo</Link>
                            <Link to='/complete-task'>Completed task</Link>
                        </ul>

                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Todo app</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 fond-semibold text-xl text-white">
                        <Link to='/'>home</Link>
                        <Link to='/todo' className="mx-3">Todo</Link>
                        <Link to='/complete-task'>Completed task</Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>

        </div>
    );
};

export default Shared;