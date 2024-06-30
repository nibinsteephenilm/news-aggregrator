import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Search from "../components/Search";

export default function SharedLayout(params) {
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
                <Search/>
            </Header>
            <Outlet />
        </Container>
    );
}

const Container = styled.div`
`;
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 25px;
    background-color: #F5F5F5;
    /* margin-top: 20px; */
    border-radius: 26px;
    .header-left{
        display: flex;
        width: 75%;
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
