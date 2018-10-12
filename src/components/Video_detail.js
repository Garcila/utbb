import React from 'react';

const VideoDetail = ({ video }) => {
  const url = 'https://www.youtube.com/embed/';
  return (
    <>
      {video ? (
        <section className='video-detail'>
          <div className='iframe-container intrinsic-container intrinsic-container-16x9'>
            <iframe
              className='video-player'
              title={`${url}${video.id.videoId}`}
              src={`${url}${video.id.videoId}`}
              allowFullScreen
            />
          </div>
          <h3>{video.snippet.title}</h3>
          <p>{video.snippet.description}</p>
        </section>
      ) : (
        <div className='loading'>Loading Video...</div>
      )}
    </>
  );
};

export default VideoDetail;
