import { Button } from '@mui/material'
import family from 'img/family.svg'
import './LearnMore.scss'

const LearnMore = () => {
    return (
        <section className="learn_more main_container">
            <div className="picture_family">
                <img src={family} alt="family" />
            </div>
            <div className="text_learn_more">
                <h3>
                    Цікавий і легкий банк для дітей, <br />
                    який навчає та розважає
                </h3>
                <p>
                    <span>Банки для дітей - </span>це не не тільки дитячий банк,
                    це щось в рази краще. Додаток навчає як стати незалежним і
                    розумно витрачати гроші, завдяки: трекінгу витрат, бюджету,
                    цілей із заощадженнями - і все з допомогою та менторством.
                </p>
                <Button color="error" variant="contained">
                    Дізнатися більше
                </Button>
            </div>
        </section>
    )
}
export default LearnMore
