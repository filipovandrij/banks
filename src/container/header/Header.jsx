import { Button } from '@mui/material'
import './Header.scss'
import logo from 'img/logo.svg'

const Header = () => {
    return (
        <header>
            <div>
                <img className="logo" src={logo} alt="banks" />
            </div>
            <nav>
                <ul className="menu">
                    <li>
                        <a href="#">Про нас</a>
                    </li>
                    <li>
                        <a href="#">Особливості</a>
                    </li>
                    <li>
                        <a href="#">Ігри</a>
                    </li>
                    <li>
                        <a href="#">Батькам</a>
                    </li>
                    <li>
                        <a href="#">Контакти</a>
                    </li>
                </ul>
            </nav>
            <div className="header_btns">
                <Button variant="outlined" color="error">
                    Увійти
                </Button>
                <Button className="try" variant="contained">
                    Спробувати
                </Button>
            </div>
        </header>
    )
}
export default Header
