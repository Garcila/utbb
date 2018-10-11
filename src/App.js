import React, { Component, Fragment } from 'react';
import './App.css';
import YTSearch from 'youtube-api-search';
import { debounce } from 'lodash';

import Header from './components/Header';
import SearchBar from './components/Search_bar';
import VideoDetail from './components/Video_detail';
import VideoList from './components/Video_list';
import Footer from './components/Footer';

import KEY from './apiKeys.js';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    YTSearch({ key: KEY.API_key, term: 'CSS Grid' }, videos => {
      this.setState({ videos, selectedVideo: videos[0] });
    });
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  searchVideo = word => {
    YTSearch(
      { key: KEY.API_key, term: word },
      debounce(
        videos => this.setState({ videos, selectedVideo: videos[0] }),
        800
      )
    );
  };

  makeSelectedVideo = id => {
    const selectedVideo = id;
    this.setState({ selectedVideo });
  };

  render() {
    return (
      <Fragment>
        <Header title={'UTB'} mantra={'Video... Devolved'} />
        <SearchBar searchVideo={this.searchVideo} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          makeSelectedVideo={this.makeSelectedVideo}
          videos={this.state.videos}
          selectedVideo={this.state.selectedVideo}
        />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
