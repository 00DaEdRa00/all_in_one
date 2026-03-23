import styles from './Footer.module.css';

export default function Footer(){
    return(
        <footer id="footer" className={styles.footer}>
            <div className={styles.footer_simple}>
                <p>С благодарностью друзьям: @livitan & @ltltl20rr за поддержку</p>
                <p className={styles.copyright}>&copy; 2025 Snejniy</p>
            </div>
        </footer>
    )
}