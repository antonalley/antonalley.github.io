import React, { useState, useEffect } from 'react';
import './LoadingComponent.css'; // Make sure to create this CSS file

const LoadingComponent = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(oldProgress => {
        const newProgress = oldProgress + 100 / 1000 * 50; // 50ms interval
        if (newProgress >= 100) {
          clearInterval(interval);
          onLoaded(); // Callback when loading is complete
        }
        return newProgress;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <div className="loading-container">
      <div className="loading-overlay">
        <div className="loading-circle">
          <div className="loading-circle-border"></div>
          <div className="loading-progress">
            {`${Math.round(progress)}%`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;
