import React from "react";

const Libro = ()=>{
    return(
        <div className="w-25">
            Biografia nueva genearciópn: <img className="w-50" src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp&w=256" alt="" />
            <p>$ 150 USD</p>
            <button className="btn btn-primary px-5 mb-5" type="button">
                Compra mi segundo libro
            </button>
        </div>
    )
}

export default Libro