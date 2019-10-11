import React, {useState, useEffect} from 'react';
import axios from "axios";
import Background from '../cardparts/Background';
import Title from '../cardparts/Title';
import styled from "styled-components";

const BackgroundDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    height: 350px;
`

const CharacterCard = props => {
    const [cardState, setCardState] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.co/api/people/")
            .then(response => {
                console.log(response.data.results);
                setCardState(response.data.results);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <div>
            {cardState.map((card, index) => (
                <BackgroundDiv>
                    <Title key={index} card={card} title={card.name}></Title>
                    <Background key={index} card={card} date={card.birth_year} gender={card.gender} hair={card.hair_color} eye={card.eye_color} mass={card.mass}></Background>
                </BackgroundDiv>
            ))}
        </div>
    )
}

export default CharacterCard;
