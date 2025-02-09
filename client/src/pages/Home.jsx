import React from 'react';
import Hero from '../components/Hero';
import HeroContentFirst from '../components/HeroContentFirst';
import HeroContentSecond from '../components/HeroContentSecond';

const Home = () => {
  return (
    <div>
      <Hero />
      <HeroContentFirst />
      <HeroContentSecond />
    </div>
  );
};

export default Home;