import React from 'react';
import'./Carousel.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useSelector} from "react-redux";
import CarouselItem from './CarouselItem';

const Carousel = () => {
    const products = useSelector(state => state.products)
    const addedItems = useSelector(state => state.addedItems);
    const remainingItems = (products, addedItems) => {
        return  products.filter(a1 => !addedItems.some(a2 => a2.title === a1.title))
    }

    const settings = {
        dots: true, // Показывать индикаторы слайдов
        infinite: true, // Бесконечная прокрутка
        slidesToShow: 4, // Количество слайдов, отображаемых одновременно
        slidesToScroll: 1, // Количество слайдов, прокручиваемых за одно нажатие
        swipeToSlide: true, // Включить свайп для прокрутки
        arrows: true, // Показывать кнопки прокрутки слайдов
        responsive: [ // Адаптивность карусели для разных разрешений
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div>
            <Slider {...settings}>
                    {remainingItems(products, addedItems)?.map( item => {
                        return <CarouselItem item={item}/>
                    })}
            </Slider>
        </div>
    );
};

export default Carousel;