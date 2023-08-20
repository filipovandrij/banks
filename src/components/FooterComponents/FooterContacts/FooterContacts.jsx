import './FooterContacts.scss'
import logo from 'img/logo.svg'
import facebook from 'img/facebook.svg'
import instagram from 'img/instagram.svg'
import twitter from 'img/twitter.svg'
import phone from 'img/phone.svg'
import mail from 'img/mail.svg'

const FooterContacts = () => {
    return (
        <section className="footer_contacts">
            <div className="main_container">
                <div className="logos">
                    <img src={logo} alt="banks" />
                    <div className="media">
                        <img src={facebook} alt="facebook" />
                        <img src={instagram} alt="instagram" />
                        <img src={twitter} alt="twitter" />
                    </div>
                </div>
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
                </ul>
                <div className="mail_phone">
                    <div>
                        <img src={phone} alt="#" />
                        <div className="mail_contact">
                            <h5>E-mail</h5>
                            <p>bankuforkids@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <img src={mail} alt="#" />
                        <div className="phone_contact">
                            <h5>Phone</h5>
                            <p>+38 (000) 00 00 000</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FooterContacts
