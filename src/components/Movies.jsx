import react, { useEffect, useState } from "react";
import image from "./bannerImg.jpg";
import axios from "axios";
import { Oval } from "react-loader-spinner";

import Pagination from "./Pagination"



function Movies() {
  let [movies, setMovies] = useState([]);
  let [pageNum,setPage] = useState(1);
  let [hovered,setHovered] = useState("");
  let [favourites,setFavourites] = useState([]);



  useEffect(function () {

    (function () {
      axios
        .get(
          "https://api.themoviedb.org/3/trending/all/week?api_key=38a6c7172dae641e216cb2d0d30a8c94&page="+pageNum
        )
        .then((res) => {
          // console.log(res.data.results[0]);
          setMovies(res.data.results);
        });
    })();
  }, [pageNum]);



  // Pagination Handlers
  let onPrev = () =>{
      if(pageNum > 1)
      {
          setPage(pageNum-1);
      }
  }

  let onNext = () =>{
      
          setPage(pageNum+1);
  }




  // Emoji Handlers on Hover
  let showEmoji = (id)=>{
    setHovered(id);
  }

  let hideEmoji = ()=>{
    setHovered("");
  }



  // Adding movie id to favourites so the emoji shown as liked or disliked accodingly
  let addToFavourites = (id)=>{
    console.log("Liked");
    let newFav = [...favourites,id];
    setFavourites(newFav);
    console.log(favourites);
    
  }

  let removeFromFavourites = (id)=>{

    console.log("DisLiked");
    let filteredArr = favourites.filter((ele)=>{
      return ele !== id;
    })

    setFavourites(filteredArr);
    console.log(favourites);
    
  }





  // Making API Request to fetch data
  







  return (
    <div className="mt-8">
      <div className="mb-8 font-bold text-2xl text-center">Trending Movies</div>

      <div className="flex flex-wrap justify-center">
        {movies.length == 0 ? (
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
          movies.map((movie) => {
            //console.log(movie);
            return (
              <div
                key={movie.id}
                onMouseOver={()=>{showEmoji(movie.id);}}
                onMouseLeave={()=>{hideEmoji()}}
                className=" bg-center bg-cover w-[175px] h-[30vh] m-4 rounded-xl hover:scale-110 duration-300 border-4 flex items-end"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
                }}
              >

               
                <div className="p-2  bg-gray-900 bg-opacity-50 rounded-xl absolute top-2 right-2" style={{display : hovered == movie.id ? "block" : "none"}}>
                  {
                    favourites.includes(movie.id) == true ?  <div className="text-2xl cursor-pointer" onClick={()=>{removeFromFavourites(movie.id)}}>❌</div> : <div className="text-2xl cursor-pointer" onClick={()=>{addToFavourites(movie.id)}}>❤️</div>
                  }
                  
                </div>

                <div className="font-bold text-white bg-gray-900 bg-opacity-50 text-center p-3 w-full rounded-b-xl">
                  {movie.name == null ? movie.title : movie.name}
                </div>
              </div>
            );
          })
        )}
      </div>

      <Pagination pageNum={pageNum} onPrev={onPrev} onNext={onNext}></Pagination>

      {/* <img src={image} className="w-[175px] h-[30vh] m-4 rounded-xl hover:scale-110 duration-300" alt="" /> */}
    </div>
  );
}

export default Movies;
