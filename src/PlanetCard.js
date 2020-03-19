import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card, CardImg, CardTitle, CardText, CardBody, Button, Col, Container
} from 'reactstrap';
import styled from "styled-components"

const NasaImg = styled.img`
    width: 75%;
    object-fit: scale;
`;

const NasaTitle = styled.h2`
    border-bottom: 1px solid white;
    padding-bottom: 2%; 

`

const NasaDesc = styled.p`
    border: 1px solid white;
    padding: 2%;
`;

const PlanetCard = props => {
    return (
        <div>
        <Container>
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <Container>
                    {/* <img width="75%" src={props.imageUrl} alt="Nasa image of the day" /> */}
                    <NasaImg src={props.imageUrl}/>
                </Container>
                <CardBody>
                    {/* <CardTitle>Title: {props.title}</CardTitle> */}
                    <NasaTitle>{props.title}</NasaTitle>
                    <h4>Author: {props.copyright}</h4>
                    {/* <CardText>Description: {props.explanation}</CardText> */}
                    <NasaDesc>{props.explanation}</NasaDesc>
                    
                </CardBody>
            </Card>
        </Container>
        </div>
        // <>
        // <div className="photo">
        //     <img className="planet-image" alt=" POTD from NASA" src={props.imageUrl} />
        // </div>
        // <div className="photoInfo">
        //     <h2>Title: {props.title}</h2>
        //     <h3>Author: {props.copyright}</h3>
        //     <p>Description: {props.explanation}</p>
        // </div>
        // </>
    )
}

export default PlanetCard;