# An Actual SSR Typescript React w/ Flask API Boilerplate

Not reinventing the wheel here, but I had a difficult time finding a SSR solution without fancy configuration. 
This is a SSR Typescript React boilerplate served from a Express Node web server.  Not fully configured, but Flask would be intended to serve API endpoints. 


### Web server Typescript Compilation:
1) Output is specified in `tsconfig.json`. This will build transpiled Javascript into `build/dist`.
2) `server/index.ts` is the server entry file and will serve static DOM skeleton on compilation.
3) `client/index.ts` will render a React component with hydrate `ReactDOM.hydrate` onto the static template file. (You should use React streams)

Still having some issues with TS transpiling, good luck.
```
- $ export NODE_OPTIONS=--max_old_space_size=4096

```

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
