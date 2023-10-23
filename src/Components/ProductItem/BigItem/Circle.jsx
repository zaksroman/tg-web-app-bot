import {useSwipeable} from 'react-swipeable';
import React, { useState } from 'react';

const Circle = () => {
    const photos = ['https://gas-kvas.com/uploads/posts/2023-02/1675489758_gas-kvas-com-p-izobrazheniya-i-kartinki-na-fonovii-risuno-41.jpg', 'https://s1.1zoom.ru/big3/474/354282-admin.jpg'  ]
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