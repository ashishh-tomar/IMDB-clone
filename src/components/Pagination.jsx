import React, {useState} from "react";

function Pagination(props){

    let {pageNum,onPrev,onNext} = props;
  
    return(
        <div className="flex justify-center my-4">
            <div className="border-2 p-2 border-r-0 rounded-l-xl cursor-pointer" onClick={onPrev}>Prev</div>
            <div className="border-2 p-2 ">{pageNum}</div>
            <div className="border-2 p-2 border-l-0 rounded-r-xl cursor-pointer" onClick={onNext}>Next</div>
        </div>
    )
}

export default Pagination;