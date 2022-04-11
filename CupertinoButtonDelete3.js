import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function CupertinoButtonDelete3(props) {
  return (
    <Container {...props}>
      <MaterialCommunityIconsIcon
        name="discord"
        style={{
          color: "#000",
          fontSize: 24
        }}
      ></MaterialCommunityIconsIcon>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 5px;
`;

export default CupertinoButtonDelete3;
