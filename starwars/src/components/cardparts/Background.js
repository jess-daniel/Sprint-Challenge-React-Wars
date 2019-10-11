import React from 'react';
import styled from "styled-components";

const BackgroundDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

`

const Ul = styled.ul`
list-style: none;
`

const Background = props => {

    return (
    <BackgroundDiv>
    <Ul>
        <li>Birth Year: {props.date}</li>
        <li>Gender: {props.gender}</li>
        <li>Height: {props.height}</li>
        <li>Eye Color: {props.eye}</li>
        <li>Hair Color: {props.hair}</li>
        <li>Mass: {props.mass}</li>
    </Ul>
    </BackgroundDiv>
    )
}

export default Background;