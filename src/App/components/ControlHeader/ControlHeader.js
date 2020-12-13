// Core
import React from 'react';

// Styles
import './ControlHeader.scss';

const ControlHeader = ({
    handlerResult,
    handlerRefreshPage,
    handlerSettings,
}) => {
    return (
        <div className="header-content">
            <button onClick={handlerResult}>
                <i className="fal fa-poll-people"></i>
            </button>

            <div className="btn-group">
                <button onClick={handlerRefreshPage}>
                    <i className="far fa-sync-alt"></i>
                </button>
                <button onClick={handlerSettings}>
                    <i className="far fa-cog"></i>
                </button>
            </div>
        </div>
    );
};

export default ControlHeader;
