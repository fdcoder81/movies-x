import React from "react";
import Search from "./components/Search";
import moviedb from "./apis/movidedb";
import ShowMovies from "./components/ShowMovies";

const key = "31e3c537946929f18904b39eeb3f7e1a";

class App extends React.Component {
  state = { moviesData: [] };

  onFormSubmit = async term => {
    const response = await moviedb.get("/search/movie", {
      params: {
        api_key: key,
        query: term
      }
    });

    this.setState({ moviesData: response.data.results });
  };

  render() {
    return (
      <div className="container text-center">
        <h1 className="display-3 mb-2">MOVIES X</h1>
        <p>By Carlo Anselmi</p>
        <Search onFormSubmit={this.onFormSubmit} />
        <ShowMovies moviesData={this.state.moviesData} />
      </div>
    );
  }
}

export default App;
