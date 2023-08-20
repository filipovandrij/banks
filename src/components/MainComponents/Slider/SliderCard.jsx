const SliderCard = ({ img, title, describe }) => {
    return (
        <div className="swipe_card">
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{describe}</p>
        </div>
    )
}
export default SliderCard
