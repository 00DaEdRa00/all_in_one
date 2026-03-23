
import { useHeroKeyboard } from './scripts/HeroButtons';
import { useTypingAnimation } from './scripts/typingText';
import styles from './Hero.module.css';
import element from './elements/underlining_text.module.css'


export default function Hero(){
    const scrollToSection = useHeroKeyboard();
    useTypingAnimation();

    return(
        <section id="hero" className={styles.hero}>
            <div className={styles.terminal}>
                <h1>Snejniy!</h1>
                <h2 className={element.underlining_text}>Python | Tg dev</h2>
                <div className={styles.description}>
                    В мире утечек информации только анонимность может дать покой
                </div>
                <div className={styles.nav_buttons}>
                    <span onClick={() => scrollToSection('about')}>[F1] Обо мне</span>
                    <span onClick={() => scrollToSection('skills')}>[F2] Навыки</span>
                    <span onClick={() => scrollToSection('portfolio')}>[F3] Проекты</span>
                    <span onClick={() => scrollToSection('contacts')}>[F4] Контакты</span>
                </div>
                <div className={styles.prompt}>
                    root@snejniy:~# 
                    <span className={styles.typing_text} id='typing_text'></span>
                    <span className={styles.blink}>_</span>
                </div>  
            </div>
        </section>
    )
}