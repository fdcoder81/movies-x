import React from "react";
import noImage from "../no-image.jpg";

class MovieItem extends React.Component {
  handleClick = e => {
    this.props.handleClick(this.props.movie);
  };

  render() {
    const movie = this.props.movie;

    let image_url = "https://image.tmdb.org/t/p/w500";
    movie.poster_path === null
      ? (image_url = noImage)
      : (image_url += movie.poster_path);

    return (
      <div className="card my-4 movie-card">
        <img className="card-img-top" src={image_url} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <button onClick={this.handleClick} className="btn btn-primary">
            More Info and Trailers
          </button>
        </div>
      </div>
    );
  }
}

export default MovieItem;
