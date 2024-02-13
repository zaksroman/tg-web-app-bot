import {useSwipeable} from 'react-swipeable';
import React, {useState} from 'react';
import styles from './Slider.module.css'
import {imgDataApi} from "../../Variables";

const Slider = ({product}) => {
    // const photos = [
    //     'https://cdn-ru.bitrix24.ru/b5909725/landing/b9b/b9bd86928228ab172f0f8bbc40af4247/IMG_1261_1x.jpg',
    //     'https://cdn-ru.bitrix24.ru/b5909725/landing/cc2/cc2149a4307557e61eab2c43cfb1dca1/IMG_1302_1x.jpg'
    // ]
    const photos = product.images.map(imageName => imgDataApi + imageName)
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