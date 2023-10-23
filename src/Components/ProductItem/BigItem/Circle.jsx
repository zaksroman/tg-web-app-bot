import Swipeble from 'react-swipeable';
import React, { useState } from 'react';

const photos = ['https://gas-kvas.com/uploads/posts/2023-02/1675489758_gas-kvas-com-p-izobrazheniya-i-kartinki-na-fonovii-risuno-41.jpg', 'https://s1.1zoom.ru/big3/474/354282-admin.jpg'  ]
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