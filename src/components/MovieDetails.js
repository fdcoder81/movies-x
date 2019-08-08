import React from "react";
import Trailers from "./Trailers";

const MovieDetails = props => {
  const movieSelected = props.movieSelected;
  const videos = props.videos;
  console.log(videos);

  let image_url = "https://image.tmdb.org/t/p/w500";
  image_url += movieSelected.poster_path;

  return (
    <div className="jumbotron mt-4 pt-2 bg-light">
      <div className="d-flex align-items-center">
        <h3 className="my-4 mx-auto border-bottom border-top w-50 bg-info text-white">
          Info and Trailers
        </h3>
        <button
          onClick={props.closeDetails}
          className="my-4 close"
          type="button"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div className="row">
        <div className="col-4 p-0">
          <div className="card border-info">
            <img src={image_url} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{movieSelected.title}</h5>
              <p className="card-text font-weight-bold">
                Release Date : {movieSelected.release_date}
              </p>
              <p className="card-text">{movieSelected.overview}</p>
            </div>
          </div>
        </div>

        <div className="col-8 p-0">
          <Trailers videos={props.videos} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
