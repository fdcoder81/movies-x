import React from "react";
import MovieItem from "./MovieItem";
import MovieDetails from "./MovieDetails";

class ShowMovies extends React.Component {
  state = { showDetails: false };

  handleClick = movie => {
    console.log(movie);
  };

  render() {
    const movies = this.props.moviesData;

    const list = movies.map(movie => {
      return (
        <div key={movie.id}>
          <MovieItem handleClick={this.handleClick} movie={movie} />
        </div>
      );
    });

    return (
      <div>
        {!this.state.showDetails ? (
          <div className="card-deck">{list}</div>
        ) : (
          <div>
            <MovieDetails />
          </div>
        )}
      </div>
    );
  }
}

export default ShowMovies;
