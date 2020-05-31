import React from 'react'

//Components
import StaysList from '../StaysList/StaysList'
import Map from '../Map/Map'

const Home = () => (
    <div className="main-container">
        <StaysList />
        <Map />
    </div>
);

export default Home;