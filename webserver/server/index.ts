import React from "react";
import express from "express";
import { HelloWorld } from "../client/components/HelloWorld";
import { renderToString } from "react-dom/server";
import html from "./html";

const port = 8000;
const server = express();

// server.use(helmet());
server.use("/server/js/out", express.static("build"));
server.use("/client/js/out", express.static("build"));

server.get("/", (req, res) => {
  const body = renderToString(React.createElement(HelloWorld));

  res.send(
    html({
      body
    })
  );
});

server.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
