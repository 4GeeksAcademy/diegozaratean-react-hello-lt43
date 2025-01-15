
import React from "react";

const Card = (props)=>{
    return(
        <div className="card" style={{width: "18rem", backgroundColor: 'green' }} >
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.usuario}</h5>
                <p className="card-text">{props.message}</p>
                <a href="#" className="btn btn-danger">likes {props.likes}</a>
            </div>
        </div>
    )
}

export default Card