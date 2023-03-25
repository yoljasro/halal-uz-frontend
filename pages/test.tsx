import { useState } from 'react';

interface CarouselProps {
  items: string[];
  width: string;
  height: string;
}

export const Carousel: React.FC<CarouselProps> = ({ items, width, height }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % items.length);
  };

  const handlePrevClick = () => {
    setActiveIndex((activeIndex + items.length - 1) % items.length);
  };

  return (
    <div style={{ width: width, height: height }}>
      <div style={{ display: 'flex', width: '100%', height: '100%' }}>
        {items.slice(activeIndex, activeIndex + 8).map((item, index) => (
          <div key={index} style={{ width: '12.5%', height: '100%', textAlign: 'center' }}>
            <h3>{item}</h3>
          </div>
        ))}
      </div>
      <button onClick={handlePrevClick}>Prev</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};
