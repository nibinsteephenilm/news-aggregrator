import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function SharedLayout(params) {
    return (
        <Container>
            <Header>Header</Header>
            <Outlet />
        </Container>
    );
}

const Container = styled.div``;
const Header = styled.div``;
