import React from 'react';
import List from './List';
import Today from './Today';
import Categories from './Categories';
import Products from './Products';
import Featured from './Featured';
import Quality from './Quality';
import BestSellingProducts from './BestSellingProducts'; 

const Home = () => {
  return (
    <div className="main">   
      <List />
      <Today />
      <Categories />
      <hr className="opacity-60 mt-14" />
      <BestSellingProducts />
      <Products />
      <Featured />
      <Quality />
    </div>
  );
};

export default Home;