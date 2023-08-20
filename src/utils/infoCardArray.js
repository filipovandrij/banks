import graphics from 'img/infoCardsImg/graphics.svg'
import master_card from 'img/infoCardsImg/master_card.svg'

import money from 'img/infoCardsImg/money.svg'
import phone from 'img/infoCardsImg/phone.svg'

const cardsInfo = [
    {
        id: 1,
        img: master_card,
        title: 'Безпечно витрачати',
        describe:
            'Батьки ставлять ліміт і допомагають дітям впоратися зі своїм бюджетом - тут немає овердрафту & ви навіть можете заблокувати або розблокувати картку теж.',
    },
    {
        id: 2,
        img: graphics,
        title: 'Освітня платформа',
        describe: `У додатку є 3 гри, які допомагають розібратися із темою фінансів. 
        Кожного дня - нова порада.
        Також на зв’язку завжди є ментори.`,
    },
    {
        id: 3,
        img: money,
        title: 'Волонтерити легко',
        describe: `Налаштовуйте благодійні перекази або створюйте цілі 
        у скарбничці для певної організації.`,
    },
    {
        id: 4,
        img: phone,
        title: 'Переказ коштів',
        describe: `Налаштовуйте автоматично дозвіл на оплати & перекази грошей в одну мить, заощадивши свій час та 
        час близьких.`,
    },
]

export default cardsInfo
