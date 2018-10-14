import React from 'react';

const VideoDetail = ({ video }) => {
  const URL = 'https://www.youtube.com/embed/';
  return (
    <>
      {video ? (
        <main className="video-detail">
          <div
            className="
              iframe-container 
              video-detail--intrinsic-container 
              video-detail--intrinsic-container-16x9"
            tabIndex="0"
          >
            <iframe
              className="video-detail__video-player"
              title={`${URL}${video.id.videoId}`}
              src={`${URL}${video.id.videoId}`}
              allowFullScreen
              alt="video"
            />
          </div>
          <h3 className="video-detail__title">{video.snippet.title}</h3>
          <p className="video-detail__description">
            {video.snippet.description}
          </p>
        </main>
      ) : (
        <div className="video-detail__loading">Loading Video...</div>
      )}
    </>
  );
};

export default VideoDetail;
