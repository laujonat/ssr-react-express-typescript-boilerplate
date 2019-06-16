export default ({ body }: { body: string }) => `
  <!DOCTYPE html>
  <html>
  <head>
    </head>
    <body style="margin:0">
      <div id="ssr">${body}</div>
    </body>
    <script src="build/app.js" defer></script>
  </html>
`;
