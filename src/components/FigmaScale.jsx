import { useEffect, useRef, useState } from 'react';

const DESIGN_WIDTH = 1556.8699951171875;

export default function FigmaScale({ height, children }) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        setScale(containerRef.current.offsetWidth / DESIGN_WIDTH);
      }
    };
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: height * scale,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: `${DESIGN_WIDTH}px`,
          height: `${height}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {children}
      </div>
    </div>
  );
}

export { DESIGN_WIDTH };
