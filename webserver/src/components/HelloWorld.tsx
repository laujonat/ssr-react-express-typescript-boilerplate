import React from "react";
import { IHelloWorldProps } from "../types/index";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  font-size: 40px;
  background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);
`;

export const HelloWorld: React.FC<IHelloWorldProps<Object>> = ({ data }) => {
  return <AppContainer>Server Rendered! {data}</AppContainer>;
};
