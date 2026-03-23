import { useState, useEffect, useCallback, useRef } from 'react';

export const useCarousel = (totalSlides, autoPlayInterval = 7000) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalRef = useRef(null);

    const startTimer = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        if (autoPlayInterval) {
            intervalRef.current = setInterval(() => {
                setCurrentSlide(prev => (prev + 1 >= totalSlides ? 0 : prev + 1));
            }, autoPlayInterval);
        }
    }, [autoPlayInterval, totalSlides]);

    const showSlide = (index) => {
        setCurrentSlide(index);
        startTimer();
    };

    const nextSlide = () => {
        setCurrentSlide(prev => (prev + 1 >= totalSlides ? 0 : prev + 1));
        startTimer();
    };

    const prevSlide = () => {
        setCurrentSlide(prev => (prev - 1 < 0 ? totalSlides - 1 : prev - 1));
        startTimer();
    };

    useEffect(() => {
        startTimer();
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [startTimer]);

    return {
        currentSlide,
        showSlide,
        nextSlide,
        prevSlide
    };
};