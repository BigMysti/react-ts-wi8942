import React, { Component } from "react";
import styled, { css } from "styled-components";

function Logo(props) {
  return (
    <Container {...props}>
      <Image2
        src={require("../assets/images/Screenshot_2022-04-09_175448-removebg-preview.png")}
      ></Image2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image2 = styled.img`
  width: 200px;
  height: 100%;
  object-fit: contain;
`;

export default Logo;
