import React from "react";
import MovieItem from "./MovieItem";
import MovieDetails from "./MovieDetails";
import youtube from "../apis/youtube";

const key = "AIzaSyBIdZzcIrExUP9CMwngK-EhZiCgyA2TpAQ";

class ShowMovies extends React.Component {
  state = { showDetails: false, movieSelected: [], videos: [] };

  getVideo = async term => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        key: key,
        maxResults: 5,
        q: term + " trailer"
      }
    });
    this.setState({ videos: response.data.items });
  };

  closeDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails
    });
  };

  handleClick = movie => {
    this.getVideo(movie.title);
    this.setState({
      movieSelected: movie,
      showDetails: !this.state.showDetails
    });
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
          <div className="card-deck justify-content-center">{list}</div>
        ) : (
          <div>
            <MovieDetails
              movieSelected={this.state.movieSelected}
              videos={this.state.videos}
              closeDetails={this.closeDetails}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ShowMovies;
