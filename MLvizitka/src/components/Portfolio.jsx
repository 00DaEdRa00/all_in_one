import { useCarousel } from './scripts/carousel'
import style from './Portfolio.module.css'
import element from './elements/underlining_text.module.css'

export default function Portfolio(){
    const totalSlides = 3;
     const { currentSlide, showSlide, nextSlide, prevSlide } = useCarousel(totalSlides);

    return(
        <section id="portfolio" className={style.portfolio}>
            <div className={style.container}>
                <h2 className={element.underlining_text}>Портфолио</h2>
            </div>
            <div className={style.portfolio_container}>
                <div className={style.portfolio_carousel}>
                    <div className={`${style.portfolio_item} ${currentSlide === 0 ? style.active : ''}`}>
                        <div className={style.portfolio_img}>
                            <img 
                                src="/icons/wordle.png"
                                alt="Бот-расписание"
                                className={style.portfolio_image}/>
                        </div>
                        <div className={style.portfolio_content}>
                            <h1>Wordle</h1>
                            <p>Простая оффлайн игра, созданная с целью понятия базовых основ ООП</p>
                            <p>
                                <strong>Технологии: </strong>
                                Python, flet
                            </p>
                        </div>
                    </div>
                    <div className={`${style.portfolio_item} ${currentSlide === 1 ? style.active : ''}`}>
                        <div className={style.portfolio_img}>         
                                <img 
                                src="/icons/tgbot.png"
                                alt="Бот-расписание"
                                className={style.portfolio_image}/>
                        </div>
                        <div className={style.portfolio_content}>
                            <h1>Бот-расписание</h1>
                            <p>Бот, который показывает расписание на 5 учебных дней вперёд, синхронизируясь с сервером ежечасно!</p>
                            <p>
                                <strong>Технологии: </strong>
                                Python, aiogram
                            </p>
                        </div>
                    </div>
                    <div className={`${style.portfolio_item} ${currentSlide === 2 ? style.active : ''}`}>
                        <div className={style.portfolio_img}>         
                                <img 
                                src="/icons/vopros.jpg"
                                alt="?"
                                className={style.portfolio_image}/>
                        </div>
                        <div className={style.portfolio_content}>
                            <h1>В разработке</h1>
                            <p>WEB приложение для приглашения...</p>
                            <p>
                                <strong>Технологии: </strong>
                                Python, aiogram, mysql, React, ???
                            </p>
                        </div>
                    </div>
                </div>
                
                <button 
                    className={`${style.carousel_btn} ${style.carousel_btn_prev}`}
                    onClick={prevSlide}
                >
                    ‹
                </button> 
                <button 
                    className={`${style.carousel_btn} ${style.carousel_btn_next}`}
                    onClick={nextSlide}
                >
                    ›
                </button>
                
                 <div className={style.carousel_dots}>
                    {[...Array(totalSlides)].map((_, index) => (
                        <div 
                            key={index}
                            className={`${style.carousel_dot} ${currentSlide === index ? style.active : ''}`}
                            onClick={() => showSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}