// Core
import React from 'react';

// Styles
import './ControlRecord.scss';

const ControlRecord = ({
    isStart,
    isRecord,
    recordStream,
    recordStop,
    startRecording,
}) => {
    return (
        <div className="control-record">
            {isStart ? (
                <div className="record-btns">
                    <button
                        disabled={isRecord ? true : false}
                        className={[
                            'btn-record',
                            isRecord ? 'active' : null,
                        ].join(' ')}
                        onClick={recordStream}
                    >
                        <i className="fas fa-record-vinyl"></i>
                    </button>
                    <button
                        disabled={isRecord ? false : true}
                        className="btn-record"
                        onClick={recordStop}
                    >
                        <i className="fas fa-stop-circle"></i>
                    </button>
                    <button
                        disabled={!isRecord ? false : true}
                        className="btn-record"
                        onClick={startRecording}
                    >
                        <i className="fas fa-clipboard-list-check"></i>
                    </button>
                </div>
            ) : (
                <div className="record-btns">
                    <button
                        className="btn btn-success"
                        onClick={startRecording}
                    >
                        Start Recording
                    </button>
                </div>
            )}
        </div>
    );
};

export default ControlRecord;
