import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Search from "../components/Search";

export default function SharedLayout(params) {
    const [showDropDown, setShowDropDown] = useState(false);
    const [language, setLanguage] = useState("english");

    const handleSelectLanguage = () => {
        setShowDropDown(!showDropDown);
    };
    
    

    return (
        <Container>
            <Header className="wrapper">
                <div className="header-left">
                    <Logo>Entri.news</Logo>
                    <Nav>
                        <ul>
                            <li>
                                <a href="">News</a>
                            </li>
                            <li>
                                <a href="">Weather</a>
                            </li>
                            <li>
                                <a href="">About Us</a>
                            </li>
                        </ul>
                    </Nav>
                </div>
                <div className="header-right">
                    <Search q="search"/>
                    <Button onClick={handleSelectLanguage}>
                        Lan
                        <div className="drop-down-frame">
                            <img
                                src="./icons/drop-down-icon.svg"
                                alt="Drop down Icon"
                            />
                        </div>
                        {showDropDown && (
                            <DropDown>
                                <Option
                                    onClick={() => {
                                        setLanguage("english");
                                        console.log("selected");
                                    }}
                                >
                                    English
                                </Option>
                                <Option onClick={() => setLanguage("ml")}>
                                    Malayalam
                                </Option>
                            </DropDown>
                        )}
                    </Button>
                </div>
            </Header>
            <Outlet />
        </Container>
    );
}

const Container = styled.div``;
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 25px;
    background-color: #f5f5f5;
    /* margin-top: 20px; */
    border-radius: 26px;
    .header-left {
        display: flex;
        width: 75%;
    }
    .header-right {
        display: flex;
        gap: 30px;
        align-items: center;
    }
`;
const Logo = styled.div`
    color: #0061b5;
    font-size: 28px;
    font-family: "Satoshi-Bold";
`;
const Nav = styled.nav`
    margin-left: 10%;
    display: flex;
    align-items: center;
    ul {
        display: flex;
        gap: 20px;
        align-items: center;
        /* height: 100%; */
        li {
            display: flex;
            align-items: center;
            height: 100%;
            /* margin-top: 12px; */
            a {
                font-family: "Satoshi-Bold";
                color: #3e3232;
            }
        }
    }
`;

const Button = styled.button`
    display: flex;
    gap: 5px;
    align-items: center;
    color: #000000;
    font-family: "Satoshi-Medium";
    border: 1px solid #9f9e9e;
    padding: 6px 15px;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    .drop-down-frame {
        display: flex;
        width: 15px;
        margin-top: 3px;
    }
`;

const DropDown = styled.ul`
    position: absolute;
    height: auto;
    width: 100px;
    top: 110%;
    right: 0%;
    border: 1px solid #9f9e9e;
    border-radius: 6px;
    background-color: #ffffffb3;
    z-index: 100;
`;

const Option = styled.li`
    width: 100%;
    padding: 5px;
`;
