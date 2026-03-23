import styles from './About.module.css'
import element from './elements/underlining_text.module.css'

export default function About(){
    return(
        <section id="about">
            <div className={styles.container}>
                <h2 className={element.underlining_text}>Обо мне</h2>
                <p className={styles.text}>
                    Привет! Я Snejniy, разработчик с фокусом на создании чистого, эффективного кода и интуитивных пользовательских интерфейсов.
                </p>
                <p className={styles.text}>
                    Мой подход сочетает техническую экспертизу с вниманием к деталям, что позволяет создавать решения, которые не только функциональны, но и эстетически приятны.
                </p>
                <p className={styles.text}>
                    Постоянно изучаю новые технологии и методологии, чтобы оставаться в курсе последних тенденций в веб-разработке.
                </p>
            </div>
        </section>
    )
}