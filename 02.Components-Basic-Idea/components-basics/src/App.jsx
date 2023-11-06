import MovieList from './component/MovieList'
import movies from './assets/movies'
import './App.css'

function App() {

  return (
    <div>
      <h1>My first dynamic React Application!</h1>
    
      <MovieList movies={movies} headingText="Movie List"/>
    </div>
  )
}

export default App
