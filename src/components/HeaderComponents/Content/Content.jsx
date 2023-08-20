import './Content.scss'
import { Button } from '@mui/material'
import pay_carts from 'img/pay_carts.svg'

const Content = () => {
    return (
        <div className="header_content">
            <div className="half_blocks ">
                <div className="text_content main_container">
                    <h2>Смарт-дебетова карта для дітей</h2>
                    <p>
                        Дізнайте цей чудовий шлях до фундаментальних понять
                        заощадження, витрачання та інвестування грошей
                    </p>
                    <Button className="try" variant="contained">
                        Спробувати
                    </Button>
                </div>
                <div className="img_content">
                    <img src={pay_carts} alt="master card" />
                </div>
            </div>
        </div>
    )
}
export default Content
