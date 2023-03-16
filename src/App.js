import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Pagination from './components/Pagination';

function App() {
  return (
      <React.Fragment>
        <Navbar></Navbar>
        <Banner></Banner>
        <Movies></Movies>
        <Pagination></Pagination>
      </React.Fragment>
      
  );
}

export default App;
