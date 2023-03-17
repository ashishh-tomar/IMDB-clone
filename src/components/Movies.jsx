import react from "react";
import image from "./bannerImg.jpg";

function Movies() {
  return (
    <div className="mt-8">
      <div className="mb-8 font-bold text-2xl text-center">Trending Movies</div>

      <div className="flex flex-wrap justify-center">
        <div className="bg-[url(http://localhost:3000/static/media/bannerImg.eace6604962719e1bcf9.jpg)] bg-center bg-cover w-[175px] h-[30vh] m-4 rounded-xl hover:scale-110 duration-300 border-4 flex items-end">
          <div className="font-bold text-white bg-gray-900 bg-opacity-50 text-center p-3 w-full rounded-b-xl">
            Avatar
          </div>
        </div>

        <div className="bg-[url(http://localhost:3000/static/media/bannerImg.eace6604962719e1bcf9.jpg)] bg-center bg-cover w-[175px] h-[30vh] m-4 rounded-xl hover:scale-110 duration-300 border-4 flex items-end">
          <div className="font-bold text-white bg-gray-900 bg-opacity-50 text-center p-3 w-full rounded-b-xl">
            Avatar
          </div>
        </div>

        <div className="bg-[url(http://localhost:3000/static/media/bannerImg.eace6604962719e1bcf9.jpg)] bg-center bg-cover w-[175px] h-[30vh] m-4 rounded-xl hover:scale-110 duration-300 border-4 flex items-end">
          <div className="font-bold text-white bg-gray-900 bg-opacity-50 text-center p-3 w-full rounded-b-xl">
            Avatar
          </div>
        </div>

        <div className="bg-[url(http://localhost:3000/static/media/bannerImg.eace6604962719e1bcf9.jpg)] bg-center bg-cover w-[175px] h-[30vh] m-4 rounded-xl hover:scale-110 duration-300 border-4 flex items-end">
          <div className="font-bold text-white bg-gray-900 bg-opacity-50 text-center p-3 w-full rounded-b-xl">
            Avatar
          </div>
        </div>

        {/* <img src={image} className="w-[175px] h-[30vh] m-4 rounded-xl hover:scale-110 duration-300" alt="" /> */}
      </div>
    </div>
  );
}

export default Movies;
