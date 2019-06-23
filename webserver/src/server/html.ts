function html({ app, initData, styles }: { app: string, initData: Object, styles: string }) {
  return (
  `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=contain">
    <script>window.INITIAL_DATA = ${JSON.stringify({ initData })}</script>
    ${styles}
    </head>
      <body>
        <div id="ssr">${app}</div>
        <script type="text/javascript" src="static/_c.[chunk].bundle.js"></script>
        <script type="text/javascript" src="static/common.[chunk].bundle.js"></script>
        <script type="text/javascript" src="static/runtime.[chunk].bundle.js"></script>
      </body>
  </html>
  `);
}

export default html;
