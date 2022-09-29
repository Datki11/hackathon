import { useState } from "react";
import MovieCard from "./MovieCard";

export default function SearchMovies() {

    const [searchInput, setSearchInput] = useState('');

    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();

        console.log(process.env.MOVIE_SEARCH_KEY);
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=cb77f8284dc01455ff084869c8c39736&query=${searchInput}`
    
        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label">Movie Name</label>
                <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="input" type="text" placeholder="i.e. Jurassic Park"/>
                <button className="button" type="submit">Search</button>
            </form>
            {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </>
    )
}