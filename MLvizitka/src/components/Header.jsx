import { useState } from 'react';
import styles from './Header.module.css';

/* немного отошёл от изначальной концепции пихать в разные файлы, но тут маленький скрипт...*/
export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const scrollToHero = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        window.history.pushState(null, null, ' ');

        closeMenu();
    };

    const renderAnimatedLogo = () => {
        const letters = 'Snejniy'.split('');
        return letters.map((letter, index) => (
            <span 
                key={index}
                className={styles.logoLetter}
                style={{
                    animationDelay: `${index * 0.1}s`,
                    display: 'inline-block'
                }}
            >
                {letter}
            </span>
        ));
    };

    return(
      <header className={styles.header}>
        
        <div className={styles.logo} onClick={scrollToHero}>
            {renderAnimatedLogo()}
        </div>
        
        <button 
            className={`${styles.burger} ${isMenuOpen ? styles.burger_active : ''}`}
            onClick={toggleMenu}
            aria-label="Открыть меню"
        >
            <span></span>
            <span></span>
            <span></span>
        </button>

        <nav className={`${styles.menu} ${isMenuOpen ? styles.menu_active : ''}`}>
          <a href="#hero" onClick={closeMenu}>Главная</a>
          <a href="#about" onClick={closeMenu}>Обо мне</a>
          <a href="#skills" onClick={closeMenu}>Навыки</a>
          <a href="#portfolio" onClick={closeMenu}>Портфолио</a>
          <a href="#contacts" onClick={closeMenu}>Контакты</a>
        </nav>

        {isMenuOpen && (
            <div className={styles.overlay} onClick={closeMenu}></div>
        )}
      </header>
    )
}