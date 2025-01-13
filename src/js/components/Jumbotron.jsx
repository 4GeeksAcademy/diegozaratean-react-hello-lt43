import React from "react";
import Libro from "./Libro";

const Jumbotron = ()=>{
    return(
        <div className="container my-5">
            <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
                <button type="button" className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill" aria-label="Close"></button>
                <svg className="bi mt-5 mb-3" width="48" height="48"><use xlinkHref="#check2-circle"></use></svg>
                <h1 className="text-body-emphasis">Placeholder jumbotron</h1>
                <p className="col-lg-6 mx-auto mb-4">
                This faded back in the class jumbotron is useful for placeholder content. It's also a great way to add a bit of context to a page or section when no content is available and to encourage visitors to take a specific action.
                </p>
                <Libro />
                <Libro />
                <Libro />

                
               
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, laudantium quisquam! Corporis at eos beatae architecto suscipit animi explicabo quasi ipsa quisquam maxime ratione sint nam sapiente odio, itaque exercitationem?
                <Libro />
               
                </div>
            </div>
        </div>
    )
}

export default Jumbotron