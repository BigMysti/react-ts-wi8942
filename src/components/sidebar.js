import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import CupertinoButtonGrey from "./CupertinoButtonGrey";
import CupertinoFooter1 from "./CupertinoFooter1";

function Sidebar(props) {
  return (
    <Container {...props}>
      <Sidebaropen>
        <RectStack>
          <Rect></Rect>
          <Link to="/Untitled">
            <Button>
              <ButtonOverlay></ButtonOverlay>
            </Button>
          </Link>
        </RectStack>
      </Sidebaropen>
      <TextInputRow>
        <TextInput placeholder="wallet address"></TextInput>
        <CupertinoButtonGrey
          style={{
            height: 43,
            width: 132
          }}
          burnADrako="CONNECT"
        ></CupertinoButtonGrey>
      </TextInputRow>
      <CupertinoFooter1
        style={{
          height: 55,
          width: 318,
          marginTop: 974
        }}
      ></CupertinoFooter1>
      <YourBalance>YOUR BALANCE:</YourBalance>
      <TextInput2 placeholder="PLEASE CONNECT"></TextInput2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Sidebaropen = styled.div`
  width: 20px;
  height: 90px;
  flex-direction: column;
  display: flex;
  margin-top: 466px;
  margin-left: -20px;
`;

const Rect = styled.div`
  top: 0px;
  left: 18px;
  position: absolute;
  background-color: rgba(6,6,6,1);
  right: 0px;
  bottom: 0px;
`;

const Button = styled.div`
  top: 510px;
  left: 0px;
  width: 20px;
  height: 90px;
  position: absolute;
  background-color: rgba(80,74,74,1);
  border-top-left-radius: 9px;
  border-bottom-left-radius: 9px;
  border: none;
`;

const RectStack = styled.div`
  flex: 1 1 0%;
  margin-bottom: -480px;
  margin-top: -510px;
  margin-right: -319px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const TextInput = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 43px;
  width: 177px;
  font-size: 30px;
  border-width: 1px;
  border-color: rgba(242,238,238,1);
  border-radius: 4px;
  border-style: solid;
  background: transparent;
`;

const TextInputRow = styled.div`
  height: 43px;
  flex-direction: row;
  display: flex;
  margin-top: -592px;
  margin-left: 5px;
  margin-right: -103px;
`;

const YourBalance = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(245,242,242,1);
  text-align: left;
  font-size: 30px;
  margin-top: -936px;
  margin-left: 48px;
`;

const TextInput2 = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(177,165,3,1);
  height: 44px;
  width: 309px;
  font-size: 20px;
  text-align: center;
  border-width: 1px;
  border-color: rgba(240,237,237,1);
  margin-left: 5px;
  border-style: solid;
  background: transparent;
`;

export default Sidebar;
