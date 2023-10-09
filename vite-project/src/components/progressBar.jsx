import React, { useState } from "react";
import "../App.css";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    if (progress < 100) {
      setProgress(progress + 20);
    }
  };

  return (
    <div className="cajaProgresBar">
      <div className="progressBar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <button onClick={handleClick}>Avanzar al siguiente nivel</button>
    </div>
  );
};

export default ProgressBar;
