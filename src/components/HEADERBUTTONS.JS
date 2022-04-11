import React, { Component } from "react";
import styled, { css } from "styled-components";
import CupertinoButtonGrey from "./CupertinoButtonGrey";
import Logo from "./Logo";

function HEADERBUTTONS(props) {
  return (
    <Container {...props}>
      <CupertinoButtonGrey3StackRow>
        <CupertinoButtonGrey3Stack>
          <CupertinoButtonGrey
            style={{
              position: "absolute",
              left: 180,
              top: 12,
              width: 216,
              height: 88,
              borderRadius: 21,
              shadowRadius: 0,
              overflow: "visible",
              opacity: 0.5,
              borderStyle: "dashed",
              borderWidth: 3,
              borderColor: "#000000",
              boxShadow: "3px 3px 0px  1px rgba(0,0,0,1) "
            }}
            burnADrako="BURN A DRAKO"
          ></CupertinoButtonGrey>
          <Logo
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: 200,
              width: 200
            }}
          ></Logo>
          <Logo
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: 200,
              width: 200
            }}
          ></Logo>
          <Logo
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: 200,
              width: 180
            }}
          ></Logo>
        </CupertinoButtonGrey3Stack>
        <CupertinoButtonGrey
          style={{
            width: 216,
            height: 88,
            borderRadius: 21,
            overflow: "visible",
            opacity: 0.5,
            shadowRadius: 0,
            borderStyle: "dashed",
            borderWidth: 3,
            borderColor: "#000000",
            marginLeft: 30,
            marginTop: 12,
            boxShadow: "3px 3px 0px  1px rgba(0,0,0,1) "
          }}
          burnADrako="NFT AUCITONS"
        ></CupertinoButtonGrey>
        <CupertinoButtonGrey
          style={{
            width: 216,
            height: 88,
            borderRadius: 21,
            shadowRadius: 0,
            overflow: "visible",
            borderWidth: 3,
            borderColor: "#000000",
            opacity: 0.5,
            borderStyle: "dashed",
            marginLeft: 30,
            marginTop: 12,
            boxShadow: "3px 3px 0px  1px rgba(0,0,0,1) "
          }}
          burnADrako="RAFFLE TICKETS"
        ></CupertinoButtonGrey>
        <CupertinoButtonGrey
          style={{
            width: 216,
            height: 88,
            borderRadius: 21,
            shadowRadius: 0,
            overflow: "visible",
            borderWidth: 3,
            borderColor: "#000000",
            opacity: 0.5,
            borderStyle: "dashed",
            marginLeft: 30,
            marginTop: 12,
            boxShadow: "3px 3px 0px  1px rgba(0,0,0,1) "
          }}
          burnADrako="P2P TOKEN TRADING"
        ></CupertinoButtonGrey>
        <CupertinoButtonGrey
          style={{
            width: 216,
            height: 88,
            borderRadius: 21,
            shadowRadius: 0,
            overflow: "visible",
            borderWidth: 3,
            borderColor: "#000000",
            opacity: 0.5,
            borderStyle: "dashed",
            marginLeft: 30,
            marginTop: 12,
            boxShadow: "3px 3px 0px  1px rgba(0,0,0,1) "
          }}
          burnADrako="P2P NFT TRADING"
        ></CupertinoButtonGrey>
        <CupertinoButtonGrey
          style={{
            width: 216,
            height: 88,
            borderRadius: 21,
            shadowRadius: 0,
            overflow: "visible",
            borderWidth: 3,
            borderColor: "#000000",
            opacity: 0.5,
            borderStyle: "dashed",
            marginLeft: 30,
            marginTop: 12,
            boxShadow: "3px 3px 0px  1px rgba(0,0,0,1) "
          }}
          burnADrako="SWEEP A FLOOR"
        ></CupertinoButtonGrey>
      </CupertinoButtonGrey3StackRow>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const CupertinoButtonGrey3Stack = styled.div`
  width: 396px;
  height: 200px;
  position: relative;
`;

const CupertinoButtonGrey3StackRow = styled.div`
  height: 200px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-left: -180px;
  margin-top: -12px;
`;

export default HEADERBUTTONS;
