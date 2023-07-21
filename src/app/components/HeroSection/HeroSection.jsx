import Link from "next/link";

const HeroSection = ({title, img}) => {
  return (
    <div className="hero min-h-[500px] bg-base-200 pt-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={img}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link href='/movies'>
            <button  className="btn btn-primary">Explore Movies</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
