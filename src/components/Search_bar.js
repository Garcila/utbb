import React from 'react';

class SearchBar extends React.Component {
  state = { word: '' };

  handleInput = word => {
    this.setState({ word });
    this.props.searchVideo(word);
  };

  render() {
    return (
      <section className="search">
        <label htmlFor="search">
            <img
              className="search__loupe"
              src="../images/search.png"
              alt="search icon"
            />
        </label>
        <input
          id="search"
          type="text"
          value={this.state.word}
          onChange={e => this.handleInput(e.target.value)}
          className="search__input"
          placeholder="What do you wanna see"
        />
      </section>
    );
  }
}

export default SearchBar;
