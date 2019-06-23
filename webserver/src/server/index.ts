import React from "react";
import express from "express";
import path from "path";
import fs from "fs";
import App from "../app";
import { renderToString } from "react-dom/server";
import html from "./html";
import { ServerStyleSheet } from "../theme";

const initData: Object = {
  data: {
    0: "0", 1: "1", 2: "2"
  }
};

const port: number = 8000;
const server: express.Application = express();

server.use("/static", express.static(path.resolve(process.cwd(), "build/client")));

server.get("/", (req, res) => {
  const sheet = new ServerStyleSheet();

  const app: string = renderToString(sheet.collectStyles(React.createElement(App)));

  const styles = sheet.getStyleTags();

  const indexFile: string = path.resolve("src/assets", "index.html");

  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Oops!", err);
      throw err;
    }

    const staticHtml = html({ app, styles, initData });
    return res.send(
      staticHtml
    );
  });
});

server.listen(port, () =>
  console.log(`Listening on port: ${port}`)
);
