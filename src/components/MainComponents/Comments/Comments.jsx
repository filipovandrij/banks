import comments from 'utils/commentArray'
import Comment from './Comment'
import './Comments.scss'
const Comments = () => {
    return (
        <section className="comments_container">
            <div className="main_container">
                {comments.map(({ id, img, comment, name, rating }) => (
                    <Comment
                        id={id}
                        img={img}
                        comment={comment}
                        name={name}
                        rating={rating}
                    />
                ))}
            </div>
        </section>
    )
}
export default Comments
