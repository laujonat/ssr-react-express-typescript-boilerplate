export default ({ body, data }: { body: string, data: Object }) => `
  <!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8" />
  <meta http-equiv="Content-Security-Policy" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script>window.INITIAL_DATA = ${JSON.stringify({ data })}</script>
  </head>
    <body style="margin:0">
      <div id="ssr">${body}</div>
    </body>
    <script src="/static/main.chunk.bundle.js"></script>
    <script src="/static/index.tsx.chunk.bundle.js"></script>
  </html>
`;
