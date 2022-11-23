import React, {useState, useEffect,  useCallback} from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  

  const fetchMoviesHanlder = useCallback(async ()=>{
    setIsLoading(true)
    setError(null)

   
    try{
      const response = await fetch('https://react-http-256da-default-rtdb.firebaseio.com/movies.json')
      if(!response.ok){
        throw new Error("something went wrong")
      }
      const data = await response.json()

     
  
      const loadMovies = []

      for (const key in data){
        loadMovies.push({
          id:key,
          title:data[key].title,
          openingText:data[key].openingText,
          releaseDate:data[key].releaseDate
        })
      }
  
  
      //  const transformedMovies = data.results.map((movieData)=>{
      //    return {
      //      id: movieData.episode_id,
      //      title:movieData.title,
      //      openingText:movieData.opening_crawl,
      //      releaseDate:movieData.release_dat
           
      //    }
      //  })
       setMovies(loadMovies)
    
    }catch(error){
      setError(error.message)
      
      
    }   
    setIsLoading(false)
    }, [])

    useEffect(()=>{
      fetchMoviesHanlder()
        
    }, [fetchMoviesHanlder])

    async function addMoviesHandeler(movie){
      const response = await fetch('https://react-http-256da-default-rtdb.firebaseio.com/movies.json', {
        method:'POST',
        body:JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log(data)
    }

    let content = <p>Found No Movies...</p>

    if(movies.length > 0){
      content = <MoviesList movies={movies}/>
    }

    if(error){
      content = <p>{error}</p>
    }
    if (isLoading){
      content = <p>...loading</p>
    }
      
      


  return (
    <React.Fragment>
      <section>
      <AddMovie onAddMovie={ addMoviesHandeler} />
        
      </section>
      <section>
        <button onClick={fetchMoviesHanlder}>Fetch Movies</button>
      </section>
      <section>
        {/* {!isLoading && movies.length > 0  && }
        {!isLoading && movies.length === 0 && !error &&  <p>No movies found</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>...loading data</p>} */}
      {content}
      
      </section>
    </React.Fragment>
  );
}

export default App;
