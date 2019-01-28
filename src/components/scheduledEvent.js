import React from 'react';

const ScheduledEvent = ({
  image,
  schedule,
  title,
  description,
  slides,
  video,
  repository
}) => (
  <div className="card">
    <div className="card-wrapper">
      <img className="card-image" src={image} alt="avatar" />
      <div className="card-information">
        <h2 className="schedule">{schedule}</h2>
        <i className="card-title">{title}</i>
        <p className="card-description">{description}</p>
        {slides && <a href={slides}>Slides</a>}
        {video && <a href={video}>Video</a>}
        {repository && <a href={repository}>Repo</a>}
      </div>
    </div>
  </div>
);

export default ScheduledEvent;
