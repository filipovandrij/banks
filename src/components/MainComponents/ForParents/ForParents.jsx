import { Button } from '@mui/material'
import './ForParents.scss'
import love_family from 'img/love_family.svg'

const ForParents = () => {
    return (
        <section className="for_parents">
            <div className="main_container">
                <div className="parents_info">
                    <h3>Довідник для батьків</h3>
                    <p>
                        <span>
                            Цікавий та легкий у користуванні банк для дітей
                        </span>
                        - це найкращий вибір для ваших найрідніших. Допоможіть
                        своїм дітям дізнатися цей чудовий шлях до
                        фундаментальних понять заощадження, витрачання та
                        інвестування грошей.
                    </p>
                    <Button color="error" variant="contained">
                        Дізнатися більше
                    </Button>
                </div>
                <img
                    className="picture_family"
                    src={love_family}
                    alt="love family"
                />
            </div>
        </section>
    )
}
export default ForParents
