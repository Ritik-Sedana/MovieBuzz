import logo from './logo.svg';
import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <div className="container">

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/movie/:imdbID' element={<MovieDetail />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
