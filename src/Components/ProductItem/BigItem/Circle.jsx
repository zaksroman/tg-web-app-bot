import {useSwipeable} from 'react-swipeable';
import React, { useState } from 'react';
import './Circle.css'

const Circle = () => {
    const photos = ['https://appstorrent.ru/uploads/fotos/foto_90458.jpg', 'https://sun9-69.userapi.com/s/v1/ig2/gcOWJCE0-Ev3SVdrgkmyR-WuWIzpgljePQGjmaX0oq_vFTt-K-sOOUjoEdLf-VQurGL7XqheFlc_fhQMTc1PQGtV.jpg?size=200x200&quality=95&crop=0,0,841,841&ava=1', 'https://cosplay2.ru/files/453/logo.png?preview&size=537x'];
    const [currentSlide, setCurrentSlide] = useState(0);

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
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    return (
        <div className="carousel" {...handlers}>
            {currentSlide > 0 && (
                <div className="carouse-swipe-area-left" onClick={handleSwipeRight}></div>
            )}
            <img
                className="current-slide"
                src={photos[currentSlide]}
                alt="current slide"
            />
            {currentSlide < photos.length - 1 && (
                <div className="carouse-swipe-area-right" onClick={handleSwipeLeft}></div>
            )}
            {photos.length !== 1 &&
                <div className="indicators">
                {photos.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    ></div>
                ))}
            </div>}
        </div>
    );
};

export default Circle;