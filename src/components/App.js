import React from 'react';
import Tooltip from './Tooltip';

function App() {
  return (
    <div>
      <div className="app-container">
        <Tooltip text="This is a tooltip">
          <h1 className="tooltip-p">Hover over me</h1>
        </Tooltip>

        <Tooltip text="This is another tooltip">
          <p className="tooltip-text">Hover over me to see another tooltip</p>
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
