import React from 'react';
import './style.scss';
import HeroBanner from './HeroBanner/HeroBanner';
HeroBanner;
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
const Home = () => {
  return (
    <div className='Homepage'>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home