import {useSwipeable} from 'react-swipeable';
import React, {useState} from 'react';
import styles from './Slider.module.css'

const Slider = ({product}) => {
    const photos = [
        'https://baon.ru/public/shopcatalog-resize/card/baon/B1722512/WHITE/FRONT.jpg',
        'https://baon.ru/public/shopcatalog-resize/card/baon/B1722528/ARGANNUT/1.jpg'
    ]
    // const photos = product.images.map(imageName => `/api/uploads/${imageName}`)
    const [currentSlide, setCurrentSlide] = useState(0)

    const handleSwipeLeft = () => {
        setCurrentSlide((currentSlide + 1) % photos.length);
    }

    const handleSwipeRight = () => {
        setCurrentSlide((currentSlide - 1 + photos.length) % photos.length)
    }

    const handlers = useSwipeable({
        onSwipedLeft: handleSwipeLeft,
        onSwipedRight: handleSwipeRight,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    })

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