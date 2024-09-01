import React from 'react';
import LeftSidebar from '../components/LeftSidebar';
import PrizeList from '../components/PrizeList';
import RightSidebar from '../components/RightSidebar';

const Home = () => {
    return (
        <div>
            <LeftSidebar/>
            <PrizeList/>
            <RightSidebar/>
        </div>
    );
};

export default Home;