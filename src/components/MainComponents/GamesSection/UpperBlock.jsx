import { Button } from '@mui/material'
import heart from 'img/heart.svg'
import comp_icon from 'img/comp_icon.svg'

const UpperBlock = () => {
    return (
        <div className="upper_block">
            <div className="green_block">
                <h3>Онлайн шопінг</h3>
                <div className="start_game">
                    <img src={heart} alt="heart" />
                    <div>
                        <p>
                            Спробуй заробити гроші і піти на свій найбільш
                            очікуваний шопінг. А що ти купиш першим?
                        </p>
                        <Button color="error" variant="contained">
                            Грати
                        </Button>
                    </div>
                </div>
            </div>
            <div className="pink_block">
                <h3>Весела свинка</h3>
                <div className="start_game">
                    <img src={comp_icon} alt="comp icon" />
                    <div>
                        <p>
                            Заощаджуй, збирай гроші, а потім без вагань вкладай
                            їх у свій бізнес-план або повторюй шлях відомих
                            людей!
                        </p>
                        <Button color="error" variant="contained">
                            Грати
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UpperBlock
