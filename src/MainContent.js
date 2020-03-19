import React, {useState, useEffect} from "react";
import axios from "axios";
import PlanetCard from "./PlanetCard";


const MainContent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=2rcQoYkkEMv2teef5FMzapIo0vxq1gqWolpF4buj')
        .then(response => {
            console.log(response);
            setData(response.data);
        })
    }, [])

    return (
        <div className="contentWrapper">
            <PlanetCard 
                imageUrl = {data.url}
                title = {data.title}
                copyright = {data.copyright}
                explanation = {data.explanation}
            />
        </div>
    )
    
}

export default MainContent;

// {data.map(() => {
//     return (
//         <PlanetCard 
//             imageUrl = {data.url}
//             copyright = {data.copyright}
//             explanation = {data.explanation}
//         />
//     )
// })}