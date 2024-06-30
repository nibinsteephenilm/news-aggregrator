import React from "react";
import styled from "styled-components";
import { EndDateElement } from "../utils/functions";

export default function NewsCard({
    image,
    title,
    content,
    publishedAt,
    source,
}) {
    return (
        <Container>
            <img src={image ? image : "./news.jpg"} alt={title} />
            <News>
                <Headline>{title}</Headline>
                <Description>{content}</Description>
                <Details>
                    <PublishedAt>
                        <EndDateElement date_to_covert={publishedAt} />
                    </PublishedAt>
                    <Source>{source}</Source>
                </Details>
            </News>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    position: relative;
    img {
        width: 100%;
        height: 100%;
    }
`;

const News = styled.div`
    width: 100%;
    padding: 16px;
    position: absolute;
    height: 30%;
    bottom: 0;
    overflow: hidden;
    background-color: #ffffffb5;
`;

const Headline = styled.h2`
    font-size: 15px;
    color: #000000;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: "Satoshi-Medium";
    width: 100%;
`;

const Description = styled.p`
    font-size: 12px;
    color: #555;
    margin: 8px 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: "Satoshi-Medium";
    width: 100%;
    color: #333;
`;

const Details = styled.div`
    display: flex;
    justify-content: space-between;
`;

const PublishedAt = styled.span`
    font-size: 10px;
    color: #000000;
`;

const Source = styled.span`
    font-size: 10px;
    color: #000000;
`;
