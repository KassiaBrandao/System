import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import './styles.css';

const WindowComponent = ({
  children,
  title,
  isOpen,
  onClose,
  onMaximize,
  defaultSize = { width: 500, height: 300 },
  defaultPosition = { x: 100, y: 100 }
}) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [size, setSize] = useState(defaultSize);
  const [position, setPosition] = useState(defaultPosition);

  const toggleMaximize = () => {
    const newMaximizedState = !isMaximized;
    setIsMaximized(newMaximizedState);
    onMaximize(newMaximizedState);
    if (newMaximizedState) {
      setSize({ width: window.innerWidth, height: window.innerHeight });
      setPosition({ x: 0, y: 0 });
    } else {
      setSize(defaultSize);
      setPosition(defaultPosition);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Rnd
      size={size}
      position={position}
      onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
      onResizeStop={(e, direction, ref, delta, position) => {
        setSize({ width: ref.offsetWidth, height: ref.offsetHeight });
        setPosition(position);
      }}
      disableDragging={isMaximized}
      enableResizing={!isMaximized}
      className="window"
      style={{ display: 'block' }}
    >
      <div className="window-titlebar">
        <span>{title}</span>
        <div className="window-controls">
          <button onClick={onClose}></button>
          <button></button>
          <button onClick={toggleMaximize}></button>
        </div>
      </div>
      <div className="window-content">
        {children}
      </div>
    </Rnd>
  );
};

export default WindowComponent;
