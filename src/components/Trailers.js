import React from "react";

const Trailers = props => {
  const trailerItem = props.videos.map(video => {
    let videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div className="card mb-4" key={video.id.videoId}>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            title={video.snippet.title}
            className="embed-responsive-item"
            src={videoSrc}
            allowFullScreen
          />
        </div>{" "}
        <div className="card-footer">
          <p className="mb-0">{video.snippet.title}</p>
        </div>
      </div>
    );
  });

  return <div className="trailers">{trailerItem}</div>;
};

export default Trailers;
