import React from "react";

function Pagination(){
    return(
        <div className="flex justify-center my-4">
            <div className="border-2 p-2 border-r-0 rounded-l-xl">Prev</div>
            <div className="border-2 p-2 ">1</div>
            <div className="border-2 p-2 border-l-0 rounded-r-xl">Next</div>
        </div>
    )
}

export default Pagination;