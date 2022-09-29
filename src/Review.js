export default function Review({review}) {
    return (
        <div className="review">
            <div className="review-header">
                <img src={`https://image.tmdb.org/t/p/original/${review.author_details.avatar_path}`} className="review-image"/>
                <div>{review.author}</div>
            </div>
            <div>Created: {review.created_at}</div>
            <div>{review.content}</div>
        </div>
    )
}