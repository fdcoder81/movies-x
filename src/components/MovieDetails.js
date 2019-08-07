import React from "react";

class MovieDetails extends React.Component {
  render() {
    return <div>{this.props.movieSelected.title}</div>;
  }
}

export default MovieDetails;
