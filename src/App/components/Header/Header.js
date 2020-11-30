import React from 'react';

import './Header.scss';

const { remote } = window.require('electron');
const mainWindow = remote.getCurrentWindow();

const Header = ({ name }) => {
    const handleMinimizeWindow = () => {
        mainWindow.hide();
    };

    return (
        <div className="header">
            <div className="top-bar">
                <div className="title">
                    <i className="fal fa-compact-disc" />
                    {name}
                </div>
                <div>
                    <button
                        className="btn-window"
                        onClick={handleMinimizeWindow}
                    >
                        <i className="fal fa-times-square" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
