// Core
import React from 'react';

import './ControlType.scss';

const ControlType = ({ isStart, isVideo, handleSetOnlyAudio, onlyAudio }) => {
    return (
        <div
            className={['control-wrap', !isStart ? null : 'invisible'].join(
                ' ',
            )}
        >
            {isVideo && (
                <>
                    <div
                        className="control"
                        onChange={(e) => handleSetOnlyAudio(e)}
                    >
                        <input
                            type="radio"
                            name="media"
                            value="video"
                            id="mediaVideo"
                            defaultChecked={!onlyAudio}
                        />
                        <label htmlFor="media">Video</label>
                        <input
                            type="radio"
                            name="media"
                            value="audio"
                            defaultChecked={onlyAudio}
                        />
                        <label htmlFor="media">Audio</label>
                    </div>

                    <div className="select-title">Selecting a record type</div>
                </>
            )}
        </div>
    );
};

export default ControlType;
