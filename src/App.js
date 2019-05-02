import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
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
    poster : "https://images-na.ssl-images-amazon.com/images/I/91ONQ8FNHJL._SL1500_.jpg",
  },
  {
    title : "Star wars",
    poster : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMFwZdtmOZdOyW-3WYkqk5YyRpXP-W1PDXwDpfZX-U1plfj9FX"
  }
]

class App extends Component {
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate()
  //          -> render() -> componentDidUpdate()

  state = {
    greeting: 'Hello!'
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        greeting: 'Hello again!'
      })
    }, 1000
    )
  }

  render(){
  return (
    <div className="App">
      {this.state.greeting}
      {movies.map((movie, index) => {
        return <Movie title={movie.title} poster={movie.poster} key={index} />
      })}
    </div>
  );
  }
}

export default App;
