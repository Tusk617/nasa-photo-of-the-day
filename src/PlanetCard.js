import React from "react";

const PlanetCard = props => {
    return (
        <>
        <div className="photo">
            <img className="planet-image" alt=" POTD from NASA" src={props.imageUrl} />
        </div>
        <div className="photoInfo">
            <h2>Title: {props.title}</h2>
            <h3>Author: {props.copyright}</h3>
            <p>Description: {props.explanation}</p>
        </div>
        </>
    )
}

export default PlanetCard;