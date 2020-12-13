// Core
import React from 'react';

// Styles
import './VideoContent.scss';

const VideoContent = ({ onlyAudio, videoElement }) => {
    return (
        <div
            className={['video-content', onlyAudio ? 'invisible' : null].join(
                ' ',
            )}
        >
            <video
                id="video"
                poster="images/poster.png"
                autoPlay
                playsInline
                ref={videoElement}
            ></video>
        </div>
    );
};

export default VideoContent;
