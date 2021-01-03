// Core
import React from 'react';

// Components
import AudioMeter from '../AudioMeter/AudioMeter';

import './SettingsRecord.scss';

export default function SettingsRecord({
    isSettings,
    onlyAudio,
    videoSelect,
    audioInputSelect,
    audioOutputSelect,
    handlerSettings,
}) {
    return (
        <div className={['settings', isSettings ? 'active' : null].join(' ')}>
            <h2>
                Configure your {onlyAudio ? null : 'camera and '} audio devices
            </h2>
            <div
                className={[
                    'video-settings',
                    onlyAudio ? 'invisible' : null,
                ].join(' ')}
            >
                <div className="select">
                    <label htmlFor="videoSource">Video source:</label>
                    <select id="videoSource" ref={videoSelect}></select>
                </div>
            </div>
            <div className="select">
                <label htmlFor="audioSource">Audio input:</label>
                <AudioMeter />
                <select id="audioSource" ref={audioInputSelect}></select>
            </div>

            <div className="select">
                <label htmlFor="audioOutput">Audio output:</label>
                <select id="audioOutput" ref={audioOutputSelect}></select>
            </div>
            <div className="control-record">
                <button
                    className="btn btn-success btn-sm"
                    onClick={handlerSettings}
                >
                    <i className="far fa-arrow-left"></i> Back to Record
                </button>
            </div>
        </div>
    );
}
