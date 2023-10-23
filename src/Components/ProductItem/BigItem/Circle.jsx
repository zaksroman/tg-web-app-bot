import {useSwipeable} from 'react-swipeable';
import React, { useState } from 'react';

const Circle = () => {
    const photos = ['https://appstorrent.ru/uploads/fotos/foto_90458.jpg', 'https://sun9-69.userapi.com/s/v1/ig2/gcOWJCE0-Ev3SVdrgkmyR-WuWIzpgljePQGjmaX0oq_vFTt-K-sOOUjoEdLf-VQurGL7XqheFlc_fhQMTc1PQGtV.jpg?size=200x200&quality=95&crop=0,0,841,841&ava=1'  ]
    const [currentSlide, setCurrentSlide] = useState(0); // индекс текущей фотографии


    const handleSwipeLeft = () => {
        if (currentSlide < photos.length - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const handleSwipeRight = () => {
        if (currentSlide > 0) {
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
        <div {...handlers}>
            <img src={photos[currentSlide]} alt="carousel" />
        </div>
    );
};


export default Circle;