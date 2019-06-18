# (Works) SSR Typescript React w/ Flask API Boilerplate

Not reinventing the wheel here, but I had a difficult time finding a SSR solution without fancy configuration. 
This is a SSR Typescript React boilerplate served from a Express Node web server.  Not fully configured, but Flask would be intended to serve API endpoints. 

### Web server Typescript Compilation:
1) Output is specified in `tsconfig.json`. This will build transpiled Javascript into the template in `dist/`.
2) `server/index.ts` is the server entry file and will serve static DOM skeleton on compilation. `window.INIT_DATA` is defined and replaced upon server render with the initial data for fast loading. 
3) `client/index.ts` will render a React component with hydrate `ReactDOM.hydrate` onto the static template file. (You should use React streams)
4) You can verify this is SSR by checking `data-reactroot` rendered into the DOM tree.

Note, this is still a pretty shabby solution. 

### Web Server 
```bash
- $ cd webserver && npm install 

# Dev Build 
- $ npm run start:dev 

# Prod Build
- $ npm run start

# Debug Dev
- $ npm run start:debug
```

### Flask API (python3) 
```bash
# Install virtualenv 
- $ pip3 install -r requirements.txt 
- $ pip3 install -U $(pip freeze | awk '{split($0, a, "=="); print a[1]}')
- $ python -m venv <__dir>
- $ source venv/bin/activate 

# You may skip this if using python-dotenv
- $ export FLASK_APP=main.py
- $ export FLASK_ENV=development # optional for debug mode
```
