import React from 'react';
import AllTodo from '../../Shared/AllTodo';
import Complete from '../Complete/Complete';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllTodo></AllTodo>
            <Complete></Complete>
        </div>
    );
};

export default Home;