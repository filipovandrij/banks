import './GamesSection.scss'
import UpperBlock from './UpperBlock'
import boy_with_botl from 'img/boy_with_botl.svg'
import happy_girl from 'img/happy_girl.svg'
import file_icon from 'img/file_icon.svg'
import { Button } from '@mui/material'

const GamesSection = () => {
    return (
        <section className="game_section main_container">
            <UpperBlock />
            <div className="lower_block">
                <div>
                    <h3>Заціни свій прогрес</h3>
                    <div className="start_game">
                        <img src={file_icon} alt="file icon" />
                        <div>
                            <p>
                                Гра, яка ефективно і цікаво дасть розуміння, як
                                рахувати свій дохід та витрати. Перші кроки
                                фінансової грамотності, які легко здобути!
                            </p>
                            <Button color="error" variant="contained">
                                Грати
                            </Button>
                        </div>
                    </div>
                </div>
                <img
                    className="positiv_boy"
                    src={boy_with_botl}
                    alt="boy with botl"
                />
                <img
                    className="positiv_girl"
                    src={happy_girl}
                    alt="happy girl"
                />
            </div>
        </section>
    )
}
export default GamesSection
