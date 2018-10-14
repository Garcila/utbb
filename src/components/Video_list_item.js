import React from "react";

const VideoListItem = ({ makeSelectedVideo, video }) => (
  <li className="cards" onClick={() => makeSelectedVideo(video)} tabIndex="0">
    <img src={video.snippet.thumbnails.high.url} alt={`video about ${video.snippet.title}`} />
    <div className="cards-title">{video.snippet.title}</div>
  </li>
);

export default VideoListItem;
