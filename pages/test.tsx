import React, { useState } from 'react';
import Carousel from 'nuka-carousel';

interface ImageProps {
  src: string;
  alt: string;
}

const images: ImageProps[] = [
  {
    src: 'https://picsum.photos/200/200',
    alt: 'Image 1',
  },
  {
    src: 'https://example.com/image2.jpg',
    alt: 'Image 2',
  },
  {
    src: 'https://example.com/image3.jpg',
    alt: 'Image 3',
  },
];

const Test: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlideChange = (newSlideIndex: number) => {
    setSlideIndex(newSlideIndex);
  };

  const renderBottomCenterControls = ({
    currentSlide,
    slideCount,
    goToSlide,
  }: any) => (
    <ul style={{ margin: '0', padding: '0' }}>
      {images.map((_, index) => (
        <li
          key={index}
          style={{
            display: 'inline-block',
            width: '10px',
            height: '10px',
            margin: '0 5px',
            borderRadius: '50%',
            backgroundColor: currentSlide === index ? '#fff' : 'rgba(0,0,0,.2)',
            cursor: 'pointer',
          }}
          onClick={() => goToSlide(index)}
        ></li>
      ))}
    </ul>
  );

  return (
    <Carousel
      autoplay={true}
      autoplayInterval={3000}
      wrapAround={true}
      slideIndex={slideIndex}
      afterSlide={handleSlideChange}
      renderBottomCenterControls={renderBottomCenterControls}
    >
      {images.map((image) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          style={{ margin: '0 5px' }}
        />
      ))}
    </Carousel>
  );
};

export default Test;
