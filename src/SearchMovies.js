function SearchMovies () {
    return (
        <form className="search-form" onSubmit={() => {}}>
            <p>Search Movies</p>
            <input type="text" placeholder="i.e. Jurassic Park"/>
            <button type="submit">Search Movies</button>
        </form>
    )
}

export default SearchMovies;