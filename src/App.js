import React, { Component } from 'react';

import './App.css';

import YTSearch from 'youtube-api-search';
import debounce from 'lodash.debounce'; //this only import debounce, not all lodash library

import Header from './components/Header';
import SearchBar from './components/Search_bar';
import VideoDetail from './components/Video_detail';
import VideoList from './components/Video_list';
import Footer from './components/Footer';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    // YTSearch only requires a key, a term to search and a callback function.
    // It might also take a promise instead of the callback
    YTSearch(
      {
        key: process.env.REACT_APP_API_KEY,
        term: 'CSS Grid'
      },
      videos => {
        this.setState({
          videos,
          selectedVideo: videos[0]
        });
      }
    );
  }

  componentDidUpdate() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  searchVideo = word => {
    YTSearch(
      {
        key: process.env.REACT_APP_API_KEY,
        term: word
      },
      debounce(
        videos =>
          this.setState({
            videos,
            selectedVideo: videos[0]
          }),
        800
      )
    );
  };

  makeSelectedVideo = id => {
    const selectedVideo = id;
    this.setState({
      selectedVideo
    });
  };

  render() {
    return (
      <>
        <Header title={'U2B'} mantra={'Video... Devolved'} />
        <SearchBar searchVideo={this.searchVideo} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          makeSelectedVideo={this.makeSelectedVideo}
          videos={this.state.videos}
          selectedVideo={this.state.selectedVideo}
        />
        <Footer />
      </>
    );
  }
}

export default App;
