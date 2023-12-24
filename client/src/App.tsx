import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MoviesList from './components/Movies-List/MoviesList';
import Menu from './components/Menu/Menu';

function App() {

  return (
    <div>
      <Container className="my-5">
        <Menu />
        <Routes>
          <Route path="/" element={<MoviesList listType='movies-coming' showFavourite={true}/>} />
          <Route path="/upcoming" element={<MoviesList listType='movies-coming' showFavourite={true}/>}/>
          <Route path="/playing" element={<MoviesList listType='movies-in-theaters' showFavourite={true}/>}/>
          <Route path="/topindia" element={<MoviesList listType='top-rated-india' showFavourite={true}/>}/>
          <Route path="/topmovie" element={<MoviesList listType='top-rated-movies' showFavourite={true}/>}/>
          <Route path="/favourites" element={<MoviesList listType='favourite' showFavourite={false}/>}/>
        </Routes>
      </Container>
    </div>
  )
}

export default App;
