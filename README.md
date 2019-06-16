# Actualy SSR Typescript React w/ Flask API Boilerplate

Not reinventing the wheel here, but I had a difficult time finding a version of this without too much fancy configuration going on. 
This is a SSR Typescript React boilerplate served from an Express web server.  Not fully configured, but Flask would be intended to serve API endpoints. 


### Web server Typescript Compilation:
1) Output is specified in `tsconfig.json` to build transpiled Javascript into `build/dist`
2) `server/index.ts` is the server entry file serves static DOM skeleton on compilation
3) `client/index.ts` will render a React component with hydrate `ReactDOM.hydrate` onto the static template file. (You should use React streams)

Still having some issues with TS transpiling, good luck.
```
- $ export NODE_OPTIONS=--max_old_space_size=4096

```

### Flask API 
```bash
# Install virtualenv 
- $ pip install -r requirements.txt 
- $ pip install -U $(pip freeze | awk '{split($0, a, "=="); print a[1]}')
- $ python -m venv <__dir>
- $ source venv/bin/activate 

# You may skip this if using python-dotenv
- $ export FLASK_APP=main.py
- $ export FLASK_ENV=development # optional for debug mode
```

### Web Server 
```bash
- $ cd webserver && npm install 
```

