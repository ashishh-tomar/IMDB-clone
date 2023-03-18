import React, {useState} from "react";

function Pagination(){

    let [pageNum,setPage] = useState(1);

    let onPrev = () =>{
        if(pageNum > 1)
        {
            setPage(pageNum-1);
        }
    }

    let onNext = () =>{
        
            setPage(pageNum+1);
    }

    return(
        <div className="flex justify-center my-4">
            <div className="border-2 p-2 border-r-0 rounded-l-xl cursor-pointer" onClick={onPrev}>Prev</div>
            <div className="border-2 p-2 ">{pageNum}</div>
            <div className="border-2 p-2 border-l-0 rounded-r-xl cursor-pointer" onClick={onNext}>Next</div>
        </div>
    )
}

export default Pagination;