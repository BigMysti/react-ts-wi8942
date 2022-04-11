import React, { Component } from "react";
import styled, { css } from "styled-components";
import CupertinoButtonDelete1 from "./CupertinoButtonDelete1";
import CupertinoButtonDelete2 from "./CupertinoButtonDelete2";
import CupertinoButtonDelete3 from "./CupertinoButtonDelete3";
import CupertinoButtonDelete4 from "./CupertinoButtonDelete4";
import CupertinoButtonDelete5 from "./CupertinoButtonDelete5";
import CupertinoButtonDelete6 from "./CupertinoButtonDelete6";

function CupertinoFooter1(props) {
  return (
    <Container {...props}>
      <CupertinoButtonDelete1
        iconName="ios-trash"
        style={{
          height: 44,
          width: 44
        }}
        icon="logo-twitter"
      ></CupertinoButtonDelete1>
      <CupertinoButtonDelete2StackStack>
        <CupertinoButtonDelete2Stack>
          <CupertinoButtonDelete2
            iconName="ios-trash"
            style={{
              height: 44,
              width: 44,
              position: "absolute",
              left: 0,
              top: 0
            }}
            icon="logo-twitter"
          ></CupertinoButtonDelete2>
          <Solbay>@SOLBAY</Solbay>
        </CupertinoButtonDelete2Stack>
        <CupertinoButtonDelete3
          style={{
            height: 44,
            width: 44,
            position: "absolute",
            left: 44,
            top: 0
          }}
        ></CupertinoButtonDelete3>
      </CupertinoButtonDelete2StackStack>
      <Drakos2>@DRAKOS</Drakos2>
      <CupertinoButtonDelete4
        iconName="ios-trash"
        style={{
          height: 44,
          width: 44,
          position: "absolute",
          left: 139,
          top: 0
        }}
        icon="ios-paper"
      ></CupertinoButtonDelete4>
      <CupertinoButtonDelete5StackStack>
        <CupertinoButtonDelete5Stack>
          <CupertinoButtonDelete5
            iconName="ios-trash"
            style={{
              height: 44,
              width: 44,
              position: "absolute",
              left: 0,
              top: 0
            }}
            icon="ios-mail"
          ></CupertinoButtonDelete5>
          <BuiltByLilsmoke>BUILT BY LILSMOKE</BuiltByLilsmoke>
        </CupertinoButtonDelete5Stack>
        <CupertinoButtonDelete6
          iconName="ios-trash"
          style={{
            height: 44,
            width: 44,
            position: "absolute",
            left: 53,
            top: 0
          }}
          icon="md-build"
        ></CupertinoButtonDelete6>
      </CupertinoButtonDelete5StackStack>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(96,91,91,1);
  flex-direction: row;
  border-width: 1px;
  border-color: rgba(234,226,226,1);
  border-style: solid;
  position: relative;
`;

const Solbay = styled.span`
  font-family: Roboto;
  top: 35px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 15px;
  width: 48px;
  font-size: 10px;
`;

const CupertinoButtonDelete2Stack = styled.div`
  top: 0px;
  left: 0px;
  width: 48px;
  height: 50px;
  position: absolute;
`;

const CupertinoButtonDelete2StackStack = styled.div`
  top: 0px;
  left: 51px;
  width: 88px;
  height: 50px;
  position: absolute;
`;

const Drakos2 = styled.span`
  font-family: Roboto;
  top: 35px;
  left: -1px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 25px;
  width: 52px;
  font-size: 10px;
`;

const BuiltByLilsmoke = styled.span`
  font-family: Roboto;
  top: 36px;
  left: 29px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 13px;
  width: 93px;
  font-size: 10px;
`;

const CupertinoButtonDelete5Stack = styled.div`
  top: 0px;
  left: 0px;
  width: 122px;
  height: 49px;
  position: absolute;
`;

const CupertinoButtonDelete5StackStack = styled.div`
  top: 0px;
  left: 187px;
  width: 122px;
  height: 49px;
  position: absolute;
`;

export default CupertinoFooter1;
