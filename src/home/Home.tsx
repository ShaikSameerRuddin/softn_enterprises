import React from 'react';
import '../App.css';
import { CarouselComponent } from '../customCarousel/CarouselComponent';

export const Home = () => {
  const images = [
    'https://picsum.photos/640/360?random=1',
    'https://picsum.photos/640/360?random=2',
    'https://picsum.photos/640/360?random=3',
    'https://picsum.photos/640/360?random=4',
    'https://picsum.photos/640/360?random=5',
    'https://picsum.photos/640/360?random=6',
    'https://picsum.photos/640/360?random=7',
  ];
  const removeCookies = () => {
    //removing the cookies by using expire
    document.cookie =
      'loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.reload();
  };
  return (
    <div className="App">
      <h1>Custom Carousel</h1>
      <button onClick={removeCookies}>Reload</button>
      <CarouselComponent images={images} autoScrollInterval={2000} />
    </div>
  );
};
