import React from "react";
import MovieItem from "./MovieItem";
import MovieDetails from "./MovieDetails";

class ShowMovies extends React.Component {
  state = { showDetails: false, movieSelected: [] };

  handleClick = movie => {
    this.setState({
      movieSelected: movie,
      showDetails: !this.state.showDetails
    });
  };

  componentDidUpdate() {
    console.log(this.state.movieSelected);
  }

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
            <MovieDetails movieSelected={this.state.movieSelected} />
          </div>
        )}
      </div>
    );
  }
}

export default ShowMovies;
