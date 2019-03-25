import React from 'react';

import Swiper from 'react-id-swiper';
import { Navigation } from 'swiper/dist/js/swiper.esm';

import './Carousel.css';


const Carousel = (props) => {
  console.log(props);
  const params = {
      slidesPerView: 7,
      spaceBetween: 14,
      loop: true,
      breakpoints: {
        1024: {
          slidesPerView: 5
        },
        768: {
          slidesPerView: 3
        },
        640: {
          slidesPerView: 2
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      },
      modules: [Navigation],
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      renderPrevButton: () => <div className="swiper-button-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 44"><path d="M0,22L22,0l2.1,2.1L4.2,22l19.9,19.9L22,44L0,22L0,22L0,22z" /></svg></div>,
      renderNextButton: () => <div className="swiper-button-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 44"><path d="M27,22L27,22L5,44l-2.1-2.1L22.8,22L2.9,2.1L5,0L27,22L27,22z" /></svg></div>
    };

    const divs = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  return(
  	<div className="carousel-container wow fadeIn" data-wow-duration="3s">
  	<h2 className="swiper-container__title">Popular</h2>
    <Swiper {...params}>
      {props.popularMovies.map(movie => (
      	<div key={movie.id} className="movie-card">
	      	<img alt="movie" className="swiper-slide__image" src="https://image.tmdb.org/t/p/w154/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg" />
	      	<h3 className="swiper-slide__title">{movie.title}</h3>
	      	<p className="swiper-slide-rating">
	        <svg className="swiper-slide-rating__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
	        <path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"/></svg>
	        4.5
		</p>
      	</div>
      	))}  
    </Swiper>
    <hr className="carousel-container__separator" />
    </div>
  );

}

export default Carousel;