import { useState, useEffect } from 'react';
import styles from '../elements/ScrollToTop.module.css'

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {

        setIsAnimating(true);
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        

        setTimeout(() => {
            setIsAnimating(false);
        }, 300);
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
            className={`${styles.scrollToTop} ${isVisible ? styles.visible : ''} ${isAnimating ? styles.animating : ''}`}
            onClick={scrollToTop}
            aria-label="Наверх"
        >
            ↑
        </button>
    );
};