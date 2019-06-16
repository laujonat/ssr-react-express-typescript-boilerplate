export default ({ body }: { body: string }) => `
  <!DOCTYPE html>
  <html>
  <head>
    </head>
    <body style="margin:0">
      <div id="ssr">${body}</div>
    </body>
    <script src="dist/client.js" defer></script>
  </html>
`;
