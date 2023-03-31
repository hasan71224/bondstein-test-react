import React from 'react';
import Banner from './Banner/Banner';
import Collection from './Collection/Collection';
import CreateSell from './CreateSell/CreateSell';
import Discover from './Discover/Discover';
import Featured from './Featured/Featured';
import Transection from './Transection/Transection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Transection></Transection>
            <Collection></Collection>
            <Featured></Featured>
            <CreateSell></CreateSell>
            <Discover></Discover>
        </div>
    );
};

export default Home;