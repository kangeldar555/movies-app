const API_KEY = 'd4894135';

const searchMovies = async ( search ) => {
    if (search === '') return null; 

    try {
        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${search}`);
        const json = await response.json(); 
        const movies = json.Search;

        return movies;
    } catch (error) {
        throw new Error('Error searching movies')
    }
}

export default searchMovies;