import './App.css';
import {useState } from 'react';
import Movies from './components/Movies';
import useMovies from './hooks/useMovies';

function App() {

  const [search, setSearch] = useState('');
  const { movies, getMovies } = useMovies(search);

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies();
  }

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div className='app'>
      <header>
        <h1>Buscador de películas</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} placeholder='Avengers, Start Wars, The Matrix...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App
