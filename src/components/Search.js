import React from "react";

class Search extends React.Component {
  state = {
    term: ""
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
    this.setState({ term: "" });
  };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <div>
        <form className="form-inline" onSubmit={this.onFormSubmit}>
          <div className="w-100 d-flex justify-content-center">
            <input
              className="form-control w-50"
              type="text"
              value={this.state.term}
              placeholder="Search movies"
              onChange={this.onInputChange}
            />
            <button type="submit" className="btn btn-primary ml-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
