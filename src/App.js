import React, { useEffect, useRef } from 'react';
import { saveCanvas, removeCanvas, startGame } from './canvas';

export default function App() {
  const canvas = useRef(null);

  useEffect(() => {
    saveCanvas(canvas.current);
    startGame();
    return () => {
      removeCanvas();
    };
  }, []);

  return (
    <div>
      1234
      <div>
        <canvas ref={canvas} width="500" height="500"></canvas>
      </div>
    </div>
  );
}
