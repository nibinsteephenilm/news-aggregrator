import React from "react";
import styled from "styled-components";

function WeatherCard({ location, temp, description, icon }) {
    return (
        <Container>
            <LocationName>
                <div>
                    <img src="" alt="" />
                </div>
                <p>{location}</p>
            </LocationName>
            <p>{temp}</p>
            <p>{description}</p>
            <p>{icon}</p>
        </Container>
    );
}

export default WeatherCard;

const Container = styled.div`
    border: 1px solid #ddd;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    width: 100%;
    height: 100%;

`;
const LocationName = styled.div``;
