import React, { Component } from "react";
import styled, { css } from "styled-components";

function CupertinoButtonGrey(props) {
  return (
    <Container {...props}>
      <BurnADrako>{props.burnADrako || "BURN A DRAKO"}</BurnADrako>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #8E8E93;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 5px;
  padding-left: 16px;
  padding-right: 16px;
`;

const BurnADrako = styled.span`
  font-family: Aclonica;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
`;

export default CupertinoButtonGrey;
