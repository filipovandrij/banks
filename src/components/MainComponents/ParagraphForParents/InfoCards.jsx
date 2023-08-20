import Card from '@mui/material/Card'

const InfoCards = ({ id, img, title, describe }) => {
    return (
        <Card key={id} className="info_card">
            <img src={img} alt={img} />
            <h3>{title}</h3>
            <p>{describe}</p>
        </Card>
    )
}
export default InfoCards
