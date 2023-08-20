import { Box, Rating } from '@mui/material'

const Comment = ({ id, img, comment, name, rating }) => {
    return (
        <div className="comment" key={id}>
            <img src={img} alt={img} />
            <p>{comment}</p>
            <div className="name_block">
                <h3>{name}</h3>
                <Box
                    sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Rating value={rating} readOnly precision={0.5} />
                </Box>
            </div>
        </div>
    )
}
export default Comment
