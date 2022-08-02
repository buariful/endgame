import React from 'react';
import AllTodo from '../../Shared/AllTodo';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllTodo></AllTodo>
        </div>
    );
};

export default Home;