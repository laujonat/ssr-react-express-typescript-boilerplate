import React from "react";
import express from "express";
import path from "path";
import fs from "fs";
import { HelloWorld } from "../client/components/HelloWorld";
import { renderToString } from "react-dom/server";

const port: number = 8000;
const server: express.Application = express();

server.use("/static", express.static(path.resolve(__dirname, "../build")));
server.get("/", (req, res) => {
  const body: string = renderToString(React.createElement(HelloWorld));

  const initData: Object = { data: {
    0: "SSR Express + TypeScript"
  }};

  const indexFile: string = path.resolve("./dist/index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Oops!", err);
      throw err;
    }
    data.replace('<div id="ssr"></div>', `<div id=\"ssr\">${body}</div>`);
    data.replace('window.INITIAL_DATA', `window.INITIAL_DATA = ${JSON.stringify({ initData })}`);
    return res.send(
      data
    );
  });
});

server.listen(port, () =>
  console.log(`Listening on port: ${port}`)
);
