import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing';
import movieApi from '../../common/apis/movieApi';
import { ApiKey } from '../../common/apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies , fetchAsyncMovies, fetchAsyncShows} from '../../features/movies/movieSlice';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {         
        dispatch(fetchAsyncMovies("test"));
        dispatch(fetchAsyncShows("friends"));
    },[dispatch]);
    return (
        <div>
          <div className="banner-img"></div>
          <MovieListing />
        </div>
      );
}

export default Home
