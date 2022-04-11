import React, { Component } from "react";
import styled, { css } from "styled-components";
import Logo from "../components/Logo";
import HEADERBUTTONS from "../components/HEADERBUTTONS";
import Sidebar from "../components/Sidebar";

function Nftauction(props) {
  return (
    <Container>
      <Logo1Row>
        <Logo
          style={{
            height: 200,
            width: 200
          }}
        ></Logo>
        <HEADERBUTTONS
          style={{
            width: 1446,
            height: 88,
            marginLeft: 114,
            marginTop: 24
          }}
        ></HEADERBUTTONS>
        <Sidebar
          style={{
            width: 211,
            height: 58,
            marginLeft: 21,
            marginTop: 54
          }}
        ></Sidebar>
      </Logo1Row>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(21,21,21,1);
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`;

const Logo1Row = styled.div`
  height: 200px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 108px;
  margin-left: -180px;
  margin-top: -12px;
`;

export default Nftauction;
