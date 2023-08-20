import Card from '@mui/material/Card'

const InfoCards = ({ img, title, describe }) => {
    return (
        <Card className="info_card">
            <img src={img} alt={img} />
            <h3>{title}</h3>
            <p>{describe}</p>
        </Card>
    )
}
export default InfoCards
