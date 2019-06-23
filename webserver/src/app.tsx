import React from "react";
import { HelloWorld } from './components/HelloWorld';
import { createGlobalStyle } from "./theme";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
`

interface App {}

function App({ data }: { data: Object }) {
  return <HelloWorld data={data}/>;
}


export default App;
