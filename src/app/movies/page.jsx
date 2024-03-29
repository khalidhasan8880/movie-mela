
import MovieCard from "../components/MovieCard/MovieCard";



const MovieComponent = async () => {

  const url = process.env.URL
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
  
  const response = await fetch(url, options);
    const result = await response.json();

  return (
    <section>
      <h2>Movies</h2>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 flex-wrap">
        {result?.titles?.map((movie) => (
        <h1 key={movie.jawSummary.id}>hiiiiiii</h1>
      ))}
      {result?.titles?.map((movie) => (
        <MovieCard key={movie.jawSummary.id} movie={movie.jawSummary}></MovieCard>
      ))}
      </div>
    </section>
  );
};

export default MovieComponent;


