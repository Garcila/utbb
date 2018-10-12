import React from 'react';

import VideoListItem from './Video_list_item';

const VideoList = ({ videos, makeSelectedVideo, selectedVideo }) => {
  const otherVideos = videos.filter(
    video => video.id.videoId !== selectedVideo.id.videoId
  );
  const list = otherVideos.map(otherVideo =>
    <VideoListItem
      makeSelectedVideo={makeSelectedVideo}
      key={otherVideo.id.videoId}
      selectedVideo={selectedVideo}
      video={otherVideo}
    />
  );
  return (
    <ul className='video-list'>
      {list}
    </ul>
  );
};

export default VideoList;
