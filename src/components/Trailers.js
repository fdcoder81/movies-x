import React from "react";

const Trailers = props => {
  const trailerItem = props.videos.map(video => {
    console.log(video);
    return (
      <div className="card mb-4" key={video.id.videoId}>
        <img src={video.snippet.thumbnails.medium.url} alt="" />
        <div className="card-footer">
          <p className="mb-0">{video.snippet.title}</p>
        </div>
      </div>
    );
  });

  return <div className="trailers">{trailerItem}</div>;
};

export default Trailers;
