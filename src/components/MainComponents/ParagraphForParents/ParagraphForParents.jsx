import InfoCards from './InfoCards'
import './ParagraphForParents.scss'
import boy_with_graphics from 'img/boy_with_graphics.svg'
import cardsInfo from 'utils/infoCardArray'

const ParagraphForParents = () => {
    return (
        <section className="paragraph_for_parents main_container">
            <img
                className="title_picture"
                src={boy_with_graphics}
                alt="boy with graphics"
            />
            <div className="cards_container">
                {cardsInfo.map(({ id, img, title, describe }) => (
                    <InfoCards
                        id={id}
                        img={img}
                        title={title}
                        describe={describe}
                    />
                ))}
            </div>
        </section>
    )
}
export default ParagraphForParents
