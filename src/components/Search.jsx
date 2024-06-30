import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import debounce from "../utils/functions";

const Search = ({ inputWidth, q }) => {
    // State for the search query
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchInput, setSearchInput] = useState("");

    const handleSearchInputChange = (event) => {
        const query = event.target.value;

        const debouncedSearch = debounce(() => {
            searchParams.set(q, query);
            setSearchParams(searchParams);
        }, 500);

        setSearchInput(query);

        debouncedSearch();
    };

    // Function to handle changes in the search input

    return (
        <Container>
            <SearchContainer>
                <SearchInput
                    type="text"
                    placeholder="Search..."
                    value={searchInput}
                    onChange={handleSearchInputChange}
                    width={inputWidth} // Pass the inputWidth prop
                />
                <SearchIcon>
                    <img src="./icons/search-icon.svg" alt="Search Icon" />
                </SearchIcon>
            </SearchContainer>
        </Container>
    );
};

export default Search;

const Container = styled.div``;

const SearchContainer = styled.div`
    position: relative;
`;

const SearchInput = styled.input`
    width: ${({ width }) =>
        width || "100%"}; /* Set width from prop or default to 100% */
    padding: 10px 45px 10px 40px;
    border-radius: 15px;
    background-color: #F5F5F5;
    border: 1px solid #9f9e9e;  ;
    outline: none;
`;

const SearchIcon = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    right: 15px;
    transform: translate(35%, -50%);
    width: 20px;
`;
