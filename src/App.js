import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star wars"
]

const movieImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiV5iJmB0F488UoqZDXO5zQXBvdFa3h1BIeo-T2CghlE1DRPhy",
  "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/91ONQ8FNHJL._SL1500_.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMFwZdtmOZdOyW-3WYkqk5YyRpXP-W1PDXwDpfZX-U1plfj9FX"
]



class App extends Component {


  render(){


  return (
    <div className="App">
      <Movie title={movieTitles[0]} poster={movieImages[0]}/>
      <Movie title={movieTitles[1]} poster={movieImages[1]}/>
      <Movie title={movieTitles[2]} poster={movieImages[2]}/>
      <Movie title={movieTitles[3]} poster={movieImages[3]}/>
    </div>
  );
  }
}

export default App;
