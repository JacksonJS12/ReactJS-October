import MovieList from './component/MovieList'
import Movies from './assets/movies'
import './App.css'

const movies = [
  {
    title: 'The Matrix',
    description: 'Description here'
  },
  {
    title: 'Man of Steal',
    description: 'Description here'
  },
  {
    title: 'Harry Potter',
    description: 'Description here'
  },
]

function App() {

  return (
    <div>
      <h1>My first dynamic React Application!</h1>
    
      <MovieList movies={movies} headingText="Movie List"/>
    </div>
  )
}

export default App
