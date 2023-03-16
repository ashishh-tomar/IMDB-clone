import react from "react";
import image from "./bannerImg.jpg";

function Movies() {
  return (
    <div className="mt-8">
      <div className="mb-8 font-bold text-2xl text-center">Trending Movies</div>
      <div className="flex flex-wrap justify-center">
        <img src={image} className="w-[175px] h-[30vh] m-4 rounded-xl hover:scale-110 duration-300" alt="" />
        <img src={image} className="w-[175px] h-[30vh] m-4 rounded-xl hover:scale-110 duration-300" alt="" />
        <img src={image} className="w-[175px] h-[30vh] m-4 rounded-xl hover:scale-110 duration-300" alt="" />
        <img src={image} className="w-[175px] h-[30vh] m-4 rounded-xl hover:scale-110 duration-300" alt="" />
        <img src={image} className="w-[175px] h-[30vh] m-4 rounded-xl hover:scale-110 duration-300" alt="" />
        <img src={image} className="w-[175px] h-[30vh] m-4 rounded-xl hover:scale-110 duration-300" alt="" />
      </div>
    </div>
  );
}

export default Movies;
