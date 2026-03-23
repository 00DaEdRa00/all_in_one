import style from './Skills.module.css'
import element from './elements/underlining_text.module.css'

export default function Skills(){
    return(
        <section id="skills">
            <div className={style.container}>
                <h2 className={element.underlining_text}>
                    Навыки
                </h2>
                <div className={style.skill_grid}>
                    <div className={style.skill_item}>Python</div>
                    <div className={style.skill_item}>HTML5</div>
                    <div className={style.skill_item}>CSS3</div>
                    <div className={style.skill_item}>JavaScript</div>
                    <div className={style.skill_item}>React</div>
                </div>
            </div>
        </section>
    )
}