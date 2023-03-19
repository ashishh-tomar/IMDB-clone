import React, { useEffect, useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";

function Banner() {
  let [bannerMovie, setBanner] = useState("");

  useEffect(function () {
    (function () {
      axios
        .get(
          "https://api.themoviedb.org/3/trending/all/week?api_key=38a6c7172dae641e216cb2d0d30a8c94"
        )
        .then((res) => {
          //onsole.log(res.data.results[0]);
          setBanner(res.data.results[0]);
        });
    })();
  }, []);

  return (
    <>
      {bannerMovie === "" ? (
       <div className="flex justify-center">
       <Oval
          height="80"
          width="80"
          radius="9"
          color="gray"
          secondaryColor="gray"
          ariaLabel="loading"
        ></Oval>
       </div>
      ) : (
        <div
          className={"h-[80vh] md:h-[90vh] bg-center bg-cover flex items-end"}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${bannerMovie.backdrop_path})`,
          }}
        >
          <div className="text-xl md:text-3xl text-white bg-gray-900 bg-opacity-50 text-center p-3 w-full">
            {bannerMovie.name}
          </div>
        </div>
      )}
    </>
  );
}

export default Banner;
