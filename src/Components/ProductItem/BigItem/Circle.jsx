import {useSwipeable} from 'react-swipeable';
import React, { useState } from 'react';
import './Circle.css'

const Circle = () => {
    const photos = ['https://appstorrent.ru/uploads/fotos/foto_90458.jpg', 'https://sun9-69.userapi.com/s/v1/ig2/gcOWJCE0-Ev3SVdrgkmyR-WuWIzpgljePQGjmaX0oq_vFTt-K-sOOUjoEdLf-VQurGL7XqheFlc_fhQMTc1PQGtV.jpg?size=200x200&quality=95&crop=0,0,841,841&ava=1', 'https://cdn.medal.tv/avatars/cf88c9fd261aacdca02d4e2b895fa6a0/1630530259614.png'  ]
    const [currentSlide, setCurrentSlide] = useState(0); // индекс текущей фотографии
    const [prevSlide, setPrevSlide] = useState(currentSlide);

    const handleSwipeLeft = () => {
        if (currentSlide < photos.length - 1) {
            setPrevSlide(currentSlide);
            setCurrentSlide(currentSlide + 1);
        }
    };

    const handleSwipeRight = () => {
        if (currentSlide > 0) {
            setPrevSlide(currentSlide);
            setCurrentSlide(currentSlide - 1);
        }
    };

    const handlers = useSwipeable({
        onSwipedLeft: handleSwipeLeft,
        onSwipedRight: handleSwipeRight,
        preventDefaultTouchmoveEvent: true, // предотвратить прокрутку страницы свайпом
        trackMouse: true // допустить использование мыши на компьютере
    });

    return (
        <div className="carousel" {...handlers}>
            {currentSlide > 0 && (
                <img
                    className="prev-slide"
                    src={photos[prevSlide]}
                    alt="previous slide"
                />
            )}
            <img
                className="current-slide"
                src={photos[currentSlide]}
                alt="current slide"
            />
            {currentSlide < photos.length - 1 && (
                <img
                    className="next-slide"
                    src={photos[currentSlide + 1]}
                    alt="next slide"
                />
            )}
        </div>
    );
};


export default Circle;