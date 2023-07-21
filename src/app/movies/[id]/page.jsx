import Image from "next/image";

const page = async({params}) => {

    const id = params.id




    console.log(id);
    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=80087548&lang=en`
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
        "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
      },
    };
  
    const response = await fetch(url, options);
    const result = await response.json();
    const main_data = result.titles;
console.log( "ekdom notun ", main_data);
    return (
        <section>
            <div className="card sm:card-side bg-gray-900 shadow-xl p-2 ">
      <figure>
        <Image
        width={300}
        height={300}
            className=""
        //   src={backgroundImage.url}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
      </div>
    </div>
        </section>
    );
};

export default page;