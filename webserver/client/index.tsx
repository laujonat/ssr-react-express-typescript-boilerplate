import React from "react";
import ReactDOM from 'react-dom'
import { HelloWorld } from "./components/HelloWorld";
import { WindowInitData } from './types/index';

/**
 * We assume the initial render has taken place from the SSR.
 * React expects that the rendered content is identical between the server and the client.
 * It can patch up differences in text content, but you should treat mismatches as bugs and fix them.
 * https://reactjs.org/docs/react-dom.html
 * */
((data) => {
    ReactDOM.hydrate(
    <HelloWorld data={data} />,
    document.getElementById("ssr")
    );
})((window as WindowInitData).data)
