import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate()
  //          -> render() -> componentDidUpdate()

  state = {
  
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies : [
          {
            title : "Matrix",
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiV5iJmB0F488UoqZDXO5zQXBvdFa3h1BIeo-T2CghlE1DRPhy",
          },
          {
            title : "Full Metal Jacket",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg",
          },
          {
            title : "Oldboy",
            poster : "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Oldboy_2013_film_poster.jpg/220px-Oldboy_2013_film_poster.jpg",
          },
          {
            title : "Star wars",
            poster : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMFwZdtmOZdOyW-3WYkqk5YyRpXP-W1PDXwDpfZX-U1plfj9FX"
          }
        ]
      })
    }, 5000
    )
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render(){
  return (
    <div className="App">
      {this.state.movies ? this._renderMovies() : 'Loading ... '}
    </div>
  );
  }
}

export default App;
