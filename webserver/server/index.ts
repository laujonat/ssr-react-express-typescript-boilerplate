import React from "react";
import express from "express";
// import helmet from 'helmet';
import Counter from "../client/components/Counter";
import { renderToString } from "react-dom/server";
import html from "./html";

const port = 8000;
const server = express();

// server.use(helmet());
server.use("/dist", express.static("build"));

server.get("/", (req, res) => {
  const body = renderToString(React.createElement(Counter));

  res.send(
    html({
      body
    })
  );
});


server.listen(port, () => console.log(`Example app listening on port ${port}!`));
