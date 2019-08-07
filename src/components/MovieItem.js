import React from "react";

const MovieItem = props => {
  const movie = props.movie;

  let image_url = "https://image.tmdb.org/t/p/w500";
  image_url += props.movie.poster_path;

  console.log(movie);

  return (
    <div className="card my-4">
      <img className="card-img-top" src={image_url} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <a href="#" className="btn btn-primary">
          More Info
        </a>
      </div>
    </div>
  );
};

export default MovieItem;
