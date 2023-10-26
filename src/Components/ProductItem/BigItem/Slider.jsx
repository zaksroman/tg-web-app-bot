import {useSwipeable} from 'react-swipeable';
import React, {useEffect, useState} from 'react';
import styles from './Slider.module.css'

const SWIPE_ANGLE_THRESHOLD = Math.tan(45 * Math.PI/180)

const Slider = () => {
    const photos = ['https://appstorrent.ru/uploads/fotos/foto_90458.jpg', 'https://sun9-69.userapi.com/s/v1/ig2/gcOWJCE0-Ev3SVdrgkmyR-WuWIzpgljePQGjmaX0oq_vFTt-K-sOOUjoEdLf-VQurGL7XqheFlc_fhQMTc1PQGtV.jpg?size=200x200&quality=95&crop=0,0,841,841&ava=1', 'https://cosplay2.ru/files/453/logo.png?preview&size=537x'];
    const [currentSlide, setCurrentSlide] = useState(0)

    const handleSwipeLeft = () => {
        // if (currentSlide < photos.length - 1) {
        //     setCurrentSlide(currentSlide + 1);
        // }
        setCurrentSlide((currentSlide + 1) % photos.length);
    }

    const handleSwipeRight = () => {
        // if (currentSlide > 0) {
        //     setCurrentSlide((currentSlide - 1))
        // }
        setCurrentSlide((currentSlide - 1 + photos.length) % photos.length)
    }

    const handlers = useSwipeable({
        onSwipedLeft: handleSwipeLeft,
        onSwipedRight: handleSwipeRight,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    })

    // useEffect(() => {
    //     const timer = setInterval(handleSwipeLeft, 2000);
    //     return () => clearInterval(timer);
    // }, [])

    return (
        <div className={styles.carousel} {...handlers}>
            {currentSlide > 0 && (
                <div className={styles.carouseswipearealeft} onClick={handleSwipeRight}></div>
            )}
            <img
                className={styles.currentslide}
                src={photos[currentSlide]}
                alt="current slide"
            />
            {currentSlide < photos.length - 1 && (
                <div className={styles.carouseswipearearight} onClick={handleSwipeLeft}></div>
            )}
            {photos.length !== 1 &&
                <div className={styles.indicators}>
                {photos.map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    ></div>
                ))}
            </div>}
        </div>
    )
}

export default Slider;