import React from 'react';
import Movie from '../components/Movie';
import axios from 'axios';
import '../components/Movie.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: {movies},
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json');
    this.setState({isLoading: false, movies});
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;
    return (
      <div className="movie">
        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : (
          movies.map((movie) => (
            <Movie
              key={movie.id}
              title={movie.title}
              summary={movie.summary}
              year={movie.year}
              rating={movie.rating}
              genres={movie.genres}
              poster={movie.medium_cover_image}
            />
          ))
        )}
      </div>
    );
  }
}

export default Home;
