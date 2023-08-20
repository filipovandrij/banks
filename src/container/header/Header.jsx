import { Button } from '@mui/material'
import './Header.scss'
import Navigations from 'components/HeaderComponents/Navigations/Navigations'
import Content from 'components/HeaderComponents/Content/Content'

const Header = () => {
    return (
        <header>
            <div className="main_container">
                <Navigations />
            </div>
            <Content />
        </header>
    )
}
export default Header
