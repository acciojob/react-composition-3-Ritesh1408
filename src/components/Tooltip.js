import React, { useState } from 'react';
import '../styles/App.css';

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      <span className={`tooltiptext ${visible ? 'visible' : ''}`}>
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
