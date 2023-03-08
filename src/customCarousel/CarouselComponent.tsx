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

  //This function is used to handle the "previous" button click in a slideshow or carousel. It updates the current index to display the previous image in the array of images being shown.
  const handlePrevClick = () => {
    //The formula used to calculate the new index value ensures that if the current index is 0, it wraps around to the last image in the array (hence the "+ images.length" term).
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);

    //scrolling of the slideshow should be paused when the user interacts with it
    setIsAutoScrolling(false);
  };
  //This function is used to handle the "next" button click in a slideshow or carousel. It updates the current index to display the next image in the array of images being shown.
  const handleNextClick = () => {
    //The formula used to calculate the new index value ensures that if the current index is already at the last image in the array, it wraps around to the first image (hence the "% images.length" term).
    setCurrentIndex((currentIndex + 1) % images.length);
    //scrolling of the slideshow should be paused when the user interacts with it
    setIsAutoScrolling(false);
  };

  React.useEffect(() => {
    //This initializes a variable to hold a reference to the setInterval() function so that it can be cleared later.
    let interval: NodeJS.Timeout;
    if (isAutoScrolling) {
      interval = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
      }, autoScrollInterval);
    }
    //This returns a cleanup function that clears the interval when the component is unmounted or when the "isAutoScrolling" state is set to false.
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
