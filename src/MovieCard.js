// https://image.tmdb.org/t/p/original/

import { useEffect, useState } from "react"
import Review from "./Review";

export default function MovieCard({movie}) {

    const [reviews, setReviews] = useState([]);

    const fetchReviews = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/reviews?api_key=cb77f8284dc01455ff084869c8c39736`)
        const data = await res.json();
        if (data) {
            console.log(data.results);
            setReviews(data.results);
        }
    }

    useEffect(() => {
        if (movie) {
            fetchReviews();
        }
    }, [movie])

    return (
        <div className="card">
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="card-image"/>
            <h3 className="card-title">{movie.title}</h3>
            <div className="card-subtext">Release Date: {movie.release_date}</div>
            <div className="card-subtext">Rating: {movie.vote_average}</div>
            <div className="card-overview">{movie.overview}</div>
            {reviews.slice(0, Math.min(reviews.length, 3)).map(review => <Review review={review}/>)}
        </div>
    )
}