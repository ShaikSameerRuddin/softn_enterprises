import React from 'react';
import {
  StyledCarousel,
  StyledCarouselItem,
  StyledNextButton,
  StyledPrevButton,
} from './style';

type CarouselProps = {
  images: string[];
  autoScrollInterval?: number;
};

export const CarouselComponent: React.FC<CarouselProps> = (props) => {
  const { images, autoScrollInterval = 5000 } = props;
  const totalWidth: number = window.innerWidth;
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = React.useState(true);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    setIsAutoScrolling(false);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
    setIsAutoScrolling(false);
  };

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoScrolling) {
      interval = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
      }, autoScrollInterval);
    }
    return () => clearInterval(interval);
  }, [isAutoScrolling, currentIndex, images.length, autoScrollInterval]);

  return (
    <StyledCarousel
      width={totalWidth}
      height={760}
      onMouseEnter={() => setIsAutoScrolling(false)}
      onMouseLeave={() => setIsAutoScrolling(true)}
    >
      {images.map((image, index) => (
        <StyledCarouselItem
          key={index}
          src={image}
          width={totalWidth}
          height={760}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        />
      ))}
      <StyledPrevButton onClick={handlePrevClick}>&larr;</StyledPrevButton>
      <StyledNextButton onClick={handleNextClick}>&rarr;</StyledNextButton>
    </StyledCarousel>
  );
};
