import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import './CallBackForm.scss'

const CallBackForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        // Здесь можно добавить логику отправки данных на сервер или обработки формы как и просили вывел в консоль
        console.log('Отправлено:', { name, email, message })
    }
    return (
        <section className="footer_callback">
            <div className="main_container">
                <div className="title_form">
                    <h3>Залишилися ще питання?</h3>
                    <p>Заповнюй форму і ми якнайшвидше зв’яжемося із тобою!</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="name_mail_container">
                        <div>
                            <h4>Ім’я</h4>
                            <TextField
                                placeholder="Іван Олегів"
                                variant="outlined"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <h4>Електронна адреса або номер телефону </h4>
                            <TextField
                                variant="outlined"
                                placeholder="bankuforkids@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                required
                            />
                        </div>
                    </div>
                    <h4>Повідомлення або запитання</h4>
                    <TextField
                        placeholder="Мене цікавить ..."
                        variant="outlined"
                        multiline
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <Button
                        className="send_form"
                        type="submit"
                        variant="contained"
                        color="error"
                    >
                        Надіслати
                    </Button>
                </form>
            </div>
        </section>
    )
}
export default CallBackForm
