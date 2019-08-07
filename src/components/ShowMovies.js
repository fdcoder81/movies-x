import React from "react";
import MovieItem from "./MovieItem";
import MovieDetails from "./MovieDetails";

class ShowMovies extends React.Component {
  state = { showDetail: false };

  render() {
    const movies = this.props.moviesData;

    const list = movies.map(movie => {
      return (
        <div>
          <MovieItem movie={movie} />
        </div>
      );
    });

    return (
      <div>
        {!this.state.showDetail ? (
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
