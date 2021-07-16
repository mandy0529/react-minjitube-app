import React from 'react';
import PropTypes from 'prop-types';
import '../components/Movie.css';

function Movie({title, id, summary, year, rating, genres, poster}) {
  return (
    <div className="movie__container">
      <img src={poster} alt={title} className="poster"></img>
      <div className="movie__info">
        <div className="movie__title">{title}</div>
        <div className="movie__summary">{summary.slice(0, 180)} ...</div>
        <div className="movie__year"> created {year}</div>
        <div className="movie__rating"> ⭐️ {rating} / 5</div>
        <ul className="movie__genres">
          {genres.map((genre, number) => (
            <li key={number} className="movie__genres-genre">
              {genre}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number,
  summary: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
