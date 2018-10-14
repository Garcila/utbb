import React from 'react';

const VideoDetail = ({ video }) => {
  const URL = 'https://www.youtube.com/embed/';
  return (
    <>
      {video ? (
        <main className="video-detail">
          <div className="iframe-container intrinsic-container intrinsic-container-16x9" tabIndex="0">
            <iframe
              className="video-player"
              title={`${URL}${video.id.videoId}`}
              src={`${URL}${video.id.videoId}`}
              allowFullScreen
              alt="video"
            />
          </div>
          <h3>{video.snippet.title}</h3>
          <p>{video.snippet.description}</p>
        </main>
      ) : (
        <div className="loading">Loading Video...</div>
      )}
    </>
  );
};

export default VideoDetail;
