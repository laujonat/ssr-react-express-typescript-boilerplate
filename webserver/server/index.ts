import React from 'react';
import express from 'express';
// import helmet from 'helmet';
import { renderToString } from 'react-dom/server';
import Counter from "../src/counter"
import html from './html';

const port = 8000;
const server = express();

// server.use(helmet());
server.use(express.static('dist'));

// server.get('/', (req, res) => {
//   res.send("hello world");
// })

server.get('/', (req, res) => {
  const body = renderToString(React.createElement(Counter));

  res.send(
    html({
      body
    })
  );
})


server.listen(port, () => console.log(`Example app listening on port ${port}!`));
