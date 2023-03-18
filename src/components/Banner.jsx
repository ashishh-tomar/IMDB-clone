import React, { useEffect, useState } from "react";
import axios from "axios";

function Banner() {
  let [bannerMovie, setBanner] = useState("");

  useEffect(function () {
    (function () {
      axios
        .get(
          "https://api.themoviedb.org/3/trending/all/week?api_key=38a6c7172dae641e216cb2d0d30a8c94"
        )
        .then((res) => {
          console.log(res.data.results[0]);
          setBanner(res.data.results[0]);
        });
    })();
  }, []);

  return (
    <>
      {
        bannerMovie =="" ? <h1>Loading...</h1> :
      <div className={`bg-[url(https://image.tmdb.org/t/p/original${bannerMovie.backdrop_path})] h-[80vh] md:h-[90vh] bg-center bg-cover flex items-end`}>
        console.log(bannerMovie.backdrop_path)
        <div className="text-xl md:text-3xl text-white bg-gray-900 bg-opacity-50 text-center p-3 w-full">
          {bannerMovie.name}
          
        </div>
      </div>
      }
    </>
  );
}

export default Banner;
