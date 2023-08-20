import './FAQ.scss'
import FAQ_img from 'img/FAQ_img.svg'

const FAQ = () => {
    return (
        <section className="FAQ main_container">
            <div className="faq_title ">
                <img src={FAQ_img} alt="FAQ" />
                <h3>Найчастіші запитання</h3>
            </div>
            <ul className="faq_list">
                <li>
                    <span>
                        З якого віку можна користуватися Банками для дітей?
                    </span>
                    <span>+</span>
                </li>
                <li>
                    <span>
                        Скільки коштує дебетова карта з Банку для дітей?
                    </span>
                    <span>+</span>
                </li>
                <li>
                    <span>
                        Як мені підібрати праильну карту для своєї дитини?
                    </span>
                    <span>+</span>
                </li>
                <li>
                    <span>
                        Які саме інтерактивні варіанти фінансової освіти ви
                        пропонуєте?
                    </span>
                    <span>+</span>
                </li>
                <li>
                    <span>
                        Для якої вікової категорії найбільше підходить Банк для
                        дітей?
                    </span>
                    <span>+</span>
                </li>
            </ul>
        </section>
    )
}
export default FAQ
