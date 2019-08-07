import React from "react";

class MovieItem extends React.Component {
  handleClick = e => {
    this.props.handleClick(this.props.movie);
  };

  render() {
    const movie = this.props.movie;

    let image_url = "https://image.tmdb.org/t/p/w500";
    image_url += this.props.movie.poster_path;

    console.log(movie);

    return (
      <div className="card my-4">
        <img className="card-img-top" src={image_url} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <a onClick={this.handleClick} href="#" className="btn btn-primary">
            More Info
          </a>
        </div>
      </div>
    );
  }
}

export default MovieItem;
