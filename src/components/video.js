import React from 'react';

const video = () => {
  return (
    <div>
      <h1>Video de YouTube</h1>
      <iframe
        width="560"
        height="315"
        src="https://youtu.be/XPBniyikjek?si=WAi6voEEYVtiFvVN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  );
};

export default video;