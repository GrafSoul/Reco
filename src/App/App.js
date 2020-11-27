import React, { Component } from 'react';

import MediaRecorder from './components/MediaRecorder/MediaRecorder';

import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <MediaRecorder />
            </div>
        );
    }
}

export default App;
