import MovieList from './component/MovieList'
import Timer from './component/Timer'
import movies from './assets/movies'
import Counter from './component/Counter'
import './App.css'

function App() {

  return (
    <div>
      <h1>My first dynamic React Application!</h1>

      <Counter />
    
      <Timer startTime={5}/>    

      <MovieList movies={movies} headingText="Movie List"/>
    </div>
  )
}

export default App
