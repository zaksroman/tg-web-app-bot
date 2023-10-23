import Swipeble from 'react-swipeable';
import React, { useState } from 'react';

const Circle = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSwipe = (direction) => {
        if (direction === 'left') {
            setCurrentSlide(currentSlide + 1);
        } else if (direction === 'right') {
            setCurrentSlide(currentSlide - 1);
        }
    };

    return (
        <Swipeble
            onSwipedLeft={() => handleSwipe('left')}
            onSwipedRight={() => handleSwipe('right')}
        >
            <img src={photos[currentSlide]} alt="carousel" />
        </Swipeble>
    );
};


export default Circle;