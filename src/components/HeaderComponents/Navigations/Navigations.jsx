import { Button } from '@mui/material'
import { useState } from 'react'
import logo from 'img/logo.svg'
import MenuIcon from '@mui/icons-material/Menu'
import './Navigations.scss'

const Navigations = () => {
    const [toggleBtn, setToggleBtn] = useState(false)

    const handleShowMenu = () => {
        toggleBtn === false ? setToggleBtn(true) : setToggleBtn(false)
    }
    return (
        <div className="header_bar">
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
                <div className="header_list_mobile">
                    <Button
                        size="small"
                        variant="contained"
                        onClick={handleShowMenu}
                    >
                        <MenuIcon />
                    </Button>
                    <ul
                        style={{
                            display: toggleBtn === true ? 'block' : 'none',
                        }}
                        className="menu_mobile"
                    >
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
                </div>
            </nav>
            <div className="header_btns">
                <Button variant="outlined" color="error">
                    Увійти
                </Button>
                <Button className="try" variant="contained">
                    Спробувати
                </Button>
            </div>
        </div>
    )
}
export default Navigations
