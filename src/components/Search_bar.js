import React from 'react';

class SearchBar extends React.Component {
  state = { word: '' };

  handleInput = word => {
    this.setState({ word });
    this.props.searchVideo(word);
  };

  render() {
    return (
      <section className='search'>
        <img className='loupe' src='../images/search.png' alt='search' />
        <input
          type='text'
          value={this.state.word}
          onChange={e => this.handleInput(e.target.value)}
          className='input_search'
          placeholder='What do you wanna see'
        />
      </section>
    );
  }
}

export default SearchBar;
