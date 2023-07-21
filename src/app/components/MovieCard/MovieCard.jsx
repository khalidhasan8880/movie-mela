import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ movie }) => {
    const {backgroundImage, id} = movie
    console.log(movie);
  return (
    <div className="card sm:card-side bg-gray-900 shadow-xl p-2 ">
      <figure>
        <Image
        width={300}
        height={300}
            className=""
          src={backgroundImage.url}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <Link href={`/movies/${id}`}><button className="btn btn-primary">Watch</button></Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
