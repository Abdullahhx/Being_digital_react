import React from 'react';
import './VideoSection.css';

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-container">
        <iframe 
          className="youtube-embed"
          src="https://www.youtube.com/embed/gt8SMTYUfjI?autoplay=1&mute=1&loop=1&playlist=gt8SMTYUfjI" 
          title="Being Digitals Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
